<?php

namespace App\Http\Controllers;

//nao apagar os models 
use App\Http\Controllers\Controller;
use App\Models\Cliente;
use App\Models\ClienteMestreCervejeiro;
use App\Models\Item;
use App\Models\PrecoItem;
use App\Models\Produto;




//controle 
class ProdutoController  extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */
 

     public function indexProdutos1(){
        
            $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
            ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
            ->where('flag', 'BRK')
            ->orderBy('cd_Item', 'desc')
            ->limit(140)
            ->get();
       
         return response()->json($collection, 200);
      }


     public function indexProdutosVendedorMC(){
        
        $collection = [];


        if (auth()->user()->vendedor_mc == 'S') {
            $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
            ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
            ->where('flag', 'BRK')
            ->orderBy('cd_Item', 'desc')
            ->limit(140)
            ->get();
        } else {
            //dd($collection);
            $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
            ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
            ->join('BeerBrokers.dbo.PrecoItem', 'ItemParceiro.cd_item', '=', 'BeerBrokers.dbo.PrecoItem.cd_item')
            ->where('flag', 'BRK')
            ->where('BeerBrokers.dbo.PrecoItem.item_mc', 'n')
            ->orderBy('Item.cd_Item', 'desc')
            ->distinct()
            ->get();
        
        }
        
        // return response()->json(itemParceiro::take(10)->get(), 200);
         return response()->json($collection, 200);
      }



      public function indexProdutos($clienteId){
        $collection = [];

        $cliente = Cliente::join('ClienteMestreCervejeiro', 'Cliente.cnpj', '=', 'ClienteMestreCervejeiro.cnpj')
                ->where('Cliente.id', $clienteId)
                ->exists();

        if ($cliente) {
            $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
            ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
            ->where('flag', 'BRK')
            ->orderBy('cd_Item', 'desc')
            ->limit(140)
            ->get();
        } else {
            $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
            ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
            ->join('BeerBrokers.dbo.PrecoItem', 'ItemParceiro.cd_item', '=', 'BeerBrokers.dbo.PrecoItem.cd_item')
            ->where('flag', 'BRK')
            ->where('BeerBrokers.dbo.PrecoItem.item_mc', 'n')
            ->orderBy('Item.cd_Item', 'desc')
            ->distinct()
            ->get();
        }

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
      



      //teste
      public function testeClienteMC($clienteId) {
       
        $collection = [];

        $cliente = Cliente::join('ClienteMestreCervejeiro', 'Cliente.cnpj', '=', 'ClienteMestreCervejeiro.cnpj')
                ->where('Cliente.id', $clienteId)
                ->exists();

        if ($cliente) {
            $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
            ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
            ->where('flag', 'BRK')
            ->orderBy('cd_Item', 'desc')
            ->limit(140)
            ->get();
        } else {
            $collection = Produto::select('Item.*', 'ItemParceiro.url_img')
            ->join('ItemParceiro', 'Item.cd_Item', '=', 'ItemParceiro.cd_item')
            ->join('BeerBrokers.dbo.PrecoItem', 'ItemParceiro.cd_item', '=', 'BeerBrokers.dbo.PrecoItem.cd_item')
            ->where('flag', 'BRK')
            ->where('BeerBrokers.dbo.PrecoItem.item_mc', 'n')
            ->orderBy('Item.cd_Item', 'desc')
            ->distinct()
            ->get();
    
          //  return response()->json(['message' => 'Cliente não encontrado'], 404);
        }

        return response()->json($collection, 200);  
    }







}
     


