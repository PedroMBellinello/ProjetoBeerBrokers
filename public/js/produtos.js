//recupera o id do cliente 
var idClienteSelecionado = localStorage.getItem('idClienteSelecionado');

//Recupera o id do endereço
var idEndereciClienteSelecionado = localStorage.getItem('idEndereciClienteSelecionado');

//cria a var Uf para a consulta dos preços 
var uf

//cria o array de produtos selecionados
var opcoesSelecionadas = [];

//  console.log('id do cliente',idClienteSelecionado)

//salva se o usuario pode alterar preço
var alteraPreco;


//compara se o vendedor for vendedor_mc se sim exibe a lista de todos os produtos sem limitações caso nao exibe a lista com base nos clientes
function obterProdutos() {
  //pega os daddos basicos do usuario logado para confirmar se ele é vendedor mc ou não
  fetch('/usuario/logado/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados do usuário logado');
      }
      return response.json();
    })
    .then(data => {
      //  console.log(data)
      if (data.vendedor_mc === "S") {
        fetch('/indexProdutosVendedorMC/')
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
                option.textContent = produto.descricao;
                option.id = produto.cd_Item;
                option.className = produto.url_img;
                elementoSelect.appendChild(option);
              });
            }
          })
          .catch(error => {
            console.error('Erro ao obter os clientes:', error);
          });

      } else {
        //compara o cnpj do cliente com a lista de produtos caso seja Cliente Mestre cervejeiro a lista é completa caso não é limitada
        var idClienteSelecionado = localStorage.getItem('idClienteSelecionado');
        fetch('/indexProdutos/' + idClienteSelecionado)
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
                // console.log(produto)
                const option = document.createElement('option');
                option.textContent = produto.descricao;
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
      // console.log(data);
    })
    .catch(error => {
      //  console.error('Erro ao obter os dados do usuário logado:', error);
    });
}

// Chamando a função para exibir os dados do usuário logado no console
obterProdutos();




// //obtem os produtos parceiros da BRK e os coloca nas options
// function oberProdutos() {
//   var idClienteSelecionado= localStorage.getItem('idClienteSelecionado');
//     fetch('/indexProdutos/' + idClienteSelecionado)
//     .then(response => response.json())
//     .then(data => {
//       const elementoSelect = document.getElementById('rotulo');
//       elementoSelect.innerHTML = '';
//       if (data.length === 0) {
//         const optionPadrao = document.createElement('option');
//         optionPadrao.value = '';
//         optionPadrao.textContent = 'produtos..';
//         elementoSelect.appendChild(optionPadrao);
//       } else {
//         data.forEach(produto => {
//          // console.log(produto)
//           const option = document.createElement('option');
//            option.textContent = produto.descricao  ;
//            option.id = produto.cd_Item; 
//            option.className = produto.url_img; 
//            elementoSelect.appendChild(option);
//         });
//       }
//     })
//     .catch(error => {   
//       console.error('Erro ao obter os clientes:', error);
//     });
//   }



//Pega o uf do endereço e salva como var global para ser usado no calculo dos produtos
function getEnderecoProduto() {

  //Recebe o id do endereço para ser utilizado a rota
  var idEndereciClienteSelecionado = localStorage.getItem('idEndereciClienteSelecionado');

  //Recebe o id do endereço e faz a consulta do UF do endereço para salvar na var uf e utilizar nos calculos 
  fetch(`/getEnderecoPedido/${idEndereciClienteSelecionado}`)
    .then(response => response.json())
    .then(data => {
      uf = data[0].uf;
    });
}



function usuarioAlteraPreco() {
  fetch('/usuario/logado/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados do usuário logado');
      }
      return response.json();
    })
    .then(data => {
      alteraPreco = data.permite_alterar_preco;
    });
}
usuarioAlteraPreco();



