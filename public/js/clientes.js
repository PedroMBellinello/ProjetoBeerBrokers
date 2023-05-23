


window.onload = function GeraListaClientes() {
  // Retrieve the client data from the server
 

  fetch('/indexClientes')
    .then(response => response.json())
    .then(data => {
      let labelCount = 0;
      let resumoContDiv;
      
      data.forEach(client => {
        if (labelCount % 7 === 0) {
          // Create a new div element with class "resumoCont"
          resumoContDiv = document.createElement('div');
          resumoContDiv.classList.add('resumoCont');
          document.body.appendChild(resumoContDiv);
        }

        // Create the boxCerv div element with class "boxCerv"
        const boxCervDiv = document.createElement('div');
        boxCervDiv.classList.add('boxCerv');

        // Create the infoGeral div element with classes "infoGeral" and "lista"
        const infoGeralDiv = document.createElement('div');
        infoGeralDiv.classList.add('infoGeral', 'lista');

        const clientData = [
          { label: 'Id:', value: client.id },
          { label: 'CNPJ:', value: client.cnpj },
          { label: 'Razão Social:', value: client.razao },
          { label: 'Nome Fantasia:', value: client.fantasia },
          { label: 'Inscrição Estadual:', value: client.insc_estadual },
          { label: 'Inscrição Municipal:', value: client.incs_municipal },
          { label: 'Email:', value: client.email },
          { label: 'Telefone:\n', value: client.fone },
        ];

       
         //console.log(client.id)

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

        // Create the btnEnd div element with class "btnEnd"
        const btnEndDiv = document.createElement('div');
        btnEndDiv.classList.add('btnEnd');

        // Create the Excluir button with class "excluiEnd"
        const excluiEndButton = document.createElement('button');
        excluiEndButton.classList.add('excluiEnd');
        excluiEndButton.textContent = 'Excluir';
       // excluiEndButton.addEventListener('click', showModal);
        excluiEndButton.addEventListener('click', deleteCliente);
        excluiEndButton.setAttribute('data-client-id', client.id);

        // Create the Editar button with class "btnEnviar" and a link
        const editaEndButton = document.createElement('button');
        editaEndButton.classList.add('btnEnviar', 'editaEnd');
        const link = document.createElement('a');
        link.href = '/editaCliente';
        link.textContent = 'Editar';
        link.setAttribute('data-client-id', client.id);
        editaEndButton.addEventListener('click', editCliente);
        editaEndButton.appendChild(link);


        //console.log(link.dataset.clientId);


        // Append the elements to their respective parents
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


function editCliente(event) {
  const id = event.target.dataset.clientId;
  console.log(id);

  localStorage.setItem('Id', id);
}



function deleteCliente(event) {
  const id = event.target.dataset.clientId;
  //console.log(id);

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



