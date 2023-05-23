<?php

namespace App\Http\Controllers;

 

use App\Http\Controllers\Controller;
use App\Models\Produto;
use Illuminate\Http\Request;


// Certifique-se de importar as classes necessárias
use Illuminate\Support\Facades\DB;

// Realize a consulta ao banco de dados


// Exemplo de iteração pelos registros retornados

//controle 
class ProdutoController  extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */

     

    //pega/gera lista de contato
    public function indexProdutos(){

      //  return response()->json('teste');
        
        $collection = Produto::orderBy('cd_Item', 'desc')->limit(100)->get();

        return response()->json($collection, 200);
    }






}
     