//Cria e armazena a div com os dados nescessarios passados pelo obter produtos getPreco
async function CriaModalProd() {
 
 // console.log('teste', alteraPreco)

      if (alteraPreco === "S") {

        //PERMITE ALTERAR OS VALORES 
        //salva no value o produto selecionado
        var inputValue = document.getElementById("rotulo").value;

        //salva o id do prod
        var selectedIndex = document.getElementById("rotulo").selectedIndex;
        var selectedOption = document.getElementById("rotulo").options[selectedIndex];

        // remove os espaços em branco do slu recebido do banco
        var cd_item = selectedOption.id;
        cd_item = cd_item.trim();

        //caso o sku for um numero ele ira adicionar o texto SKU na frente para o tratamento de divDuplicada
        if (!isNaN(cd_item.charAt(0))) {
          var sku = "SKU";
          cd_item = sku + cd_item;
        }

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
        if (img_url === "null" || img_url === "" || img_url === 404) {
          img_url = imgPadrao;
        }

        // console.log(img_url)

        // Criar a nova div
        var novaDiv = document.createElement("div");
        novaDiv.classList.add("divDoProd", cd_item);

        // Criar a div com a classe "foto" e a imagem
        var divFoto = document.createElement("div");
        divFoto.classList.add("foto",);

        var imagem = document.createElement("img");
        imagem.setAttribute("src", img_url);
        imagem.setAttribute("alt", "Falha ao carregar a imagem");
        divFoto.appendChild(imagem);
        novaDiv.appendChild(divFoto);

        // Criar a div com a classe "descricao"
        var divDescricao = document.createElement("div");
        divDescricao.classList.add("descricao");

        // Criar o elemento <p> para o nome do produto
        var nomeProduto = document.createElement("p");
        nomeProduto.classList.add(cd_item);
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
          }
        });
        //responsavel por remover  o valor no input qtd de produtos
        $(novaDiv).on('click', '.qtd .minus', function () {
          var qtd = $(this).parent().find('input').val();
          if (qtd > 1) {
            qtd--;
            $(this).parent().find('input').val(qtd);
            novaDiv.produto.quantidade = qtd; // Atualizar a quantidade no objeto do produto da div
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
        var divValor = document.createElement("div");
        divValor.classList.add("qtdCont");
        
        var textoValor = document.createElement("p");
        textoValor.classList.add("inputP");
        textoValor.textContent = "R$:";
        
        var divValorCont = document.createElement("div");
        divValorCont.classList.add("valorCont");
        
        var precoProduto = document.createElement("input");
        precoProduto.classList.add("nomeP");
        precoProduto.setAttribute("type", "number");
        precoProduto.value = '  ';
        //+ await getPrecosProdutos(uf, cd_itemSelecionado);

        
        divValorCont.appendChild(precoProduto);
        divValor.appendChild(textoValor);
        divValor.appendChild(divValorCont);
        divDescricao.appendChild(divValor);


        var divMudar = document.createElement("div");
        divMudar.classList.add("mudar");


        //excluir produto
        var linkExcluir = document.createElement("a");
        linkExcluir.setAttribute("href", "#");
        linkExcluir.textContent = "Remover";
        //remove a div do produto e atualiza o array opções selecionadas
        linkExcluir.addEventListener("click", function () {
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


        //verifica se o produto escolhido for ja existir na tela se existir add +1 no qtd do produto
        var divDuplicada = document.querySelector('.divDoProd.' + cd_item);
        if (divDuplicada) {
          // Incrementar a quantidade na div duplicada
          var inputQtd = divDuplicada.querySelector('.qtdCont input');
          var qtd = parseInt(inputQtd.value, 10);
          inputQtd.value = qtd + 1;

          // Atualizar a quantidade no objeto do produto da div
          divDuplicada.produto.quantidade = qtd + 1;

          var modal = document.getElementById("modalEscolheProd");
          modal.style.display = "none";
          //remove o fundo preto
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.remove("open")
          return; // Sai da função para evitar a criação de uma nova div
        }

        // Adicionar a nova div ao contêiner
        var container = document.getElementById("container");
        container.appendChild(novaDiv);

        //fecha o modal apos escolher o produto
        var modal = document.getElementById("modalEscolheProd");
        modal.style.display = "none";
        //remove o fundo preto
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.remove("open")



        if (cd_item.startsWith("SKU")) {
          cd_item = cd_item.substring(3);
        }

        //cria o objeto do produto com os dados do produto selecionado 

        precoProduto.addEventListener("blur", function () {
          novaDiv.produto.valor_unidade = precoProduto.value;
        });

        novaDiv.produto = {
          nome: inputValue,
          imgUrl: img_url,
          quantidade: 1,
          sku: cd_item,
          valor_unidade: precoProduto.value
        };
        //monta o array de opções selecionadas com os produtos selecionados pelo usuario
        opcoesSelecionadas.push(novaDiv.produto);

      } else {

        //nao pode alterar preço
        //salva no value o produto selecionado
        var inputValue = document.getElementById("rotulo").value;

        //salva o id do prod
        var selectedIndex = document.getElementById("rotulo").selectedIndex;
        var selectedOption = document.getElementById("rotulo").options[selectedIndex];

        // remove os espaços em branco do slu recebido do banco
        var cd_item = selectedOption.id;
        cd_item = cd_item.trim();

        //caso o sku for um numero ele ira adicionar o texto SKU na frente para o tratamento de divDuplicada
        if (!isNaN(cd_item.charAt(0))) {
          var sku = "SKU";
          cd_item = sku + cd_item;
        }

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
        if (img_url === "null" || img_url === "" || img_url === 404) {
          img_url = imgPadrao;
        }

        // console.log(img_url)

        // Criar a nova div
        var novaDiv = document.createElement("div");
        novaDiv.classList.add("divDoProd", cd_item);

        // Criar a div com a classe "foto" e a imagem
        var divFoto = document.createElement("div");
        divFoto.classList.add("foto",);

        var imagem = document.createElement("img");
        imagem.setAttribute("src", img_url);
        imagem.setAttribute("alt", "Falha ao carregar a imagem");
        divFoto.appendChild(imagem);
        novaDiv.appendChild(divFoto);

        // Criar a div com a classe "descricao"
        var divDescricao = document.createElement("div");
        divDescricao.classList.add("descricao");

        // Criar o elemento <p> para o nome do produto
        var nomeProduto = document.createElement("p");
        nomeProduto.classList.add(cd_item);
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
          }
        });
        //responsavel por remover  o valor no input qtd de produtos
        $(novaDiv).on('click', '.qtd .minus', function () {
          var qtd = $(this).parent().find('input').val();
          if (qtd > 1) {
            qtd--;
            $(this).parent().find('input').val(qtd);
            novaDiv.produto.quantidade = qtd; // Atualizar a quantidade no objeto do produto da div
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
        linkExcluir.addEventListener("click", function () {
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


        //verifica se o produto escolhido for ja existir na tela se existir add +1 no qtd do produto
        var divDuplicada = document.querySelector('.divDoProd.' + cd_item);
        if (divDuplicada) {
          // Incrementar a quantidade na div duplicada
          var inputQtd = divDuplicada.querySelector('.qtdCont input');
          var qtd = parseInt(inputQtd.value, 10);
          inputQtd.value = qtd + 1;

          // Atualizar a quantidade no objeto do produto da div
          divDuplicada.produto.quantidade = qtd + 1;

          var modal = document.getElementById("modalEscolheProd");
          modal.style.display = "none";
          //remove o fundo preto
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.remove("open")
          return; // Sai da função para evitar a criação de uma nova div
        }

        // Adicionar a nova div ao contêiner
        var container = document.getElementById("container");
        container.appendChild(novaDiv);

        //fecha o modal apos escolher o produto
        var modal = document.getElementById("modalEscolheProd");
        modal.style.display = "none";
        //remove o fundo preto
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.remove("open")



        if (cd_item.startsWith("SKU")) {
          cd_item = cd_item.substring(3);
        }

        //cria o objeto do produto com os dados do produto selecionado 


        novaDiv.produto = {
          nome: inputValue,
          imgUrl: img_url,
          quantidade: 1,
          sku: cd_item,
          valor_unidade: await getPrecosProdutos(uf, cd_itemSelecionado)
        };
        //monta o array de opções selecionadas com os produtos selecionados pelo usuario
        opcoesSelecionadas.push(novaDiv.produto);
      }




}


//Recebe o uf da variavel global e o sku do produto selecionado no cd_item para pesquisar o preço do produto por estado
function getPrecosProdutos(uf, cd_itemSelecionado) {
  var cd_item = cd_itemSelecionado;
  var cd_estado = uf;

  //remove o Texto SKU do começo do cd_item para consunlta caso haja um 
  if (cd_item.startsWith("SKU")) {
    cd_item = cd_item.substring(3);
  }

  return fetch('/indexPrecos/' + cd_item + '/' + cd_estado)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      var vl_unitario = parseFloat(data[0].vl_unitario);
      var vl_unitario_formatado = vl_unitario;
      console.log(vl_unitario_formatado)
      return vl_unitario_formatado;
    })
    .catch(function (error) {
      console.error(error);
    });
}

//Recebe o uf da variavel global e o sku do produto selecionado no cd_item para pesquisar o preço do produto por estado
//  function getPrecosProdutos(uf, cd_itemSelecionado) {
//   var cd_item = cd_itemSelecionado;
//   var cd_estado = uf;

//   return fetch('/indexPrecos/' + cd_item + '/' + cd_estado)
//     .then(function(response) {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then(function(data) {
//       if (data.length === 0) {
//         // Fazer outro fetch com cd_estado igual a "MC"
//         return fetch('/indexPrecos/' + cd_item + '/MC')
//           .then(function(response) {
//             if (response.ok) {
//               return response.json();
//             }
//           })
//           .then(function(data) {
//            // console.log(data);
//             var vl_unitario = parseFloat(data[0].vl_unitario);
//             var vl_unitario_formatado = vl_unitario;
//             return vl_unitario_formatado;
//           })
//           .catch(function(error) {
//             console.error(error);
//           });
//       } else {
//         //console.log(data);
//         var vl_unitario = parseFloat(data[0].vl_unitario);
//         var vl_unitario_formatado = vl_unitario;
//         return vl_unitario_formatado;
//       }
//     })
//     .catch(function(error) {
//       console.error(error);
//     });
// }



localStorage.setItem('opcoesSelecionadas', JSON.stringify(opcoesSelecionadas));

//gera a nova div e chama a função criaModal 
function gerarNovaDiv() {
  CriaModalProd();

}

//fecha a div selecionar produto ao clicar em fechar
function fecharDivProd() {
  var modal = document.getElementById("modalEscolheProd");
  modal.style.display = "none";
  //remove o fundo preto
  let telaPreta = document.getElementById("telaPreta");
  telaPreta.classList.remove("open")

}



// cria o scroll suave ao topo da pagina 
function scrollToTop() {
  var modal = document.getElementById("modalEscolheProd");
  modal.style.display = "block";
  //adiciona o fundo preto
  let telaPreta = document.getElementById("telaPreta");
  telaPreta.classList.add("open")
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
  // oberProdutos();  //gera a lista de produtos
  getEnderecoProduto(); //setar o uf pra pagina
})


//salva a forma de pagamento selecionada
function formaPgto(event) {
  event.preventDefault();
  if (opcoesSelecionadas.length === 0) {
    scrollToTop()
    let popUpExcluirEndereco = document.getElementById("popUpError");
    popUpExcluirEndereco.style.display = "block";
    //adiciona o fundo preto
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.classList.add("open")

    setTimeout(function () {
      popUpExcluirEndereco.style.display = "none";
      //remove o fundo preto
      let telaPreta = document.getElementById("telaPreta");
      telaPreta.classList.remove("open")

    }, 2000);
    var modal = document.getElementById("modalEscolheProd");
    modal.style.display = "none";
  } else {
    // Redirecionar para a outra página incluindo o array opcoesSelecionadas na URL
    window.location.href = '/formaPgto?opcoesSelecionadas=' + encodeURIComponent(JSON.stringify(opcoesSelecionadas));
  }
}




