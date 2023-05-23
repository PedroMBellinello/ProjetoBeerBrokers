<?php

namespace App\Http\Controllers;
 
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use App\Models\Cliente;
use App\Models\Contato;
use Illuminate\Http\Request;
use App\Models\Endereco;
use Illuminate\Support\Facades\Auth;

//controle 
class ClienteController extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */

    //pega/gera lista de clientes 
    public function indexClientes(){
    
          // auth()->user()->id 10
        $collection = Cliente::where('user_id', Auth::id() )->orderBy('id', 'desc')->get();

        return response()->json($collection , 200);
    
    }





  

    //Cria o cliente no banco e o endereço vinculado ao id do cliente 
  public function criaClienteEndereco(Request $request) {
    try {
      
      $request->validate([
        'cnpj' => 'required',
        'razao' => 'required',
        'fantasia' => 'required',
        'insc_estadual' => 'required',
        'incs_municipal' => 'required',
        'email' => 'required',
        'fone' => 'required',
        'cep' => 'required',
        'endereco' => 'required',
        'numero' => 'required',
        'complemento' => 'required',
        'bairro' => 'required',
        'cidade' => 'required',
        'uf' => 'required',
        'nome_contato' => 'required'
    ]);

      // Criar um novo cliente
      $cliente = Cliente::create([
          'user_id' => Auth::id(),
          'cnpj' => $request->cnpj,
          'razao' => $request->razao,
          'fantasia' => $request->fantasia,
          'insc_estadual' => $request->insc_estadual,
          'incs_municipal' => $request->incs_municipal,
          'email' => $request->email,
          'fone' => $request->fone,
         // 'observacao' => $request->observacao
      ]);
  
      // Criar um novo endereço associado ao cliente
      $endereco = Endereco::create([
          'cliente_id' => $cliente->id,
          'cep' => $request->cep,
          'endereco' => $request->endereco,
          'numero' => $request->numero,
          'complemento' => $request->complemento,
          'bairro' => $request->bairro,
          'cidade' => $request->cidade,
          'uf' => $request->uf
      ]);

      $contato = Contato::create([
        'cliente_id' => $cliente->id,
        'nome_contato'=> $request->nome_contato,
        'fone' => $request->fone,
        'email' => $request->email,
      //  'observacao' => $request->observacao,
      ]);   
      
    return response()->json('Cliente, endereço e contato criados com sucesso', 200);

    } catch (ValidationException $e) {
        // Captura os erros de validação
        $errors = $e->validator->errors()->all();
        return response()->json(['errors' => 'Favor preencher todos os dados'], 500);
    }
  }
  
 

  //update cliente
  public function updateCliente($id , Request $request){
    Cliente::where('id', $id)->update([
       'cnpj' => $request->cnpj,
       'razao' => $request->razao,
       'fantasia' => $request->fantasia,
       'insc_estadual' => $request->insc_estadual,
       'incs_municipal' => $request->incs_municipal,
       'email' => $request->email,
       'fone' => $request->fone,
       'observacao' => $request->observacao
   ]);
     return response()->json('cliente editado com sucesso', 200);
  }

     


  public function deleteCliente(Request $request, $id)
  {
      $deleted = Cliente::where('id', $id)->delete();
  
      if ($deleted) {
          return response()->json('Cliente excluído com sucesso', 200);
      } else {
          return response()->json('Não foi possível excluir o cliente', 400);
      }
      
  }

  










































    //Cria cliente
    public function criaCliente(Request $request){
       
        $Cliente = new Cliente;
        $Cliente->user_id = 15;
        $Cliente->cnpj = $request->cnpj;
        $Cliente->razao = $request->razao;
        $Cliente->fantasia = $request->fantasia;
        $Cliente->insc_estadual = $request->insc_estadual;
        $Cliente->incs_municipal = $request->incs_municipal;
        $Cliente->email = $request->email;
        $Cliente->fone = $request->fone;
        $Cliente->observacao = $request->observacao;
        $Cliente->save();

        return response()->json('cliente criado com sucesso', 200);
        return view('ClienteCadastrado');
    }


     




  

}
        



