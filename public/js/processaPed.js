//recupera prod ao carregar a pagina
document.addEventListener('DOMContentLoaded', function() {
    getProdutos();
  });
  


// Recuperar valor do localStorage
var meuValor = localStorage.getItem('meuValor');
console.log('id do cliente', meuValor);  // Exibe o valor armazenado no console


function getDados_Pedido()  {

    // Armazenar o número do pedido no localStorage
    //var numeroPedido = document.getElementById('numPed').textContent;
    //localStorage.setItem('numeroPedido', numeroPedido);

    //console.log("teste")
    window.location.href = '/dadosPed';

}



function getProdutos() {
        fetch('/indexProdutos') 
          .then(response => response.json())
          .then(data => {
           // console.log(data); // Exemplo: exibir os dados no console
      

            data.forEach(produto => {
              //console.log(produto.cd_Item);
              console.log(produto.descricao);
              //console.log(produto.situacao);
              // Realize outras operações com os atributos do produto
            });
          })
          .catch(error => {
            console.error('Ocorreu um erro:', error);
          });
}

function armazenaProd() {

    var inputValue = document.getElementById("rotulo").value;
   // console.log(inputValue);


    // Criar a nova div
    var novaDiv = document.createElement("div");
    novaDiv.classList.add("divDoProd");
  
    // Criar a div com a classe "foto" e a imagem
    var divFoto = document.createElement("div");
    divFoto.classList.add("foto");
  
    var imagem = document.createElement("img");
    imagem.setAttribute("src", "https://clubedomalte.fbitsstatic.net/img/p/cerveja-underground-american-ipa-garrafa-355ml-88480/255537.jpg?w=214&h=214&v=no-change&qs=ignore");
    imagem.setAttribute("alt", "");
  
    divFoto.appendChild(imagem);
  
    novaDiv.appendChild(divFoto);
  
    // Criar a div com a classe "descricao"
    var divDescricao = document.createElement("div");
    divDescricao.classList.add("descricao");
  
    // Criar o elemento <p> para o nome do produto
    var nomeProduto = document.createElement("p");
    nomeProduto.classList.add("nome");
    nomeProduto.textContent = inputValue;
  
    divDescricao.appendChild(nomeProduto);
  
    // Criar a div para a quantidade
    var divQuantidade = document.createElement("div");
    divQuantidade.classList.add("qtdCont");
  
    // Criar o elemento <p> para o texto "Quant.:"
    var textoQuantidade = document.createElement("p");
    textoQuantidade.textContent = "Quant.:";
  
    divQuantidade.appendChild(textoQuantidade);
  
    // Criar a div para os botões de aumentar e diminuir quantidade
    var divBotoesQuantidade = document.createElement("div");
    divBotoesQuantidade.classList.add("qtd");
  
    // Criar o botão de diminuir quantidade
    var botaoDiminuir = document.createElement("button");
    botaoDiminuir.classList.add("minus");
    botaoDiminuir.setAttribute("role", "button");
    botaoDiminuir.setAttribute("tabindex", "0");
    botaoDiminuir.textContent = "-";
  
    divBotoesQuantidade.appendChild(botaoDiminuir);
  
    // Criar o input da quantidade
    var inputQuantidade = document.createElement("input");
    inputQuantidade.setAttribute("id", "produto-spot-quantidade");
    inputQuantidade.classList.add("input-spot-quantidade", "num");
    inputQuantidade.setAttribute("value", "1");
    inputQuantidade.setAttribute("min", "1");
    inputQuantidade.setAttribute("type", "text");
    inputQuantidade.setAttribute("role", "form");
    inputQuantidade.setAttribute("tabindex", "0");
  
    divBotoesQuantidade.appendChild(inputQuantidade);
  
    // Criar o botão de aumentar quantidade
    var botaoAumentar = document.createElement("button");
    botaoAumentar.classList.add("plus");
    botaoAumentar.setAttribute("role", "button");
    botaoAumentar.setAttribute("tabindex", "0");
    botaoAumentar.textContent = "+";
  
    divBotoesQuantidade.appendChild(botaoAumentar);
  
    divQuantidade.appendChild(divBotoesQuantidade);
  
    divDescricao.appendChild(divQuantidade);
  
    // Criar a div para o link "Editar" e o botão "Lançar"
    var divMudar = document.createElement("div");
    divMudar.classList.add("mudar");
  
    var linkEditar = document.createElement("a");
    linkEditar.setAttribute("href", "#");
    linkEditar.textContent = "Editar";
  
    divMudar.appendChild(linkEditar);
  
    var btnEnviar = document.createElement("button");
    btnEnviar.classList.add("btnEnviar");
    btnEnviar.textContent = "Lançar";
  
    divMudar.appendChild(btnEnviar);
  
    divDescricao.appendChild(divMudar);
  
    novaDiv.appendChild(divDescricao);
  
    // Adicionar a nova div ao contêiner
    var container = document.getElementById("container");
    container.appendChild(novaDiv);

    var modal = document.getElementById("modalEscolheProd");
    modal.style.display = "none";
  }
  


  function gerarNovaDiv() {

    var modal = document.getElementById("modalEscolheProd");
    modal.style.display = "block";
  
    armazenaProd();
  
  }

  function  mostraModal() {

    var modal = document.getElementById("modalEscolheProd");
    modal.style.display = "block";

    window.scrollTo(0, 0);
  }

























