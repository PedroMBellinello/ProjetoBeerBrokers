//recupera o id do cliente 
var meuValor = localStorage.getItem('meuValor');
console.log('id do cliente', meuValor); 

 
//Recuperar o array opcoesSelecionadas da URL
var urlParams = new URLSearchParams(window.location.search);
var opcoesSelecionadas = JSON.parse(decodeURIComponent(urlParams.get('opcoesSelecionadas')));
console.log(opcoesSelecionadas)


//recupera os valores de pagamento
var metodo = localStorage.getItem('formaPgtoSelecionada');
console.log('meotodo selecionado', metodo); 
var parcelas = localStorage.getItem('parcelasSelecionadas');
console.log('meotodo selecionado', parcelas); 


//monta div dos produtos adicionados
  function obterProdutosSelecionados(opcoesSelecionadas) {
    
    var container = document.getElementById("container");

    //NAO APAGAR
   // var opcoesSelecionadas = ["produtos1", "teste"];


    for (var i = 0; i < opcoesSelecionadas.length; i++) {
      var opcaoSelecionada = opcoesSelecionadas[i];


  
      // Criar a div principal com a classe "resumoCont"
      var divResumoCont = document.createElement("div");
      divResumoCont.classList.add("resumoCont");
  
      // Criar o elemento <p> com a classe "nomeContent" e o texto "RESUMO DO PEDIDO"
      var nomeContent = document.createElement("p");
      nomeContent.classList.add("nomeContent");
      nomeContent.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="33.798" height="26.657" viewBox="0 0 33.798 26.657">
                            <g id="Grupo_16" data-name="Grupo 16" transform="translate(-6655.451 -156.381)">
                              <g id="Grupo_15" data-name="Grupo 15">
                                <path id="Caminho_117" data-name="Caminho 117" d="M6655.451,182.84c.131-.789.271-1.577.392-2.368q.721-4.692,1.43-9.385.675-4.449,1.35-8.9c.283-1.857.571-3.714.847-5.572.027-.184.095-.248.271-.235.141.01.284,0,.483,0l1.16,26.653h-5.933Z" fill="#5e5e5f" />
                                <path id="Caminho_118" data-name="Caminho 118" d="M6689.249,183.031H6662.6l-1.158-26.618h26.653Q6688.669,169.7,6689.249,183.031Zm-7.824-22.99a6.72,6.72,0,0,1-6.078,6.617,6.485,6.485,0,0,1-4.319-1.107,6.653,6.653,0,0,1-2.968-5.5h-1.211a7.7,7.7,0,0,0,4.121,6.864,7.491,7.491,0,0,0,8.206-.41,7.628,7.628,0,0,0,3.434-6.463Z" fill="#5e5e5f" />
                              </g>
                            </g>
                          </svg>
                             RESUMO DO PEDIDO`;
      divResumoCont.appendChild(nomeContent);
  
      // Criar a div com a classe "boxCerv"
      var divBoxCerv = document.createElement("div");
      divBoxCerv.classList.add("boxCerv");
  
      // Criar a div com a classe "img" e a imagem
      var divImg = document.createElement("div");
      divImg.classList.add("img");
  
      var imagem = document.createElement("img");
      imagem.setAttribute(
        "src",
        "https://clubedomalte.fbitsstatic.net/img/p/cerveja-underground-american-ipa-garrafa-355ml-88480/255537.jpg?w=214&h=214&v=no-change&qs=ignore"
      );
      imagem.setAttribute("alt", "");
      divImg.appendChild(imagem);
      divBoxCerv.appendChild(divImg);
  
      // Criar a div com a classe "desc"
      var divDesc = document.createElement("div");
      divDesc.classList.add("desc");
  
      // Criar o elemento <p> para o nome do produto
      var nomeProduto = document.createElement("p");
      nomeProduto.classList.add("nome");
      nomeProduto.textContent = opcaoSelecionada;
      divDesc.appendChild(nomeProduto);
  
      // Criar o elemento <p> para a quantidade
      var qtdCer = document.createElement("p");
      qtdCer.classList.add("qtdCer");
      qtdCer.innerHTML = `Qtde: <span>5</span>`;
      divDesc.appendChild(qtdCer);
  
      // Criar o elemento <p> para o valor
      var valorRes = document.createElement("p");
      valorRes.classList.add("valorRes");
      valorRes.innerHTML = `Valor: <span>R$ 114,50</span>`;
      divDesc.appendChild(valorRes);
  
      divBoxCerv.appendChild(divDesc);
  
      divResumoCont.appendChild(divBoxCerv);
  
      // Criar a div com a classe "container"
      var divContainer = document.createElement("div");
      divContainer.classList.add("container");
  
      divResumoCont.appendChild(divContainer);
  
      // Adicionar a nova div ao local desejado no seu HTML
      container.appendChild(divResumoCont);
    }
  }
  obterProdutosSelecionados(opcoesSelecionadas);
  




//pega o cliente para o pedido
function obterClientePedido(meuValor) {
    fetch('/indexClientes')
      .then(response => response.json())
      .then(data => {
     //   console.log(data);
  
        // Filtrar os dados do cliente com base no meuValor
        const clienteSelecionado = data.find(cliente => cliente.id == meuValor);
  
        if (clienteSelecionado) {
         console.log("id do cliente", clienteSelecionado.id)
         document.getElementById("cnpj").textContent = clienteSelecionado.cnpj
         document.getElementById("razao").textContent = clienteSelecionado.razao
         document.getElementById("fantasia").textContent = clienteSelecionado.fantasia
         document.getElementById("insc_estadual").textContent = clienteSelecionado.insc_estadual
         document.getElementById("insc_municipal").textContent = clienteSelecionado.incs_municipal
         document.getElementById("email").textContent = clienteSelecionado.email
         document.getElementById("fone").textContent = clienteSelecionado.fone
         document.getElementById("cep").textContent = clienteSelecionado.cep

           // console.log('Dados do cliente:', clienteSelecionado);
        } else {
         // alert("Cliente não encontrado tente novamente!")
          console.log('Cliente não encontrado com o valor', meuValor);
        }
      })
      .catch(error => {
        console.error('Erro ao obter os clientes:', error);
      });
  }
  

  obterClientePedido(meuValor);
  

  //pega o endereço vinculado ao cliente
  function obterEnderecoPedido(meuValor) {
    fetch('/indexEndereco')
      .then(response => response.json())
      .then(data => {
        // Filtrar os dados do cliente com base no meuValor
        const enderecoSelecionado = data.find(endereco => endereco.cliente_id == meuValor);
  
        if (enderecoSelecionado) {
          console.log("id do endereco", enderecoSelecionado.id)
          document.getElementById("cep").textContent = enderecoSelecionado.cep;
          document.getElementById("endereco").textContent = enderecoSelecionado.endereco;
          document.getElementById("complemento").textContent = enderecoSelecionado.complemento;
          document.getElementById("numero").textContent = enderecoSelecionado.numero;
          document.getElementById("bairro").textContent = enderecoSelecionado.bairro;
          document.getElementById("cidade").textContent = enderecoSelecionado.cidade;
          document.getElementById("uf").textContent = enderecoSelecionado.uf;

        //  console.log('Dados do cliente:', enderecoSelecionado);
        } else {
          console.log('Endereço não encontrado com o cliente', meuValor);
        }
      })
      .catch(error => {
        console.error('Erro ao obter os endereços:', error);
      });
  }
  
  
  obterEnderecoPedido(meuValor)



  function obterContatoPedido(meuValor) {
    fetch('/indexContato')
      .then(response => response.json())
      .then(data => {
        // Filtrar os dados do cliente com base no meuValor
        const contatoSelecionado = data.find(contato => contato.cliente_id == meuValor);
  

        if (contatoSelecionado) {
          console.log("id do contato", contatoSelecionado.id)
          document.getElementById("nome_contato").textContent = contatoSelecionado.nome_contato;
          document.getElementById("foneContato").textContent = contatoSelecionado.fone;
          document.getElementById("emailContato").textContent = contatoSelecionado.email;
          //console.log('contato do cliente:', contatoSelecionado);
        } else {
          console.log('contato não encontrado com o cliente', meuValor);
        }
      })
      .catch(error => {
        console.error('Erro ao obter os endereços:', error);
      });
  }
  
  obterContatoPedido(meuValor)




function obterMetodo() {
    var formaPgtoSelect = document.getElementById("formaPgto");
    // Obter o valor selecionado da forma de pagamento
    var formaPgtoSelecionada = formaPgtoSelect.value;
  
    console.log("Forma de Pagamento:", formaPgtoSelecionada);
  
    // Salvar o valor em localStorage
    localStorage.setItem('formaPgtoSelecionada', formaPgtoSelecionada);
  }
  




  function obterParcela() {
     var parcelasSelect = document.getElementById("parcelas");
     // Obter o valor selecionado de parcelas
     var parcelasSelecionadas = parcelasSelect.value;

     console.log("Parcelas", parcelasSelecionadas);

    localStorage.setItem('parcelasSelecionadas', parcelasSelecionadas);
  }
  





  function finalizaPed() {

    window.location.href = '/finalizarPedido?opcoesSelecionadas=' + encodeURIComponent(JSON.stringify(opcoesSelecionadas));
      //console.log("chegou aqui");
    
  }
  













