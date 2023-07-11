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

    //-----------------------------------------------------------------Rotas auth ------------------------------------------------------------------------------//
 
    //Redirect da pagina incial para  a login
    Route::get('/', function () {
      return redirect('login');
    });
    
    
    //Rota de logout
    Route::post('/logout', [UserController::class, 'logout']);
    

    //Cria rotas para autenticação
    Auth::routes();
    
    
    //Rota inicial após o login bem-sucedido.
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    

    //Retorna os detalhes do usuário autenticado atualmente
    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });
    
    
//Define que só usuarios autenticados podem acessar a rota    
Route::group(['middleware' => 'auth:sanctum'], function () {
  
  
      //<------------------------------------------------------------------- Views ------------------------------------------------------------------------------------->//
      
      //Cadastro de pedidos
      Route::get('/cadastrarPedido', function () {
          return view('cadastrarPedido');
      });
      
      //Acompanhar  pedidos
      Route::get('/acompanharPedidos', function () {
          return view('acompanharPedidos');
      });
      
      //Meus pedidos
      Route::get('/meusPedidos', function () {
          return view('meusPedidos');
      });
      
      //Cadastro de clientes
      Route::get('/cadastrarCliente', function () {
          return view('cadastrarCliente');
      });
      
      //Seleção de clientes existente
      Route::get('/cliExiste', function () {
          return view('cliExiste');
      });
      
      //Selecionar Forma de pagamento
      Route::get('/formaPgto', function () {
          return view('formaPgto');
      });
      
      //Cadastrar Endereço
      Route::get('/cadastrarEndereco', function () {
          return view('cadastrarEndereco');
      });
      
      //Seleção de produtos
      Route::get('/prodAdicionado', function () {
          return view('prodAdicionado');
      });
      
      //Lista de clientes
      Route::get('/listaCliente', function () {
          return view('listaCliente');
      });
      
      //Edição de clientes
      Route::get('/editaCliente', function () {
          return view('editaCliente');
      });
      
      //Lista de endereços
      Route::get('/listaEndereco', function () {
          return view('listaEndereco');
      });
      
      //Edição de endereços
      Route::get('/editaEndereco', function () {
          return view('editaEndereco');
      });
     
      //Finalizar pedidos
      Route::get('/finalizarPedido', function () {
          return view('finalizarPedido');
      });
      
   
      //<------------------------------------------------------------------- Rotas ------------------------------------------------------------------------------------->//
     
      //pega o usuario logado e verifica se é vendedor mc
      Route::get('/usuario/logado', function() {
          $user = Auth::user();
          $data = [
              // 'nome' => $user->name,
              'vendedor_mc' => $user->vendedor_mc,
              'permite_alterar_preco'=>$user->permite_alterar_preco,
          ];
          return response()->json($data);
      });
  
  
   
      //<------------------------------------------------------------------- Produtos ------------------------------------------------------------------------------------->//
      //Get de prdutos por id
      Route::get('/indexProdutos/{id}', [ProdutoController::class, 'indexProdutos']);
      
      //Get de prdutos para vendedor mestre cervejeiro
      Route::get('/indexProdutosVendedorMC', [ProdutoController::class, 'indexProdutosVendedorMC']);
  
      //Get de prdutos por pedido
      Route::get('/getProdutosPedido/{sku}', [ProdutoController::class, 'getProdutosPedido']);
      
  
      //<------------------------------------------------------------------- Preços ------------------------------------------------------------------------------------->//
  
      //get de preços por estado
      Route::get('/indexPrecos/{cd_item}/{cd_estado}', [PrecoItemController::class, 'indexPrecos']);
  
  
      //<------------------------------------------------------------------- Pedidos ------------------------------------------------------------------------------------->//
      //Get dados do pedido
      Route::get('/getDadosPedidoItem/{id}', [PedidoController::class, 'getDadosPedidoItem']);
      
      
      //<------------------------------------------------------------------- Clientes ------------------------------------------------------------------------------------->//
      
      //Get de clientes
      Route::get('/indexClientes', [ClienteController::class, 'indexClientes']);
      
      //Get de pedidos por cliente
      Route::get('/getclientePedido/{id}', [ClienteController::class, 'getclientePedido']);
      
      //Cria endereço por cliente
      Route::post('/criaClienteEndereco', [ClienteController::class, 'criaClienteEndereco']);
  
      //Cria clientes
      Route::post('/criaCliente', [ClienteController::class, 'criaCliente']);
      
      //Update de clientes
      Route::put('/updateCliente/update/{id}',[ClienteController::class, 'updateCliente']);
      
      //Delete de clientes
      Route::delete('/deleteCliente/delete/{id}',[ClienteController::class, 'deleteCliente']);
      
      //<------------------------------------------------------------------- Endereços ------------------------------------------------------------------------------------->//
      
      //Get de endereços 
      Route::get('/indexEndereco/{id}', [EnderecoController::class, 'indexEndereco']);
      
      //Get de endereço por pedido
      Route::get('/indexEnderecoPedido/{id}', [EnderecoController::class, 'indexEnderecoPedido']);
      
      //Get de endereço do cliente selecionado
      Route::get('/getEnderecoPedido/{idEndereciClienteSelecionado}', [EnderecoController::class, 'getEnderecoPedido']);
      
      //Get de endereços  por id
      Route::get('/getEnderecos/{id}', [EnderecoController::class, 'getEnderecos']);
      
      //Cria endereços
      Route::post('/criaEndereco', [EnderecoController::class, 'criaEndereco']);
      
      //Update Endereços
      Route::put('/updateEndereco/update/{id}',[EnderecoController::class, 'updateEndereco']);
      
      //Delete Endereços
      Route::delete('/deleteEndereco/delete/{id}',[EnderecoController::class, 'deleteEndereco']);
      
      
      //<------------------------------------------------------------------- Contatos ------------------------------------------------------------------------------------->//
  
      //get de contatos
      Route::get('/indexContato', [ContatoClienteController::class, 'indexContatos']);
      
      //cria contato
      Route::post('/criaContato', [ContatoClienteController::class, 'criaContato']);
      
      //Cria endereço Contato
      Route::post('/criaEnderecoContato/{id}', [EnderecoController::class, 'criaEnderecoContato']);
      
      //Update contato
      Route::put('/updateContato/update/{id}',[ContatoClienteController::class, 'updateContato']);
      
      //Delete contato
      Route::delete('/deleteContato/delete/{id}',[ContatoClienteController::class, 'deleteContato']);
      
      //<------------------------------------------------------------------- Pedidos ------------------------------------------------------------------------------------->//
      
      //Cria pedidos
      Route::post('/criaPedido', [PedidoController::class, 'criaPedido']);
      
      //Get Dados dos pedidos
      Route::get('/getdadosPedidos', [PedidoController::class, 'getdadosPedidos']);
      
      
});
  
  
  //------------------------------------------------------------------------------------------------------------------------------------------------------------//
  