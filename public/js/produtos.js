

//get numero do cliente 
var meuValor = localStorage.getItem('meuValor');
console.log('id do cliente', meuValor); 




  function oberProdutos() {
      fetch('/indexProdutos')
      .then(response => response.json())
      .then(data => {
      // console.log(data);

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
           //  option.value = produto.cd_Item; 
             elementoSelect.appendChild(option);
          });
        }
      })
      .catch(error => {
       
        console.error('Erro ao obter os clientes:', error);
      });
    }
  
  oberProdutos();


     //cria o array vazio de opções
     var opcoesSelecionadas = [];

    //armazena e cria o a div do produto com base no dado recebido pelo option 
    function CriaModalProd() {

        //salva no value o produto selecionado
        var inputValue = document.getElementById("rotulo").value;


        // Criar a nova div
        var novaDiv = document.createElement("div");
        novaDiv.classList.add("divDoProd");
   
        // Criar a div com a classe "foto" e a imagem
        var divFoto = document.createElement("div");
        divFoto.classList.add("foto");
 
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "https://clubedomalte.fbitsstatic.net/img/p/cerveja-underground-american-ipa-garrafa-355ml-88480/255537.jpg?w=214&h=214&v=no-change&qs=ignore");
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
   

        // Criar o botão de aumentar quantidade
        var botaoAumentar = document.createElement("button");
        botaoAumentar.classList.add("plus");
        botaoAumentar.setAttribute("role", "button");
        botaoAumentar.setAttribute("tabindex", "0");
        botaoAumentar.textContent = "+";
   
        divBotoesQuantidade.appendChild(botaoAumentar);
        divQuantidade.appendChild(divBotoesQuantidade);
        divDescricao.appendChild(divQuantidade);
   
        
        var divMudar = document.createElement("div");
        divMudar.classList.add("mudar");
   
        //excluir produto
        var linkExcluir = document.createElement("a");
        linkExcluir.setAttribute("href", "#");
        linkExcluir.textContent = "Remover";
        linkExcluir.addEventListener("click", function() {
         // Remover a div do produto
         novaDiv.remove();

        // atualiza o array de produtos para remover os produtos excluidos pelo usuario
         var index = opcoesSelecionadas.indexOf(inputValue);
         if (index > -1) {
           opcoesSelecionadas.splice(index, 1);
         }
        });


        divMudar.appendChild(linkExcluir);
        divDescricao.appendChild(divMudar);
        novaDiv.appendChild(divDescricao);
      
        // Adicionar a nova div ao contêiner
        var container = document.getElementById("container");
        container.appendChild(novaDiv);
 
        //fecha o modal apos escolher o produto
        var modal = document.getElementById("modalEscolheProd");
        modal.style.display = "none";
 
 
        //monta o array de opções selecionadas
        opcoesSelecionadas.push(inputValue);
        
        console.log(opcoesSelecionadas);
       // console.log(inputValue)
       
   }
 
   

   
   // Salvar o array opcoesSelecionadas no LocalStorage
   localStorage.setItem('opcoesSelecionadas', JSON.stringify(opcoesSelecionadas));


 
 
   function gerarNovaDiv() {
     CriaModalProd();
   }
 
 
   function  mostraModal() {
     var modal = document.getElementById("modalEscolheProd");
     modal.style.display = "block";
     window.scrollTo(0, 0);
   }
 

  function formaPgto(event) {
    event.preventDefault();

    if (opcoesSelecionadas.length === 0) {
      alert("Selecione um produto para continuar.");
    } else {
      // Redirecionar para a outra página incluindo o array opcoesSelecionadas na URL
      window.location.href = '/formaPgto?opcoesSelecionadas=' + encodeURIComponent(JSON.stringify(opcoesSelecionadas));
    }
  }
  
 