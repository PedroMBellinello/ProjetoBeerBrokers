
  
 //gera lista de clientes
 window.onload = function GeraListaClientes() {

  fetch('/indexClientes')
    .then(response => response.json())
    .then(data => {
      let labelCount = 0;
      let resumoContDiv;
      
      data.forEach(client => {
        if (labelCount % 7 === 0) {
          //cria a nova div com a classe "resumoCont"
          resumoContDiv = document.createElement('div');
          resumoContDiv.classList.add('resumoCont');
          document.body.appendChild(resumoContDiv);
        }

        // Cria a div com o elemento "boxCerv"
        const boxCervDiv = document.createElement('div');
        boxCervDiv.classList.add('boxCerv');

        // cria a div "infoGeral" e "lista"
        const infoGeralDiv = document.createElement('div');
        infoGeralDiv.classList.add('infoGeral', 'lista');

        //preenche a div com os dados do cliente
        const clientData = [
          { label: 'CNPJ: ', value: client.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5') },
          { label: 'Razão Social: ', value: client.razao },
          { label: 'Nome Fantasia: ', value: client.fantasia },
          { label: 'Inscrição Estadual: ', value: client.insc_estadual },
          { label: 'Inscrição Municipal: ', value: client.incs_municipal },
          { label: 'Email:', value: client.email},
          { label: 'Telefone: ', value: client.fone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')},
        ];

        clientData.forEach(data => {
          const paragraph = document.createElement('p');
          const strong = document.createElement('strong');
          strong.textContent = data.label;
          const span = document.createElement('span');
          span.textContent = data.value;
          paragraph.appendChild(strong);
          paragraph.appendChild(document.createElement('br')); // Adiciona a quebra de linha
          paragraph.appendChild(span);
          infoGeralDiv.appendChild(paragraph);
        });
        
        //cria o botao "btnEnd"
        const btnEndDiv = document.createElement('div');
        btnEndDiv.classList.add('btnEnd');

        //cria o botao de excluir e salva o id do cliente no botao
        const excluiEndButton = document.createElement('button');
        excluiEndButton.classList.add('excluiEnd');
        excluiEndButton.textContent = 'Excluir';
        excluiEndButton.setAttribute('data-client-id', client.id);
        excluiEndButton.addEventListener('click', function() {
          const clientId = this.getAttribute('data-client-id');
          showModal(clientId);
        });

        //cria o botao de editar e salva o id do cliente no botao
        const editaEndButton = document.createElement('button');
        editaEndButton.classList.add('btnEnviar', 'editaEnd');
        const link = document.createElement('a');
        link.href = '/editaCliente';
        link.textContent = 'Editar';
        link.setAttribute('data-client-id', client.id);
        editaEndButton.addEventListener('click', editCliente);
        editaEndButton.appendChild(link);

        //cria o botao de endereco e salva o id do cliente no botao
        const enderecoButton = document.createElement('button');
        enderecoButton.classList.add('btnEnviar', 'editaEnd');
        const linkEndereco = document.createElement('a');
        linkEndereco.href = '/listaEndereco';
        linkEndereco.textContent = 'Endereços';
        linkEndereco.dataset.clientId = client.id;
        enderecoButton.addEventListener('click', function() {
          const clientId = this.firstChild.dataset.clientId;
          getEndereco(clientId);

        });
        enderecoButton.appendChild(linkEndereco);

        // gera os appendChild das divs
        btnEndDiv.appendChild(enderecoButton);
        btnEndDiv.appendChild(editaEndButton);
        btnEndDiv.appendChild(excluiEndButton);
        boxCervDiv.appendChild(infoGeralDiv);
        resumoContDiv.appendChild(boxCervDiv);
        resumoContDiv.appendChild(btnEndDiv);

        document.body.appendChild(resumoContDiv);

        var container = document.getElementById("resumoCont");
        container.appendChild(resumoContDiv);

      });
      
    });
    
};



  function getEndereco(clientId) {
    localStorage.setItem('clienteId', clientId);
    //console.log(clientId);
  }


  //edita o cliente
  function editCliente(event) {
    const id = event.target.dataset.clientId;
    localStorage.setItem('Id', id);
  }

// mostra o modal delete cliete e salva o id do mesmo
  function showModal(clientId) {
    scrollToTop();
    let popUpDeleteCliente = document.getElementById("popUpDeleteCliente");
    popUpDeleteCliente.style.display = "block";
    popUpDeleteCliente.setAttribute('data-client-id', clientId);
    
    //adiciona o fundo preto
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.classList.add("open")

    let deletarBtn = popUpDeleteCliente.querySelector(".excluiEndDef");
    deletarBtn.addEventListener("click", function() {
      const clientId = popUpDeleteCliente.getAttribute('data-client-id');
      deleteCliente(clientId);

     popUpDeleteCliente.style.display = "none";
    });
  
    let cancelarBtn = popUpDeleteCliente.querySelector(".cancela");
    cancelarBtn.addEventListener("click", function() {
      //remove o fundo preto
      let telaPreta = document.getElementById("telaPreta");
      telaPreta.classList.remove("open")
      popUpDeleteCliente.style.display = "none";
    });
  }
  


//deleta o cliiente com base no clientId
function deleteCliente(clientId) {
  const id = clientId;
  // envia os dados para deletar o cliente
  fetch(`/api/deleteCliente/delete/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.status === 200) {
        scrollToTop();
        let popUpSuccess = document.getElementById("popUpSucess");
        popUpSuccess.style.display = "block";
        //adiciona o fundo preto
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.add("open")

        let okButton = popUpSuccess.querySelector(".confirm");
        okButton.addEventListener("click", function() {
          //remove o fundo preto
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.remove("open")
          window.location.reload();
        });
      } else if (response.status === 500) {
        scrollToTop();
        let popUpSuccess = document.getElementById("popUpError");
        popUpSuccess.style.display = "block";
        //adiciona o fundo preto
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.add("open")

        let okButton = popUpSuccess.querySelector(".confirmError");
        okButton.addEventListener("click", function() {
          //remove o fundo preto
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.remove("open")
          window.location.reload();
        });
      }
      return response.json();
    })
    .then(data => {
      // Resto do código...
    });
}





