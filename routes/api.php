<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\CondicaoVendaController;
use App\Http\Controllers\ContatoClienteController;
use App\Http\Controllers\EnderecoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
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

//cria cliente e endereços vinculados ao cliente
Route::post('/criaClienteEndereco', [ClienteController::class, 'criaClienteEndereco']);



//CLIENTES
// get lista de clientes
Route::get('/indexClientes', [ClienteController::class, 'indexClientes']);

//Cadastro de clientes
Route::post('/criaCliente', [ClienteController::class, 'criaCliente']);

//Update Clientes
Route::put('/updateCliente/update/{id}',[ClienteController::class, 'updateCliente']);

//Delete Clientes
Route::delete('/deleteCliente/delete/{id}',[ClienteController::class, 'deleteCliente']);



//ENDEREÇOS
//Get lista de endereços
Route::get('/indexEndereco', [EnderecoController::class, 'indexEndereco']);

//Cadastro de endereços
Route::post('/criaEndereco', [EnderecoController::class, 'criaEndereco']);

//update de endereços
Route::put('/updateEndereco/update/{id}',[EnderecoController::class, 'updateEndereco']);

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

//cria usuarios
Route::post('/criaUsuario', [UserController::class, 'criaUsuario']);

//update de usuario
Route::put('/updateUsuario/update/{id}',[UserController::class, 'updateUsuario']);

//delete de usuario
Route::delete('/deleteUsuario/delete/{id}',[UserController::class, 'deleteUsuario']);



//Pedidos

Route::get('/indexPedido', [PedidoController::class, 'indexPedido']);

Route::post('/criaPedido', [PedidoController::class, 'criaPedido']);



//condicao venda

Route::get('/indexCondicaoVenda', [CondicaoVendaController::class, 'indexCondicaoVenda']);

Route::post('/criaCondicaoVenda', [CondicaoVendaController::class, 'criaCondicaoVenda']);

Route::put('/updateCondicaoVenda/update/{id}',[CondicaoVendaController::class, 'updateCondicaoVenda']);

Route::delete('/deleteCondicaoVenda/delete/{id}',[CondicaoVendaController::class, 'deleteCondicaoVenda']);









//produtos
Route::get('/indexProdutos', [ProdutoController::class, 'indexProdutos']);


Route::get('/editCliente', [ProdutoController::class, 'editCliente']);


// Route::get('/indexProdutos1', [ProdutoController::class, 'indexProdutos1']);












Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
