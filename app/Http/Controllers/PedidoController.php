<?php

namespace App\Http\Controllers;

 

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use App\Models\Pedido;
use App\Models\PedidoItem;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

//controle 
class PedidoController extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */


   // pega/gera lista de contato
    public function getdadosPedidos(){
        
        $collection = Pedido::where('user_id', Auth::id())->orderBy('id', 'desc')->get();

        return response()->json($collection, 200);
    }


    public function indexPedido(){
        // Obter o ID do usuário logado na sessão
        $userId = Auth::user()->id; 
        $collection = Pedido::join('Cliente', 'Pedido.cliente_id', '=', 'Cliente.id')
            ->select('Pedido.id')
            ->where('Cliente.user_id', $userId)
            ->orderBy('Pedido.id', 'desc')
            ->get();
    
        return response()->json($collection, 200);
    }
    
    
       // pega/gera lista de contato
       public function getDadosPedidoItem($pedidoId) {

        $collection = PedidoItem::where('pedido_id', $pedidoId)->orderBy('id', 'desc')->get();

        return response()->json($collection, 200);
    }
    

    //cria o pedido
    public function criaPedido(Request $request) {
        // Criar um novo objeto Pedido   
        
        $pedido = new Pedido;
        $pedido->cliente_id = $request->pedido['cliente_id'];
        $pedido->endereco_id = $request->pedido['endereco_id'];
        $pedido->statusPedido_id = $request->pedido['statusPedido_id'];
        $pedido->dt_pedido = Carbon::now();
        $pedido->condicaoVenda_id = $request->pedido['condicaoVenda_id'];
        $pedido->tp_frete = 0;//seta o tipo de frete como 0 até ser resolvido a questão do frete
        $pedido->vl_mercadorias = $request->pedido['vl_mercadorias'];
        $pedido->vl_frete =  '0' ; //seta o valor do frete como 0 até ser resolvido a questão do frete
        $pedido->vl_pedido = $request->pedido['vl_pedido'];
        $pedido->qt_parcela = $request->pedido['qtdParcela_id'];
        $pedido->user_id = Auth::id();
        $pedido->save();
      
        // Criar objetos PedidoItem para cada item do pedido
        foreach ($request->itens_pedido as $itemPedidoData) {
          $pedidoItem = new PedidoItem;
          $pedidoItem->pedido_id = $pedido->id;
          $pedidoItem->SKU = $itemPedidoData['SKU'];
          $pedidoItem->qt_produto = $itemPedidoData['qt_produto'];
          $pedidoItem->vl_unitario = $itemPedidoData['vl_unitario'];
          $pedidoItem->vl_total = $itemPedidoData['vl_total'];
          $pedidoItem->save();
        }
      
        return response()->json('Pedido cadastrado com sucesso', 200);
      }
      


    //delete pedido
    public function deletePedido($id){
        $deleted = Pedido::where('id', $id)->delete();
          if($deleted){
           return response()->json('pedido excluido com sucesso', 200);
          } else {
          return response()->json('Não foi possível excluir o pedido');
        }
    }

 
    //delete pedidoitem
    public function deletePedidoItem($id){
      $pedidoItem = PedidoItem::find($id);
      if(!$pedidoItem){
        return response()->json('PedidoItem não encontrado', 404);
      }
      $deleted = $pedidoItem->delete();
      if($deleted){
        return response()->json('PedidoItem excluído com sucesso', 200);
      } else {
        return response()->json('Não foi possível excluir o PedidoItem', 500);
      }
    }
    





}