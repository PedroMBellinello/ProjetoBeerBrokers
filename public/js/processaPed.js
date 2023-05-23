

//recupera o id do cliente 
var meuValor = localStorage.getItem('meuValor');
console.log('id do cliente', meuValor); 


// Recuperar o array opcoesSelecionadas da URL
var urlParams = new URLSearchParams(window.location.search);
var opcoesSelecionadas = JSON.parse(decodeURIComponent(urlParams.get('opcoesSelecionadas')));

console.log(opcoesSelecionadas)
    


























// // dados do cliente 
// var cnpjElement = document.getElementById('cnpj');
// var razaoSocialElement = document.getElementById('razaoSocial');
// var nomeFantasiaElement = document.getElementById('nomeFantasia');
// var inscricaoEstadualElement = document.getElementById('inscricaoEstadual');
// var inscricaoMunicipalElement = document.getElementById('inscricaoMunicipal');
// var emailElement = document.getElementById('email');
// var telefoneElement = document.getElementById('telefone');

// //dados de entrega 
// var enderecoentrega = document.getElementById('endereco-entrega');
// var logradouro = document.getElementById('logradouro');
// var numero = document.getElementById('numero');
// var bairro = document.getElementById('bairro');
// var cep = document.getElementById('cep');
// var cidade = document.getElementById('cidade');
// var estado = document.getElementById('estado');
// var complemento = document.getElementById('complemento');
// var nomeresponsavel = document.getElementById('nome-responsavel');
// var emailresponsavel = document.getElementById('email-responsavel');
// var telefoneresponsavel = document.getElementById('telefone-responsavel');


// var numeroPedido  = document.getElementById("numero-pedido")
// var valorPedido  = document.getElementById("valor-pedido")
// var dataCompra = document.getElementById("data-compra")
// var formaPagamento  = document.getElementById("forma-pagamento")
// var pagamento = document.getElementById("pagamento")
// var status = document.getElementById("status")

// // Obter o conteúdo de cada ID


// // Preencher os elementos com os valores desejados
// // cnpjElement.innerText = 'teste';
// // razaoSocialElement.innerText = 'teste';
// // nomeFantasiaElement.innerText = 'teste';
// // inscricaoEstadualElement.innerText = 'teste';
// // inscricaoMunicipalElement.innerText = 'teste';
// // emailElement.innerText = 'teste';
// // telefoneElement.innerText = 'teste';


// // enderecoentrega.innerText = 'teste';
// // logradouro.innerText = 'teste';
// // numero.innerText = 'teste';
// // bairro.innerText = 'teste';
// // cep.innerText = 'teste'; 
// // cidade.innerText = 'teste';
// // estado.innerText = 'teste';
// // complemento.innerText = 'teste';
// // nomeresponsavel.innerText = 'teste';
// // emailresponsavel.innerText = 'teste';
// // telefoneresponsavel.innerText= 'teste';



// // numeroPedido.innerText= 'teste'; 
// // valorPedido.innerText= 'teste';  
// // dataCompra.innerText= 'teste'; 
// // formaPagamento.innerText= 'teste';  
// // pagamento.innerText= 'teste'; 
// // status.innerText = 1; 

// // Obter o conteúdo de cada ID

// // Exemplo de uso das variáveis
