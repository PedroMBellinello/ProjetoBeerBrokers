   //recupera o id do cliente 
   var meuValor = localStorage.getItem('meuValor');
   //recupera o id od endereco do cliente
   var meuValor1 = localStorage.getItem('meuValor1');

   //soma total dos pedidos
   var somaTotal = 0 

  //imagem padrao para caso não exista  para o produto
   var imgPadrao = "https://recursos.clubedomalte.com.br/i/_2023/junho/logoLup.jpg";  

   //recupera os metodos de pagamento
   var metodo = localStorage.getItem('formaPgtoSelecionada');
   var parcelas = localStorage.getItem('parcelasSelecionadas');

  //obtem os produtos do cliente para o pedido 
   var urlParams = new URLSearchParams(window.location.search);
   var opcoesSelecionadas = JSON.parse(decodeURIComponent(urlParams.get('opcoesSelecionadas')));
////------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------------------------------------------///
 
   //monta div dos produtos adicionados
   function obterProdutosSelecionados(opcoesSelecionadas) {

      //pega a div com base no id para criar as divs de produtos
       var container = document.getElementById("container");
   
       //para cada produto no objeto opçoes selecionadas é criado uma div com os dados do mesmo
       for (var i = 0; i < opcoesSelecionadas.length; i++) {
        var opcaoSelecionada = opcoesSelecionadas[i];
        let nomeProd = opcaoSelecionada.nome
        let imgProd = opcaoSelecionada.imgUrl
        let qtdProd = opcaoSelecionada.quantidade
        let valorProd = opcaoSelecionada.valor_unidade

        //verifica se a imagme existe caso não seta a padrão 
        if (imgProd === null || imgProd === "") {
          imgProd = imgPadrao;
        }
        // let multiplicador = ; // O número pelo qual você deseja multiplicar a quantidade
        let resultado = valorProd * qtdProd;

        somaTotal += resultado;


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
         imagem.setAttribute("src", imgProd);
         imagem.setAttribute("alt",  "Falha ao carregar a imagem", );
         divImg.appendChild(imagem);
         divBoxCerv.appendChild(divImg);
  
         // Criar a div com a classe "desc"
         var divDesc = document.createElement("div");
         divDesc.classList.add("desc");
  
         // Criar o elemento <p> para o nome do produto
         var nomeProduto = document.createElement("p");
         nomeProduto.classList.add("nome");
         nomeProduto.textContent = nomeProd;
         divDesc.appendChild(nomeProduto);
  
         // Criar o elemento <p> para a quantidade
         var qtdCer = document.createElement("p");
         qtdCer.classList.add("qtdCer");
         qtdCer.innerHTML = `Qtde: <span> ${qtdProd}</span>` ;
         divDesc.appendChild(qtdCer);
  
         // Criar o elemento <p> para o valor
         var valorRes = document.createElement("p");
         valorRes.classList.add("valorRes");
         valorRes.innerHTML = `Valor: <span>${resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>`;
         divDesc.appendChild(valorRes);
  
         divBoxCerv.appendChild(divDesc);
         divResumoCont.appendChild(divBoxCerv);
  
         // Criar a div com a classe "container"
         var divContainer = document.createElement("div");
         divContainer.classList.add("container");
  
         //Coloca a div Resumo na div container na tela
         divResumoCont.appendChild(divContainer);
  
         // Adicionar a nova div ao local desejado no seu HTML
         container.appendChild(divResumoCont);
        }

        return somaTotal
  }
  obterProdutosSelecionados(opcoesSelecionadas);
  
  



  //obtem o cliente do cliente para o pedido e salva o id para finalizar o pedido 
  function obterClientePedido(meuValor) {
    fetch('/indexClientes')
      .then(response => response.json())
      .then(data => {
        // Filtrar os dados do cliente com base no meuValor
        const clienteSelecionado = data.find(cliente => cliente.id == meuValor);
        //preenche a lista do cliente com os dados respondidos
        if (clienteSelecionado) {
         let cnpjFormatado = clienteSelecionado.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
         let foneFormatado = clienteSelecionado.fone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

         document.getElementById("cnpj").textContent = cnpjFormatado
         document.getElementById("razao").textContent = clienteSelecionado.razao
         document.getElementById("fantasia").textContent = clienteSelecionado.fantasia
         document.getElementById("insc_estadual").textContent = clienteSelecionado.insc_estadual
         document.getElementById("insc_municipal").textContent = clienteSelecionado.incs_municipal
         document.getElementById("email").textContent = clienteSelecionado.email
         document.getElementById("fone").textContent = foneFormatado
         document.getElementById("cep").textContent = clienteSelecionado.cep
        } else {
          alert("Cliente não encontrado tente novamente!")
        }
        //salva o id do cliente no localsotrage
        var idClienteSelecionado = clienteSelecionado.id;
        localStorage.setItem('idClienteselecionado', idClienteSelecionado);
      })
      .catch(error => {
        console.error('Erro ao obter os clientes:', error);
      });    
  }
  obterClientePedido(meuValor);
  

  function obterMetodoParcela() {
    //recupera o valor do localstorage para o metodo e qtd parcela
    var condicaoVenda_id = localStorage.getItem('formaPgtoSelecionada');
    var qtdParcela_id = localStorage.getItem('parcelasSelecionadas');
  // compara o id para atribuir o valor da condicao correta
    let formaPgto = condicaoVenda_id
    if (formaPgto == 3) {
        formaPgto = 'Cartão'
     } else if (formaPgto == 4){
        formaPgto = 'Boleto'
     } else if (formaPgto == 5){
       formaPgto = 'Pix'
     } 
  // compara o id para atribuir o valor da parcela correta
  let qtdParcela = qtdParcela_id
     if (qtdParcela == 6) {
         qtdParcela = '6x'
      } else if (qtdParcela == 5){
         qtdParcela = '5x'
      } else if (qtdParcela == 4){
         qtdParcela = '4x'
      } else if (qtdParcela == 3){
         qtdParcela = '3x'
      } else if (qtdParcela == 2){
         formaPgto = '2x'
      } else if (qtdParcela == 1){
         qtdParcela = '1x'
      } 


    document.getElementById("metodo").textContent = formaPgto
    document.getElementById("qtd_parcela").textContent = qtdParcela

  }
  obterMetodoParcela()

  //obtem o endereco do cliente para o pedido e salva o id para finalizar o pedido 
  function obterEnderecoPedido(meuValor1) {
    fetch('/indexEndereco/' + meuValor1)
      .then(response => response.json())
      .then(data => {
        // Filtrar os dados do cliente com base no meuValor
        const enderecoSelecionado = data.find(endereco => endereco.cliente_id == meuValor1);


        //preenche a lista de endereço com base no dado recebido 
        if (enderecoSelecionado) {
          let cepFormatado = enderecoSelecionado.cep.replace(/^(\d{5})(\d{3})$/, '$1-$2')
          document.getElementById("cep").textContent = cepFormatado
          document.getElementById("endereco").textContent = enderecoSelecionado.endereco;
          document.getElementById("complemento").textContent = enderecoSelecionado.complemento;
          document.getElementById("numero").textContent = enderecoSelecionado.numero;
          document.getElementById("bairro").textContent = enderecoSelecionado.bairro;
          document.getElementById("cidade").textContent = enderecoSelecionado.cidade;
          document.getElementById("uf").textContent = enderecoSelecionado.uf;
        } else {
          alert("Endereco não encontrado tente novamente!")
        }
        //salva o id do endereco no localsotage
        var idEnderecoSelecionado = enderecoSelecionado.id;
        localStorage.setItem('idEnderecoSelecionado', idEnderecoSelecionado);
       })
      .catch(error => {
        console.error('Erro ao obter os endereços:', error);
      });
  }
  obterEnderecoPedido(meuValor)


  //obtem o contato do cliente para o pedido e salva o id para finalizar o pedido 
  function obterContatoPedido(meuValor) {
    fetch('/indexContato')
      .then(response => response.json())
      .then(data => {
        // Filtrar os dados do cliente com base no meuValor
        const contatoSelecionado = data.find(contato => contato.cliente_id == meuValor);
        //preenche a lista do contato com base no dado recebido 
        if (contatoSelecionado) {
          let foneformatado = contatoSelecionado.fone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')

          document.getElementById("nome_contato").textContent = contatoSelecionado.nome_contato;
          document.getElementById("foneContato").textContent = foneformatado;
          document.getElementById("emailContato").textContent = contatoSelecionado.email;
        } else {
          alert('Contato não encontrado tenta novamente!!')
         // console.log('contato não encontrado com o cliente', meuValor);
        }
        //salva o id do contato no localsotage
        var idContatoSelecionado = contatoSelecionado.id;
        localStorage.setItem('idContatoSelecionado', idContatoSelecionado);
      })
      .catch(error => {
        console.error('Erro ao obter os endereços:', error);
      });
  }
  obterContatoPedido(meuValor)


 

