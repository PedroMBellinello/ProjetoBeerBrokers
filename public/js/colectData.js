

//Clientes

function obterClientes() {
    fetch('/indexClientes')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    
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





document.getElementById('btnClientes').addEventListener('click', function() {
  const elementoSelect = document.getElementById('nomeClientes');
  const idCliente = elementoSelect.value;
  const razaoCliente = elementoSelect.options[elementoSelect.selectedIndex].text;

//  console.log('ID:', idCliente);
 // console.log('Razão :', razaoCliente);
  // Redirecionar para uma rota nomeada
  var meuValor = idCliente ;
  localStorage.setItem('meuValor', meuValor);
 
});

