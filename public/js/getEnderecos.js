

window.onload = function gerListaEnderecos() {
    const clienteIdSelecionado = localStorage.getItem('clienteId');
  
    fetch(`/indexEndereco/${clienteIdSelecionado}`)
      .then(response => response.json())
      .then(data => {
        const sectionResumo = document.querySelector('.resumo');

        console.log(data)
        data.forEach(endereco => {
         

         const resumoContDiv = document.createElement('div');
        resumoContDiv.classList.add('resumoCont');
  
          const boxCervDiv = document.createElement('div');
          boxCervDiv.classList.add('boxCerv');
  
          const infoGeralDiv = document.createElement('div');
          infoGeralDiv.classList.add('infoGeral', 'lista');
  
          const enderecoData = [
       //     { label: 'Nome do endereço:', value: endereco.nome },
            { label: 'CEP:', value: endereco.cep.replace(/^(\d{5})(\d{3})$/, '$1-$2') },
            { label: 'Rua:', value: endereco.endereco },
            { label: 'Número:', value: endereco.numero },
            { label: 'Bairro:', value: endereco.bairro },
            { label: 'Cidade:', value: endereco.cidade },
            { label: 'Estado:', value: endereco.uf },
            { label: 'Complemento:', value: endereco.complemento },

          ];
  
          enderecoData.forEach(data => {
            const paragraph = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = data.label;
            const span = document.createElement('span');
            span.textContent = data.value;
            paragraph.appendChild(strong);
            paragraph.appendChild(span);
            infoGeralDiv.appendChild(paragraph);
          });
  
          const btnEndDiv = document.createElement('div');
          btnEndDiv.classList.add('btnEnd');
  
          const editaEndButton = document.createElement('button');
          editaEndButton.classList.add('btnEnviar', 'editaEnd');
          editaEndButton.textContent = 'Editar';
          editaEndButton.addEventListener('click', editEndereco);
          editaEndButton.setAttribute('data-endereco-id', endereco.id);

          const excluiEndButton = document.createElement('button');
          excluiEndButton.classList.add('excluiEnd');
          excluiEndButton.textContent = 'Excluir';
          excluiEndButton.addEventListener('click', deleteEndereco);
          excluiEndButton.setAttribute('data-endereco-id', endereco.id);
  

          btnEndDiv.appendChild(editaEndButton);
          btnEndDiv.appendChild(excluiEndButton);
  
          boxCervDiv.appendChild(infoGeralDiv);
          resumoContDiv.appendChild(boxCervDiv);
          resumoContDiv.appendChild(btnEndDiv);
  
           document.body.appendChild(resumoContDiv);

          sectionResumo.appendChild(resumoContDiv);

        });
      });
  };


  function editEndereco(event) {
    const enderecoId = event.target.getAttribute('data-endereco-id');
    console.log(enderecoId)
    localStorage.setItem('enderecoId', enderecoId);

    const clienteIdSelecionado = localStorage.getItem('clienteId');
    localStorage.setItem('clienteIdSelecionado', clienteIdSelecionado); 
    window.location.href ="/editaEndereco"

    // Lógica para editar o endereço com o ID correspondente
  }



  
  
      //deleta o cliente
      function deleteEndereco(event) {

        
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const enderecoId = event.target.getAttribute('data-endereco-id');


        console.log(enderecoId)

        fetch(`/deleteEndereco/delete/${enderecoId}`, {
          method: 'DELETE',
          'X-CSRF-TOKEN': csrfToken
        })
          .then(response => {
            if (response.status === 200) {
              alert("Endereço excluído com sucesso!");
              window.location.reload();
            } else if (response.status === 500) {
              alert("Erro ao excluir o Endereço.");
            } else if (response.status === 400) {
              alert("Erro ao excluir o Endereço. o mesmo esta vinculado a um contato favor verificar");
            }
            return response.json();
          })
          .then(data => {
            // Faça algo com a resposta do servidor, se necessário
          });

   }
  
  