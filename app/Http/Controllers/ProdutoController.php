<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Models\Produto;


//controle 
class ProdutoController  extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */
 


     public function indexProdutos(){
        $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
          ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
          ->where('flag', 'BRK')
          ->orderBy('cd_Item', 'desc')
          ->limit(140)
          ->get();
  
         return response()->json($collection, 200);
      }

      
      public function getProdutosPedido($sku)
      {
          $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
              ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
              ->where('Item.cd_Item', $sku)
              ->where('flag', 'BRK')
              ->orderBy('cd_Item', 'desc')
              ->limit(140)
              ->get();
      
          return response()->json($collection, 200);
      }
      







}
     


