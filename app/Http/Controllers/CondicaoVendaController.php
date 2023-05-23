<?php

namespace App\Http\Controllers;



use App\Http\Controllers\Controller;
use App\Models\CondicaoVenda;
use App\Models\Pedido;
use Illuminate\Http\Request;

//controle 
class CondicaoVendaController extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */

    //pega/gera lista de contato
    public function indexCondicaoVenda(){
        
        $collection = CondicaoVenda::orderBy('id', 'desc')->get();

        return response()->json($collection, 200);
    }

    //cria contato
    public function criaCondicaoVenda(Request $request){

       $CondicaoVenda = new CondicaoVenda;
       $CondicaoVenda->id = $request->id;
       $CondicaoVenda->descricao = $request->descricao;
       $CondicaoVenda->save();

       return response()->json('CondicaoVenda cadastrado com sucesso', 200);
       return response()->json('Não foi possível cadastrar a CondicaoVenda');

    }

    //Update contato
    public function updateCondicaoVenda($id , Request $request){

    Pedido::where('id', $id)->update([
        'id' => $request->id,
        'descricao' => $request->descricao
        ]);
       return response()->json('CondicaoVenda editado com sucesso', 200);
    }


//     //delete contato
//     public function deleteContato($id){
//         $deleted = Contato::where('id', $id)->delete();
//           if($deleted){
//            return response()->json('Contato excluido com sucesso', 200);
//           } else {
//           return response()->json('Não foi possível excluir o Contato');
//         }
//     }



}
     


