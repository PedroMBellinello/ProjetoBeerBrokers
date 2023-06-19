function limpaFormaPgtoEqtd() {
  const idEndereciClienteSelecionado = localStorage.getItem('idEndereciClienteSelecionado');
  const idClienteSelecionado= localStorage.getItem('idClienteSelecionado');
  localStorage.removeItem('idEndereciClienteSelecionado', idEndereciClienteSelecionado);
  localStorage.removeItem('idClienteSelecionado', idClienteSelecionado);
}
window.onload = limpaFormaPgtoEqtd;

 
  //obtem os clientes do usuario logado no banco
     function obterClientes() {
       const elementoSelect = document.getElementById('nomeClientes');
       elementoSelect.addEventListener('change', function() {
           const clienteSelecionado = elementoSelect.value;
           obterEndereco(clienteSelecionado);
       });

       fetch('/indexClientes')
       .then(response => response.json())
       .then(data => {
          //  elementoSelect.innerHTML = '';
          //  // Opção padrão "Selecione os clientes"
          //      const optionPadrao = document.createElement('option');
          //      optionPadrao.value = '';
          //      optionPadrao.textContent = 'Selecione o cliente...';
          //      elementoSelect.appendChild(optionPadrao);
               
           if (data.length === 0) {
              //  const optionPadrao = document.createElement('option');
              //  optionPadrao.value = '';
              //  optionPadrao.textContent = 'Cadastre um cliente para realizar o pedido';
              //  elementoSelect.appendChild(optionPadrao);
           } else {
               data.forEach(cliente => {
                   const option = document.createElement('option');
                   option.value = cliente.id;
                   option.textContent = cliente.razao;
                   elementoSelect.appendChild(option);
               });
           }
       })
       .catch(error => {
           console.error('Erro ao obter os clientes:', error);
       });
   }
   obterClientes()


 ///obtem os enderecos do cliente para a lista 
  function obterEndereco(clienteSelecionado) {
    fetch('/indexEndereco/' + clienteSelecionado )
    .then(response => response.json())
    .then(data => {
     /// console.log(data)
      
      const elementoSelect = document.getElementById('enderecoCliente');
      elementoSelect.innerHTML = '';
      const optionPadrao = document.createElement('option');
      optionPadrao.textContent = 'Selecione o Endereço';
      elementoSelect.appendChild(optionPadrao);
      optionPadrao.disabled = true;
      if (data.length === 0) {
        const optionPadrao = document.createElement('option');
        optionPadrao.value = '';
        optionPadrao.textContent = 'Endereços...';
        elementoSelect.appendChild(optionPadrao);
      } else {
        data.forEach(endereco => {
          const option = document.createElement('option');
          option.value = endereco.id;
          option.textContent = endereco.endereco;
          elementoSelect.appendChild(option);
        });
      }
    })
    .catch(error => {
      console.error('Erro ao obter os enderecos:', error);
    });
  }



 //pega o id do cliente e salva
 document.getElementById('nomeClientes').addEventListener('change', function() {
  const elementoSelect = document.getElementById('nomeClientes');
  const idCliente = elementoSelect.value;

  var idClienteSelecionado= idCliente;
  localStorage.setItem('idClienteSelecionado', idClienteSelecionado);
});

//pega o id do endereço e salva
document.getElementById('enderecoCliente').addEventListener('change', function() {
  const selectEndereco = document.getElementById('enderecoCliente');
  const enderecoId = selectEndereco.value;
  
  var idEndereciClienteSelecionado = enderecoId;
  localStorage.setItem('idEndereciClienteSelecionado', idEndereciClienteSelecionado);
  
});


  
//pega o id do endereço e salva
function getEnderecoCliente() {
   //idClienteSelecionado= id do cliente
   const idEndereciClienteSelecionado = localStorage.getItem('idEndereciClienteSelecionado');
   //idEndereciClienteSelecionado = id do endereco
   const idClienteSelecionado= localStorage.getItem('idClienteSelecionado');


  //verifica se os valores de 
  if (idClienteSelecionado!== null && idClienteSelecionado!== '' && idClienteSelecionado!== undefined && 
       idEndereciClienteSelecionado !== null && idEndereciClienteSelecionado !== '' && idEndereciClienteSelecionado !== undefined) {

       localStorage.setItem('idClienteSelecionado', idClienteSelecionado);
       localStorage.setItem('idEndereciClienteSelecionado', idEndereciClienteSelecionado);
       window.location.href="/prodAdicionado";
    } else {
       let popUpError = document.getElementById("popUpError");
       popUpError.style.display = "block";

       //adiciona o fundo preto
       let telaPreta = document.getElementById("telaPreta");
       telaPreta.classList.add("open")

       let okButton = popUpError.querySelector(".confirmError");
       okButton.addEventListener("click", function() {
       popUpError.style.display = "none";
       //remove o fundo preto
       let telaPreta = document.getElementById("telaPreta");
       telaPreta.classList.remove("open")
       });

    }


}




 