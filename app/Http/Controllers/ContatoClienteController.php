<?php

namespace App\Http\Controllers;



use App\Http\Controllers\Controller;
use App\Models\Contato;
use Illuminate\Http\Request;
 
//controle 
class ContatoClienteController extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */

    //pega/gera lista de contato
    public function indexContatos(){
        
        $collection = Contato::orderBy('id', 'desc')->get();

        return response()->json($collection, 200);
    }

    //cria contato
    public function criaContato(Request $request){

       $contato = new Contato;
       $contato->cliente_id = $request->cliente_id;
       $contato->nome_contato = $request->nome_contato;
       $contato->fone = $request->fone;
       $contato->email = $request->email;
       $contato->observacao = $request->observacao;
       $contato->save();

       return response()->json('Contato cadastrado com sucesso', 200);
       return response()->json('Não foi possível cadastrar o Contato');

    }

    //Update contato
    public function updateContato($id , Request $request){

    Contato::where('id', $id)->update([
        'cliente_id' => $request->cliente_id,
        'nome_contato' => $request->nome_contato,
        'fone' => $request->fone,
        'email' => $request->email,
        'observacao' => $request->observacao,    
        ]);
       return response()->json('Contato editado com sucesso', 200);
    }


    //delete contato
    public function deleteContato($id){
        $deleted = Contato::where('id', $id)->delete();
          if($deleted){
           return response()->json('Contato excluido com sucesso', 200);
          } else {
          return response()->json('Não foi possível excluir o Contato');
        }
    }



}
     


