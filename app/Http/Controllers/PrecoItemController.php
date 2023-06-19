<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Models\PrecoItem;


//controle 
class PrecoItemController  extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function indexPrecosMC(){

        $collection = PrecoItem::select('cd_item')
            ->where('item_mc', 'S')
            ->get();
      
        return response()->json($collection, 200);
    }
    
     
  

    //consulta o valor dos protudos no banco
    public function indexPrecos($cd_item, $cd_estado){

        //compara o cditem se o cdEstado for "MC" a var $cd_estado é substituida por "MC" para calcular o valor
        $collection = PrecoItem::select('cd_item')
            ->where('item_mc', 'S')
            ->where('cd_item', $cd_item)
            ->get();

        //verifica se o resultado da primeira consulta é vazio se não for troca o $cd_estado por "MC" para calcular caso nao fica o valor recebido pelo front
        if ($collection->isNotEmpty()) {
            $cd_estado = 'MC';
        }

        //calcula o preço padrão
        $collection = PrecoItem::where('cd_item', $cd_item)
            ->where('cd_estado', $cd_estado)
            ->get();

        return response()->json($collection, 200);
    }


    //  public function indexPrecos($cd_item , $cd_estado){

        
    //      $cd_item = $cd_item;
    //      $cd_estado = $cd_estado;


         
     
    //      $collection = PrecoItem::where('cd_item', $cd_item)
    //          ->where('cd_estado', $cd_estado)
    //          ->get();
      
    //      return response()->json($collection, 200);
    //  }
     




}
     


