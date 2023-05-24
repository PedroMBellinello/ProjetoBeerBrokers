
  
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

        const clientData = [
       //  { label: 'Id:', value: client.id },
          { label: 'CNPJ:', value: client.cnpj },
          { label: 'Razão Social:', value: client.razao },
          { label: 'Nome Fantasia:', value: client.fantasia },
          { label: 'Inscrição Estadual:', value: client.insc_estadual },
          { label: 'Inscrição Municipal:', value: client.incs_municipal },
          { label: 'Email:', value: client.email },
          { label: 'Telefone:\n', value: client.fone },
        ];

        clientData.forEach(data => {
          const paragraph = document.createElement('p');
          const strong = document.createElement('strong');
          strong.textContent = data.label;
          const span = document.createElement('span');
          span.textContent = data.value;
          paragraph.appendChild(strong);
          paragraph.appendChild(span);
          infoGeralDiv.appendChild(paragraph);
        });
        
        //cria o botao "btnEnd"
        const btnEndDiv = document.createElement('div');
        btnEndDiv.classList.add('btnEnd');

        // cria o botao excluir "excluiEnd"
        const excluiEndButton = document.createElement('button');
        excluiEndButton.classList.add('excluiEnd');
        excluiEndButton.textContent = 'Excluir';
       // excluiEndButton.addEventListener('click', showModal);
        excluiEndButton.addEventListener('click', deleteCliente);
        excluiEndButton.setAttribute('data-client-id', client.id);

        //cria o botao  enditar "btnEnviar" and a link
        const editaEndButton = document.createElement('button');
        editaEndButton.classList.add('btnEnviar', 'editaEnd');
        const link = document.createElement('a');
        link.href = '/editaCliente';
        link.textContent = 'Editar';
        link.setAttribute('data-client-id', client.id);
        editaEndButton.addEventListener('click', editCliente);
        editaEndButton.appendChild(link);

        // gera os appendChild das divs
        btnEndDiv.appendChild(excluiEndButton);
        btnEndDiv.appendChild(editaEndButton);
        boxCervDiv.appendChild(infoGeralDiv);
        resumoContDiv.appendChild(boxCervDiv);
        resumoContDiv.appendChild(btnEndDiv);


        document.body.appendChild(resumoContDiv);

        var container = document.getElementById("resumoCont");
        container.appendChild(resumoContDiv);

      });
      
    });
    
    
  
 };


  //edita o cliente
  function editCliente(event) {
    const id = event.target.dataset.clientId;
    localStorage.setItem('Id', id);
  }


  //deleta o cliente
  function deleteCliente(event) {
    const id = event.target.dataset.clientId;
  //envia os dados para deletar o cliente
    fetch(`/api/deleteCliente/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 200) {
          alert("Cliente excluído com sucesso!");
          window.location.reload();
        } else if (response.status === 500) {
          alert("Erro ao excluir o cliente.");
        }
        return response.json();
      })
      .then(data => {
        // Faça algo com a resposta do servidor, se necessário
      });
  }



// function showModal() {
//   $('.excluiEnd').on('click', function () {
//     $(".popUpAtencao").toggleClass('open');
//     $(".telaPreta").toggleClass('open');
//     element = document.getElementsByTagName("section")[0];
//     element.scrollIntoView();
//   })
// }