// dados do cliente 
var cnpjElement = document.getElementById('cnpj');
var razaoSocialElement = document.getElementById('razaoSocial');
var nomeFantasiaElement = document.getElementById('nomeFantasia');
var inscricaoEstadualElement = document.getElementById('inscricaoEstadual');
var inscricaoMunicipalElement = document.getElementById('inscricaoMunicipal');
var emailElement = document.getElementById('email');
var telefoneElement = document.getElementById('telefone');

//dados de entrega 
var enderecoentrega = document.getElementById('endereco-entrega');
var logradouro = document.getElementById('logradouro');
var numero = document.getElementById('numero');
var bairro = document.getElementById('bairro');
var cep = document.getElementById('cep');
var cidade = document.getElementById('cidade');
var estado = document.getElementById('estado');
var complemento = document.getElementById('complemento');
var nomeresponsavel = document.getElementById('nome-responsavel');
var emailresponsavel = document.getElementById('email-responsavel');
var telefoneresponsavel = document.getElementById('telefone-responsavel');


var numeroPedido  = document.getElementById("numero-pedido")
var valorPedido  = document.getElementById("valor-pedido")
var dataCompra = document.getElementById("data-compra")
var formaPagamento  = document.getElementById("forma-pagamento")
var pagamento = document.getElementById("pagamento")
var status = document.getElementById("status")

// Obter o conteúdo de cada ID


// Preencher os elementos com os valores desejados
// cnpjElement.innerText = 'teste';
// razaoSocialElement.innerText = 'teste';
// nomeFantasiaElement.innerText = 'teste';
// inscricaoEstadualElement.innerText = 'teste';
// inscricaoMunicipalElement.innerText = 'teste';
// emailElement.innerText = 'teste';
// telefoneElement.innerText = 'teste';


// enderecoentrega.innerText = 'teste';
// logradouro.innerText = 'teste';
// numero.innerText = 'teste';
// bairro.innerText = 'teste';
// cep.innerText = 'teste'; 
// cidade.innerText = 'teste';
// estado.innerText = 'teste';
// complemento.innerText = 'teste';
// nomeresponsavel.innerText = 'teste';
// emailresponsavel.innerText = 'teste';
// telefoneresponsavel.innerText= 'teste';



// numeroPedido.innerText= 'teste'; 
// valorPedido.innerText= 'teste';  
// dataCompra.innerText= 'teste'; 
// formaPagamento.innerText= 'teste';  
// pagamento.innerText= 'teste'; 
// status.innerText = 1; 

// Obter o conteúdo de cada ID

// Exemplo de uso das variáveis
