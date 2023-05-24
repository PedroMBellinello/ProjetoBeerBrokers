

  //obtem os clientes do usuario logado no banco
  function obterClientes() {
    fetch('/indexClientes')
    .then(response => response.json())
    .then(data => {

      const elementoSelect = document.getElementById('nomeClientes');
      elementoSelect.innerHTML = '';
    
      if (data.length === 0) {
        const optionPadrao = document.createElement('option');
        optionPadrao.value = '';
        optionPadrao.textContent = 'Clientes...';
        elementoSelect.appendChild(optionPadrao);
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
  obterClientes();


 //pega o id do cliente e salva
document.getElementById('btnClientes').addEventListener('click', function() {
  const elementoSelect = document.getElementById('nomeClientes');
  const idCliente = elementoSelect.value;

  var meuValor = idCliente ;
  localStorage.setItem('meuValor', meuValor);
 
});




