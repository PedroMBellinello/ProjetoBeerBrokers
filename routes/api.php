<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\CondicaoVendaController;
use App\Http\Controllers\ContatoClienteController;
use App\Http\Controllers\EnderecoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\PrecoItemController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StatusPedidoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




//cria cliente e endereços vinculados ao cliente
Route::post('/criaClienteEndereco', [ClienteController::class, 'criaClienteEndereco']);



//CLIENTES
// get lista de clientes
Route::get('/indexClientes', [ClienteController::class, 'indexClientes']);

Route::get('/getclientePedido/{id}', [ClienteController::class, 'getclientePedido']);



//Cadastro de clientes
Route::post('/criaCliente', [ClienteController::class, 'criaCliente']);

//Update Clientes
Route::put('/updateCliente/update/{id}',[ClienteController::class, 'updateCliente']);

Route::get('/editCliente', [ProdutoController::class, 'editCliente']);

//Delete Clientes
Route::delete('/deleteCliente/delete/{id}',[ClienteController::class, 'deleteCliente']);



//ENDEREÇOS
//Get lista de endereços
Route::get('/indexEndereco', [EnderecoController::class, 'indexEndereco']);

Route::get('/getEnderecos', [EnderecoController::class, 'getEnderecos']);


Route::get('/getEnderecoDoPedido', [EnderecoController::class, 'getEnderecoDoPedido']);




//Cadastro de endereços
Route::post('/criaEndereco', [EnderecoController::class, 'criaEndereco']);

//update de endereços
Route::put('/updateEndereco/update/{id}',[EnderecoController::class, 'updateEndereco']);

// Route::put('/updateEnderecoContato/update/{id}',[EnderecoController::class, 'updateEnderecoContato']);

//Delete endereço
Route::delete('/deleteEndereco/delete/{id}',[EnderecoController::class, 'deleteEndereco']);



//CONTATOS
//get de contatos
Route::get('/indexContato', [ContatoClienteController::class, 'indexContatos']);

//cria contato
Route::post('/criaContato', [ContatoClienteController::class, 'criaContato']);

//update contato
Route::put('/updateContato/update/{id}',[ContatoClienteController::class, 'updateContato']);

//delete  contato
Route::delete('/deleteContato/delete/{id}',[ContatoClienteController::class, 'deleteContato']);



//USUARIO
//get de usuarios
Route::get('/indexUsuario', [UserController::class, 'indexUsuario']);

Route::get('/usuario/logado', function() {
    $user = Auth::user();
    // Aqui você pode personalizar os dados do usuário que deseja retornar
    $data = [
        'id' => $user->id,
        'nome' => $user->name,
        'email' => $user->email,
    ];
    return response()->json($data);
});


//cria usuarios
Route::post('/criaUsuario', [UserController::class, 'criaUsuario']);

//update de usuario
Route::put('/updateUsuario/update/{id}',[UserController::class, 'updateUsuario']);

//delete de usuario
Route::delete('/deleteUsuario/delete/{id}',[UserController::class, 'deleteUsuario']);



//Pedidos

Route::get('/indexPedido', [PedidoController::class, 'indexPedido']);

Route::get('/getdadosPedidos', [PedidoController::class, 'getdadosPedidos']);

Route::get('/getDadosPedidoItem/{id}', [PedidoController::class, 'getDadosPedidoItem']);



Route::post('/criaPedido', [PedidoController::class, 'criaPedido']);

Route::delete('/deletePedido/delete/{id}',[PedidoController::class, 'deletePedido']);

Route::delete('/deletePedidoItem/delete/{id}',[PedidoController::class, 'deletePedidoItem']);






// status pedidos
Route::get('/indexStatusPedido', [StatusPedidoController::class, 'indexStatusPedido']);

Route::post('/criaStatusPedido', [StatusPedidoController::class, 'criaStatusPedido']);



Route::post('/criaEnderecoContato', [EnderecoController::class, 'criaEnderecoContato']);


//condicao venda

Route::get('/indexCondicaoVenda', [CondicaoVendaController::class, 'indexCondicaoVenda']);

Route::post('/criaCondicaoVenda', [CondicaoVendaController::class, 'criaCondicaoVenda']);

Route::put('/updateCondicaoVenda/update/{id}',[CondicaoVendaController::class, 'updateCondicaoVenda']);

Route::delete('/deleteCondicaoVenda/delete/{id}',[CondicaoVendaController::class, 'deleteCondicaoVenda']);









//produtos




Route::get('/indexProdutos', [ProdutoController::class, 'indexProdutos']);



Route::get('/getProdutosPedido', [ProdutoController::class, 'getProdutosPedido']);








Route::get('/indexPrecos', [PrecoItemController::class, 'indexPrecos']);

//preços mestre cervejeito
Route::get('/indexPrecosMC', [PrecoItemController::class, 'indexPrecosMC']);










