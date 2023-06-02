   //recupera o id do cliente 
   var meuValor = localStorage.getItem('meuValor');

   //Recupera o id do endereço
   var meuValor1 = localStorage.getItem('meuValor1');

   //cria a var Uf para a consulta dos preços 
   var uf

   //cria o array de produtos selecionados
   var opcoesSelecionadas = [];


  //obtem os produtos parceiros da BRK e os coloca nas options
  function oberProdutos() {
      fetch('/indexProdutos')
      .then(response => response.json())
      .then(data => {
        const elementoSelect = document.getElementById('rotulo');
        elementoSelect.innerHTML = '';
        if (data.length === 0) {
          const optionPadrao = document.createElement('option');
          optionPadrao.value = '';
          optionPadrao.textContent = 'produtos..';
          elementoSelect.appendChild(optionPadrao);
        } else {
          data.forEach(produto => {
            const option = document.createElement('option');
             option.textContent = produto.descricao  ;
             option.id = produto.cd_Item; 
             option.className = produto.url_img; 
             elementoSelect.appendChild(option);
          });
        }
      })
      .catch(error => {   
        console.error('Erro ao obter os clientes:', error);
      });
    }
  


  //Pega o uf do endereço e salva como var global para ser usado no calculo dos produtos
  function getEnderecoProduto() {
      //Recebe o id do endereço para ser utilizado a rota
      var meuValor1 = localStorage.getItem('meuValor1');

      //Recebe o id do endereço e faz a consulta do UF do endereço para salvar na var uf e utilizar nos calculos 
       fetch(`/getEnderecoPedido/${meuValor1}`)
          .then(response => response.json())
          .then(data => {
            uf = data[0].uf;
          });
          
      }

    //Cria e armazena a div com os dados nescessarios passados pelo obter produtos getPreco
    async  function CriaModalProd() {
        
        //salva no value o produto selecionado
        var inputValue = document.getElementById("rotulo").value;
 
        //salva o id do prod
        var selectedIndex = document.getElementById("rotulo").selectedIndex;
        var selectedOption = document.getElementById("rotulo").options[selectedIndex];

        // Obtém o ID da opção selecionada
        var cd_item = selectedOption.id;
        cd_item = cd_item.trim();
        
        //seta o sku do item como cd_itemSelecionado para ser usado na consulta do preço
        cd_itemSelecionado = cd_item;


        //recupera a url da imagem para montar a div do produto
        var selectedIndex = document.getElementById("rotulo").selectedIndex;
        var selectedOption = document.getElementById("rotulo").options[selectedIndex];
        // Obtém o ID da opção selecionada
        var img_url = selectedOption.className;


        //url padrão para produtos sem imagem
        var imgPadrao = "https://recursos.clubedomalte.com.br/i/_2023/junho/logoLup.jpg"; 

        //caso não haja imagem do produto o mesmos era setado como a img padrão
        if (img_url === "null" || img_url === "") {
          img_url = imgPadrao;
        }
          
        // Criar a nova div
        var novaDiv = document.createElement("div");
        novaDiv.classList.add("divDoProd", cd_item);
   
        // Criar a div com a classe "foto" e a imagem
        var divFoto = document.createElement("div");
        divFoto.classList.add("foto",);
 
        var imagem = document.createElement("img");
        imagem.setAttribute("src", img_url );
        imagem.setAttribute("alt", "Falha ao carregar a imagem");
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
   

    
        //responsavel por adicionar  o valor no input qtd de produtos
      $(novaDiv).on('click', '.qtd .plus', function () {
          var qtd = $(this).parent().find('input').val();
          if (qtd < 50) {
              qtd++;
              $(this).parent().find('input').val(qtd);
              novaDiv.produto.quantidade = qtd; // Atualizar a quantidade no objeto do produto da div
             // console.log(novaDiv.produto);
          }
      });
        //responsavel por remover  o valor no input qtd de produtos
      $(novaDiv).on('click', '.qtd .minus', function () {
          var qtd = $(this).parent().find('input').val();
          if (qtd > 1) {
              qtd--;
              $(this).parent().find('input').val(qtd);
              novaDiv.produto.quantidade = qtd; // Atualizar a quantidade no objeto do produto da div
            //  console.log(novaDiv.produto);
          }
      });


        // Criar o botão de aumentar quantidade
        var botaoAumentar = document.createElement("button");
        botaoAumentar.classList.add("plus");
        botaoAumentar.setAttribute("role", "button");
        botaoAumentar.setAttribute("tabindex", "0");
        botaoAumentar.textContent = "+";
   
        divBotoesQuantidade.appendChild(botaoAumentar);
        divQuantidade.appendChild(divBotoesQuantidade);
        divDescricao.appendChild(divQuantidade);
   
          
        //cria o P para representar o valor do produto 
        var precoProduto = document.createElement("p");
        precoProduto.classList.add("nome");
        precoProduto.textContent = 'Valor: R$ ' + await getPrecosProdutos(uf, cd_itemSelecionado);
        precoProduto.style.fontWeight = "bold"; 
        divDescricao.appendChild(precoProduto);

        var divMudar = document.createElement("div");
        divMudar.classList.add("mudar");

   
        //excluir produto
        var linkExcluir = document.createElement("a");
        linkExcluir.setAttribute("href", "#");
        linkExcluir.textContent = "Remover";
        //remove a div do produto e atualiza o array opções selecionadas
        linkExcluir.addEventListener("click", function() {
          var index = parseInt(novaDiv.getAttribute("data-index"), 10);
          if (!isNaN(index) && index >= 0) {
            opcoesSelecionadas.splice(index, 2); // Remover o produto e sua URL de imagem
          }
         // Remover a div do produto
         novaDiv.remove();
        });

       
        novaDiv.setAttribute("data-index", opcoesSelecionadas.length);
        // atualiza o array de produtos para remover os produtos excluidos pelo usuario
        var index = opcoesSelecionadas.indexOf(inputValue);
        if (index > -1) {
          opcoesSelecionadas.splice(index, 1);
        }
        var index = opcoesSelecionadas.indexOf(img_url);
        if (index > -1) {
          opcoesSelecionadas.splice(index, 1);
        }

        divMudar.appendChild(linkExcluir);
        divDescricao.appendChild(divMudar);
        novaDiv.appendChild(divDescricao);
      
        // Adicionar a nova div ao contêiner
        var container = document.getElementById("container");
        container.appendChild(novaDiv);
 
        //fecha o modal apos escolher o produto
        var modal = document.getElementById("modalEscolheProd");
        modal.style.display = "none";
 

         //cria o objeto do produto com os dados do produto selecionado 
         novaDiv.produto = {
          nome: inputValue,
          imgUrl: img_url,
          quantidade: 1,
          sku: cd_item,
          valor_unidade: await getPrecosProdutos(uf, cd_itemSelecionado)//await getEnderecoProduto()
        };


       //monta o array de opções selecionadas com os produtos selecionados pelo usuario
        opcoesSelecionadas.push(novaDiv.produto);

        //console.log(opcoesSelecionadas);
   }
 
   //Recebe o uf da variavel global e o sku do produto selecionado no cd_item para pesquisar o preço do produto por estado
   function getPrecosProdutos(uf, cd_itemSelecionado) {
    var cd_item = cd_itemSelecionado;
    var cd_estado = uf;
  
    return fetch('/indexPrecos/' + cd_item + '/' + cd_estado)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function(data) {
        var vl_unitario = parseFloat(data[0].vl_unitario);
        var vl_unitario_formatado = vl_unitario;
        return vl_unitario_formatado;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
  
  localStorage.setItem('opcoesSelecionadas', JSON.stringify(opcoesSelecionadas));

   //gera a nova div e chama a função criaModal 
   function gerarNovaDiv() {
     CriaModalProd();
   }
 
 
   // cria o scroll suave ao topo da pagina 
   function scrollToTop() {
    var modal = document.getElementById("modalEscolheProd");
    modal.style.display = "block"; 
    var currentPosition = window.scrollY || window.pageYOffset;
    var targetPosition = 0;
    var startTime = null;
  
    function scrollToTop(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }
      var progress = timestamp - startTime;
      var easeInOutCubic = progress < 500 ? progress ** 3 / (500 ** 3) : 1;
      var currentPosition = window.scrollY || window.pageYOffset;
      var distance = currentPosition - targetPosition;
      var newPosition = currentPosition - distance * easeInOutCubic;
      window.scrollTo(0, newPosition);
      if (progress < 500) {
        requestAnimationFrame(scrollToTop);
      }
    }
    requestAnimationFrame(scrollToTop);
  }


  // chama a função obter produtos para gera a lista e a getEndereco para setar a UF global 
  document.addEventListener('DOMContentLoaded', () => {
    oberProdutos();  //gera a lista de produtos
    getEnderecoProduto(); //setar o uf pra pagina
  })

 

  //salva a forma de pagamento selecionada
  function formaPgto(event) {
    event.preventDefault();
    if (opcoesSelecionadas.length === 0) {
      alert("Selecione um produto para continuar.");
    } else {
      // Redirecionar para a outra página incluindo o array opcoesSelecionadas na URL
      window.location.href = '/formaPgto?opcoesSelecionadas=' + encodeURIComponent(JSON.stringify(opcoesSelecionadas));
    }
  }
  


  
