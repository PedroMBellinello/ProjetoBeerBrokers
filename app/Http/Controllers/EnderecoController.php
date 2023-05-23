<?php

namespace App\Http\Controllers;


 
use App\Http\Controllers\Controller;
use App\Models\Endereco;
use Illuminate\Http\Request;

//controle 
class EnderecoController extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */

    //pega/gera lista de endereçõs 
    public function indexEndereco(){
        
        $collection = Endereco::orderBy('id', 'desc')->get();

        return response()->json($collection, 200);
    }

    //cria endereçõs
    public function criaEndereco(Request $request){

          $Endereco = new Endereco;
          $Endereco->cliente_id = $request->cliente_id;
          $Endereco->cep = $request->cep;
          $Endereco->endereco = $request->endereco;
          $Endereco->numero = $request->numero;
          $Endereco->complemento = $request->complemento;
          $Endereco->bairro = $request->bairro;
          $Endereco->cidade= $request->cidade;
          $Endereco->uf = $request->uf;
          $Endereco->save();

          return response()->json('Endereço cadastrado com sucesso', 200);
          return response()->json('Não foi possivel cadastrar Endereço');

    }
     
     //update endereços
    public function updateEndereco($id , Request $request){
        Endereco::where('id', $id)->update([
            'cep' => $request->cep,
            'endereco' => $request->endereco,
            'numero' => $request->numero,
            'complemento' => $request->complemento,
            'bairro' => $request->bairro,
            'cidade'=> $request->cidade,
            'uf' => $request->uf
        ]);
          return response()->json('Endereço editado com sucesso', 200);
    }
   

     //delete endereços
    public function deleteEndereco($id){
        $deleted = Endereco::where('id', $id)->delete();
         if($deleted){
           return response()->json('Endereço excluido com sucesso', 200);
         } else {
            return response()->json('Não foi possível excluir o endereço');
        }
    }



}
     


