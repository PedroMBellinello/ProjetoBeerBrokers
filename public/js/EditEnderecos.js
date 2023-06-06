

 


//recupera as informações do endereco para o form de edição
  window.onload = function editEndContato() {
    const clienteIdSelecionado = localStorage.getItem('clienteId');
    const enderecoId = localStorage.getItem('enderecoId');
  
    fetch(`/getEnderecos/${clienteIdSelecionado}`)
      .then(response => response.json())
      .then(data => {
  

        const endereco = data.find(endereco => endereco.id == enderecoId);

        //salva o id do endereco no storage 
        const recuperaEndId = endereco.id
       // console.log(recuperaEndId)
        localStorage.setItem('recuperaEndId', recuperaEndId);


        if (endereco) {
            const cepInput = document.getElementById('cep');
            const ruaInput = document.getElementById('rua');
            const numeroInput = document.getElementById('numero');
            const complementoInput = document.getElementById('complemento');
            const bairroInput = document.getElementById('bairro');
            const cidadeInput = document.getElementById('cidade');
            const ufInput = document.getElementById('uf');

    
            cepInput.value = endereco.cep;
            ruaInput.value = endereco.endereco;
            numeroInput.value = endereco.numero;
            complementoInput.value = endereco.complemento;
            bairroInput.value = endereco.bairro;
            cidadeInput.value = endereco.cidade;
            ufInput.value = endereco.uf;
    
            const resumoContDiv = document.createElement('div');
            resumoContDiv.classList.add('resumoCont');
    
        
          } else {
            console.log('Endereço não encontrado');
          }
        });

  };



  function updateEndereco() {

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const recuperaEndId = localStorage.getItem('recuperaEndId');



    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const numeroInput = document.getElementById('numero');
    const complementoInput = document.getElementById('complemento');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const ufInput = document.getElementById('uf');
  

   // console.log(recuperaEndId)
    const data = {
      cep: cepInput.value,
      endereco: ruaInput.value,
      numero: numeroInput.value,
      complemento: complementoInput.value,
      bairro: bairroInput.value,
      cidade: cidadeInput.value,
      uf: ufInput.value
    };
  
    fetch(`/updateEndereco/update/${recuperaEndId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      },
      body: JSON.stringify(data)
    })
     // .then(response => response.json())
      .then(response => {
        if (response.status == 200) {
          scrollToTop();
          let popUpSuccess = document.getElementById("popUpSucess");
          popUpSuccess.style.display = "block";
  
          let okButton = popUpSuccess.querySelector(".confirm");
          okButton.addEventListener("click", function() {
          window.location.href = '/listaEndereco';
          popUpSuccess.style.display = "none";
          });
        } else if (response.status == 500) {  
          scrollToTop();
          let popUpError = document.getElementById("popUpError");
          popUpError.style.display = "block";
  
          let okButton = popUpError.querySelector(".confirmError");
          okButton.addEventListener("click", function() {
          popUpError.style.display = "none";
          window.location.reload();
          });
        }
      });

      return false;
  }
  
  