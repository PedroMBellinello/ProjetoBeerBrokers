<?php


use App\Http\Controllers\ClienteController;
use App\Http\Controllers\CondicaoVendaController;
use App\Http\Controllers\ContatoClienteController;
use App\Http\Controllers\EnderecoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\PrecoItemController;
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

//--------------------------------------------------------------Redirecionamento de rotas------------------------------------------------------------------------//
Route::get('/', function () {
    return redirect('login');
});

Route::get('/cadastrarPedido', function () {
    return view('cadastrarPedido');
});

Route::get('/acompanharPedidos', function () {
    return view('acompanharPedidos');
});


Route::get('/meusPedidos', function () {
    return view('meusPedidos');
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

// Route::get('/dadosPed', function () {
//     return view('dadosPed');
// });

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

Route::get('/listaEndereco', function () {
    return view('listaEndereco');
});

Route::get('/editaEndereco', function () {
    return view('editaEndereco');
});

Route::get('/finalizarPedido', function () {
    return view('finalizarPedido');
});


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-----------------------------------------------------------------Rotas cadastro etc------------------------------------------------------------------------------//



//PRodutos
Route::get('/indexProdutos', [ProdutoController::class, 'indexProdutos']);

Route::get('/getProdutosPedido/{sku}', [ProdutoController::class, 'getProdutosPedido']);

//Preços
Route::get('/indexPrecos/{cd_item}/{cd_estado}', [PrecoItemController::class, 'indexPrecos']);

//pedidos
Route::get('/getDadosPedidoItem/{id}', [PedidoController::class, 'getDadosPedidoItem']);



//CLIENTES
Route::get('/indexClientes', [ClienteController::class, 'indexClientes']);

Route::get('/getclientePedido/{id}', [ClienteController::class, 'getclientePedido']);

Route::post('/criaClienteEndereco', [ClienteController::class, 'criaClienteEndereco']);

Route::post('/criaCliente', [ClienteController::class, 'criaCliente']);

Route::put('/updateCliente/update/{id}',[ClienteController::class, 'updateCliente']);

Route::delete('/deleteCliente/delete/{id}',[ClienteController::class, 'deleteCliente']);



//ENDEREÇOS
Route::get('/indexEndereco/{id}', [EnderecoController::class, 'indexEndereco']);

Route::get('/indexEnderecoPedido/{id}', [EnderecoController::class, 'indexEnderecoPedido']);

Route::get('/getEnderecoPedido/{meuValor1}', [EnderecoController::class, 'getEnderecoPedido']);

Route::get('/getEnderecos/{id}', [EnderecoController::class, 'getEnderecos']);

Route::post('/criaEndereco', [EnderecoController::class, 'criaEndereco']);

Route::put('/updateEndereco/update/{id}',[EnderecoController::class, 'updateEndereco']);

Route::delete('/deleteEndereco/delete/{enderecoId}',[EnderecoController::class, 'deleteEndereco']);


//CONTATOS
//get de contatos
Route::get('/indexContato', [ContatoClienteController::class, 'indexContatos']);

Route::post('/criaContato', [ContatoClienteController::class, 'criaContato']);

Route::put('/updateContato/update/{id}',[ContatoClienteController::class, 'updateContato']);

Route::delete('/deleteContato/delete/{id}',[ContatoClienteController::class, 'deleteContato']);


//Pedidos
Route::post('/criaPedido', [PedidoController::class, 'criaPedido']);

Route::get('/getdadosPedidos', [PedidoController::class, 'getdadosPedidos']);

Route::get('/getDadosPedidosTeste', [PedidoController::class, 'getDadosPedidosTeste']);



//------------------------------------------------------------------------------------------------------------------------------------------------------------//

Route::post('/logout', [UserController::class, 'logout']);

//-----------------------------------------------------------------Rotas auth ------------------------------------------------------------------------------//


Auth::routes();



Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
