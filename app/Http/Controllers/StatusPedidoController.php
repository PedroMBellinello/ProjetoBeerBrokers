<?php

namespace App\Http\Controllers;

 

use App\Http\Controllers\Controller;
use App\Models\StatusPedido;
use Illuminate\Http\Request;
use Carbon\Carbon;

//controle 
class StatusPedidoController extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */

    //pega/gera lista de contato
    public function indexStatusPedido(){
        
        $collection = StatusPedido::orderBy('id', 'desc')->get();

        return response()->json($collection, 200);
    }


    public function criaStatusPedido(Request $request){

        $StatusPedido = new StatusPedido;
        $StatusPedido->descricao = $request->descricao;

        $StatusPedido->save();
 
        return response()->json('statusPedido cadastrado', 200);
        return response()->json('Não foi possível cadastrar o statusPedido');
 
     }


}