//monta o objeto e salva o pedido no banco 
  function finalizarCompra() {

    //token auth para compra
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    var cliente_id = localStorage.getItem('idClienteselecionado');
    var endereco_id = localStorage.getItem('idEnderecoSelecionado');
    var statusPedido_id =  4 
    var condicaoVenda_id = localStorage.getItem('formaPgtoSelecionada');
    var qtdParcela_id = localStorage.getItem('parcelasSelecionadas');

    // Crie um objeto para armazenar os dados do pedido
    var pedidoData = {
      cliente_id: cliente_id,
      endereco_id: endereco_id,
      statusPedido_id: statusPedido_id,
      condicaoVenda_id: condicaoVenda_id,
      qtdParcela_id: qtdParcela_id,
      vl_mercadorias: somaTotal,
      vl_pedido: somaTotal
    };

  
    // Crie um array para armazenar os dados dos itens do pedido
    var itensPedidoData = [];
  
    for (var i = 0; i < opcoesSelecionadas.length; i++) {
      var opcaoSelecionada = opcoesSelecionadas[i];
  
      // Crie um objeto para armazenar os dados de cada item do pedido
      var itemPedidoData = { 
        SKU: opcaoSelecionada.sku,
        qt_produto: opcaoSelecionada.quantidade,
        vl_unitario: opcaoSelecionada.valor_unidade,
        vl_total: opcaoSelecionada.valor_unidade * opcaoSelecionada.quantidade
      };
      //monta o itensPedidoData com os itens
      itensPedidoData.push(itemPedidoData);
    }
    // Crie um objeto para armazenar os dados do pedido completo
    var dadosPedido = {
      itens_pedido: itensPedidoData,
      pedido: pedidoData
    };

    // Faça a requisição HTTP POST para o endpoint PHP
    fetch('/criaPedido', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      },
      body: JSON.stringify(dadosPedido)
    })
    .then(function(response) {
      if (response.status === 200) {
        scrollToTop()
        //gera o modal de sucesso
        let popUpExcluirEndereco = document.getElementById("popUpSucess");
        popUpExcluirEndereco.style.display = "block";
      
        let deletarBtn = popUpExcluirEndereco.querySelector(".confirm");
        deletarBtn.addEventListener("click", function() {
          popUpExcluirEndereco.style.display = "none";
          window.location.href = '/acompanharPedidos';
        });
      } else {
        scrollToTop()
        //gera o modal de erro
        let popUpExcluirEndereco = document.getElementById("popUpError");
        popUpExcluirEndereco.style.display = "block";
      
        let deletarBtn = popUpExcluirEndereco.querySelector(".confirmError");
        deletarBtn.addEventListener("click", function() {
          popUpExcluirEndereco.style.display = "none";
          window.location.reload();
        });
      }
    })
    .then(function(data) {
    })
    .catch(function(error) {
    });
  }
  
 