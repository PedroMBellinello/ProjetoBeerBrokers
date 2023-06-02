
 
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
           elementoSelect.innerHTML = '';
           // Opção padrão "Selecione os clientes"
               const optionPadrao = document.createElement('option');
               optionPadrao.value = '';
               optionPadrao.textContent = 'Selecione o cliente...';
               elementoSelect.appendChild(optionPadrao);
               
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
document.getElementById('btnClientes').addEventListener('click', function() {
  const elementoSelect = document.getElementById('nomeClientes');
  const idCliente = elementoSelect.value;

  var meuValor = idCliente ;
  localStorage.setItem('meuValor', meuValor);

});

  
//pega o id do endereço e salva
document.getElementById('btnClientes').addEventListener('click', function() {
  const selectEndereco = document.getElementById('enderecoCliente');
  const enderecoId = selectEndereco.value;
  
  var meuValor1 = enderecoId ;
  localStorage.setItem('meuValor1', meuValor1);
  

});




