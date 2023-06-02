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
 

     public function indexPrecos($cd_item , $cd_estado)
     {
         $cd_item = $cd_item;
         $cd_estado = $cd_estado;
     
         $collection = PrecoItem::where('cd_item', $cd_item)
             ->where('cd_estado', $cd_estado)
             ->get();
     
         return response()->json($collection, 200);
     }
     
  
     







}
     


