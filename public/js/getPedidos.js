
//obtem os pedidos e cria os mesmos
function oberProdutos() {
    fetch('/getdadosPedidos')
      .then(response => response.json())
      .then(data => {
        //caso não exista pedidos exibe o modal nenhum pedido encontrado
        if (data.length === 0) {
          scrollToTop();
          let popUpExcluirEndereco = document.getElementById("popUpError");
          popUpExcluirEndereco.style.display = "block";
        
          let deletarBtn = popUpExcluirEndereco.querySelector(".confirmError");
          deletarBtn.addEventListener("click", function() {
            popUpExcluirEndereco.style.display = "none";
          });
         // alert('Nenhum pedido encontrado.');
        } else {
        data.forEach(pedido => {
          // compara o status do pedido para informar o status na tela
          if(pedido.statusPedido_id == 5){
            pedido.status = 'Pedido Pago'
          } else if(pedido.statusPedido_id == 4){
            pedido.status = 'Em processamento'
          } else if (pedido.statusPedido_id == 3){
            pedido.status = 'Aguardando Pagamento'
          } else if (pedido.statusPedido_id == 2){
            pedido.status = 'Finalizado'
          } else if (pedido.statusPedido_id == 1){
            pedido.status = 'Faturado'
          }

          if (pedido) {
            // Crie os elementos necessários
            var divMeusPedContainer = document.createElement('div');
            divMeusPedContainer.setAttribute('class', 'meusPedContainer');
  
            var divFlexPedidos = document.createElement('div');
            divFlexPedidos.setAttribute('class', 'flexPedidos');
  
            var divNumPedContainer = document.createElement('div');
            divNumPedContainer.setAttribute('class', 'numPedContainer');
  
            var pNumPed = document.createElement('p');
            pNumPed.setAttribute('class', 'numPed');
            pNumPed.textContent = 'Nº do pedido: ';
  
            var strongNumPed = document.createElement('strong');
            strongNumPed.setAttribute('class', 'numPed');
            pNumPed.appendChild(strongNumPed);
  
            var divStatusDet = document.createElement('div');
            divStatusDet.setAttribute('class', 'statusDet');
  
            var pStatus = document.createElement('p');
            pStatus.textContent = 'Status: ';
  
            var spanStatus = document.createElement('span');
            spanStatus.textContent = pedido.status ;
            pStatus.appendChild(spanStatus);
  
            var buttonDetalhes = document.createElement('button');
            buttonDetalhes.setAttribute('class', 'btnEnvia btnCinza');
            buttonDetalhes.textContent = 'DETALHES DO PEDIDO';
  
            // Função anônima para associar a função getpedido com o objeto pedido correspondente
            buttonDetalhes.onclick = function() {
              getpedido(pedido);
            };
  
            // Adicione os elementos criados à hierarquia de elementos
            divNumPedContainer.appendChild(pNumPed);
            divStatusDet.appendChild(pStatus);
  
            divFlexPedidos.appendChild(divNumPedContainer);
            divFlexPedidos.appendChild(divStatusDet);
  
            divMeusPedContainer.appendChild(divFlexPedidos);
            divMeusPedContainer.appendChild(buttonDetalhes);
  
            // Encontre a div com o id "container" e adicione a divMeusPedContainer a ela
            var container = document.getElementById('container');
            container.appendChild(divMeusPedContainer);
  
            // Atualizar o conteúdo do elemento <strong> com o número do pedido
            strongNumPed.innerHTML = pedido.id;
          } else {
            console.log('erro');
          }
        }); 
      }
      })
      .catch(error => {
         console.log("erro ao carregar os pedidos tente novamente")
      });
       
  }
oberProdutos();
  
//armazena o valor do pedido e leva para a pagina com os dados do mesmo
  function getpedido(pedido) {
    //console.log(pedido)
    localStorage.setItem('pedido', JSON.stringify(pedido));
     window.location.href = '/meusPedidos';
  }



