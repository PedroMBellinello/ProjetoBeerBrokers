

window.onload = function gerListaEnderecos() {
    const clienteIdSelecionado = localStorage.getItem('clienteId');
  
    fetch(`/indexEndereco/${clienteIdSelecionado}`)
      .then(response => response.json())
      .then(data => {
        const sectionResumo = document.querySelector('.resumo');

        data.forEach(endereco => {
         

         const resumoContDiv = document.createElement('div');
        resumoContDiv.classList.add('resumoCont');
  
          const boxCervDiv = document.createElement('div');
          boxCervDiv.classList.add('boxCerv');
  
          const infoGeralDiv = document.createElement('div');
          infoGeralDiv.classList.add('infoGeral', 'lista');
  
          const enderecoData = [
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
          excluiEndButton.setAttribute('data-endereco-id', endereco.id);
          excluiEndButton.addEventListener('click', function() {
            const enderecoId = this.getAttribute('data-endereco-id');
            showModal(enderecoId);
          });


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


  //atribui o id do endereco ao cliente para o modal de exclusão
  function showModal(enderecoId) {
    scrollToTop();
    let popUpExcluirEndereco = document.getElementById("popUpExcluir");
    popUpExcluirEndereco.style.display = "block";
    popUpExcluirEndereco.setAttribute('data-endereco-id', enderecoId);

    //adiciona o fundo preto
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.classList.add("open");
  
    let deletarBtn = popUpExcluirEndereco.querySelector(".confirm");
    deletarBtn.addEventListener("click", function() {
      const enderecoID = popUpExcluirEndereco.getAttribute('data-endereco-id');
      deleteEndereco(enderecoID)
      //remove o fundo preto
      let telaPreta = document.getElementById("telaPreta");
      telaPreta.classList.remove("open");
      popUpExcluirEndereco.style.display = "none";
    });
  
    let cancelarBtn = popUpExcluirEndereco.querySelector(".confirmError");
    cancelarBtn.addEventListener("click", function() {
      //remove o fundo preto
      let telaPreta = document.getElementById("telaPreta");
      telaPreta.classList.remove("open");
      popUpExcluirEndereco.style.display = "none";
    });
  }
  

  //pegar o id do cliente para cadastrar o endereço no cliente
  function getIdCliente(){
    const clienteIdSelecionado = localStorage.getItem('clienteId');
    localStorage.setItem('clienteIdSelecionado', clienteIdSelecionado); 
    window.location.href ="/cadastrarEndereco"
  }

 //salva o id do endereço para edição
  function editEndereco(event) {
    const enderecoId = event.target.getAttribute('data-endereco-id');
    localStorage.setItem('enderecoId', enderecoId);
    const clienteIdSelecionado = localStorage.getItem('clienteId');
    localStorage.setItem('clienteIdSelecionado', clienteIdSelecionado); 
    window.location.href ="/editaEndereco"
  }



  
  //deleta o endereco
  function deleteEndereco(enderecoID) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  
    fetch(`/deleteEndereco/delete/${enderecoID}`, {
      method: 'DELETE',
      headers: {
        'X-CSRF-TOKEN': csrfToken
      }
    })
      .then(response => {
        if (response.status === 200) {
          scrollToTop();
          //gera popUp correspondente de sucesso
          let popUpExcluirEndereco = document.getElementById("popUpSucess");
          popUpExcluirEndereco.style.display = "block";

          //adiciona o fundo preto
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.add("open");
        
          let deletarBtn = popUpExcluirEndereco.querySelector(".confirm");
          deletarBtn.addEventListener("click", function() {

            //remove o fundo preto
            let telaPreta = document.getElementById("telaPreta");
            telaPreta.classList.remove("open");

            popUpExcluirEndereco.style.display = "none";
          });
          window.location.reload();
        } else if (response.status === 500) {
          //gera popUp correspondente de erro
          scrollToTop();
          let popUpExcluirErro = document.getElementById("popUpError");
          popUpExcluirErro.style.display = "block";

          //adiciona o fundo preto
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.add("open");
        
          let deletarBtn = popUpExcluirErro.querySelector(".confirm");
          deletarBtn.addEventListener("click", function() {

            //remove o fundo preto
            let telaPreta = document.getElementById("telaPreta");
            telaPreta.classList.remove("open");

            popUpExcluirErro.style.display = "none";
            window.location.reload();
          });
        } else if (response.status === 400) {
          //gera popUp correspondente de erro
          scrollToTop();
          let popUpExcluirErro = document.getElementById("popUpError");
          popUpExcluirErro.style.display = "block";

          //adiciona o fundo preto
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.add("open");

          let deletarBtn = popUpExcluirErro.querySelector(".confirm");
          deletarBtn.addEventListener("click", function() {

            //remove o fundo preto
            let telaPreta = document.getElementById("telaPreta");
            telaPreta.classList.remove("open");

            popUpExcluirErro.style.display = "none";
          });
        //  console.log(error)
          //alert("Erro ao excluir o Endereço. O mesmo está vinculado a um contato, favor verificar.");
        }
        return response.json();
      })
      .then(data => {
      });
  }
  

