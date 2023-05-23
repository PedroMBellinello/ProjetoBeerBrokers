<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\CondicaoVendaController;
use App\Http\Controllers\ContatoClienteController;
use App\Http\Controllers\EnderecoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect('login');
});

Route::get('/cadastrarPedido', function () {
    return view('cadastrarPedido');
});

Route::get('/acompanharPedidos', function () {
    return view('acompanharPedidos');
});

Route::get('/cadastrarCliente', function () {
    return view('cadastrarCliente');
});

Route::get('/cliExiste', function () {
    return view('cliExiste');
});

Route::get('/formaPgto', function () {
    return view('formaPgto');
});

Route::get('/dadosPed', function () {
    return view('dadosPed');
});

Route::get('/addProd', function () {
    return view('addProd');
});

Route::get('/prodAdicionado', function () {
    return view('prodAdicionado');
});

Route::get('/ClienteCadastrado', function () {
    return view('ClienteCadastrado');
});

Route::get('/listaCliente', function () {
    return view('listaCliente');
});


Route::get('/editaCliente', function () {
    return view('editaCliente');
});


//produtos
Route::get('/indexProdutos', [ProdutoController::class, 'indexProdutos']);


// cria cliente endereco e contato
// Route::post('/criaClienteEndereco', [ClienteController::class, 'criaClienteEndereco'], function () {
//     return view('cliExiste');
// });





//clientes













//CLIENTES
// get lista de clientes
Route::get('/indexClientes', [ClienteController::class, 'indexClientes']);

//Cadastro de clientes
Route::post('/criaClienteEndereco', [ClienteController::class, 'criaClienteEndereco']);

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





Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
