<?php

namespace App\Http\Controllers;

 

use App\Http\Controllers\Controller;
use App\Models\Pedido;
use Illuminate\Http\Request;

//controle 
class PedidoController extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */

    //pega/gera lista de contato
    public function indexPedido(){
        
        $collection = Pedido::orderBy('id', 'desc')->get();

        return response()->json($collection, 200);
    }

    //cria contato
    public function criaPedido(Request $request){

       $Pedido = new Pedido;
       $Pedido->cliente_id = $request->cliente_id;
       $Pedido->endereco_id = $request->endereco_id;
       $Pedido->statusPedido_id = $request->statusPedido_id;
       $Pedido->dt_pedido = $request->dt_pedido;
       $Pedido->condicaoVenda_id = $request->condicaoVenda_id;
       $Pedido->tp_frete = $request->tp_frete;
       $Pedido->observacoes = $request->observacoes;
       $Pedido->vl_mercadorias = $request->vl_mercadorias;
       $Pedido->vl_frete = $request->vl_frete;
       $Pedido->vl_pedido = $request->vl_pedido;
       $Pedido->save();

       return response()->json('Pedido cadastrado com sucesso', 200);
       return response()->json('Não foi possível cadastrar o Pedido');

    }

//     //Update contato
//     public function updateContato($id , Request $request){

//     Contato::where('id', $id)->update([
//         'cliente_id' => $request->cliente_id,
//         'nome_contato' => $request->nome_contato,
//         'fone' => $request->fone,
//         'email' => $request->email,
//         'observacao' => $request->observacao,    
//         ]);
//        return response()->json('Contato editado com sucesso', 200);
//     }


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
     


