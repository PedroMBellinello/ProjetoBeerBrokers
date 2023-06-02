





function CriaEndContato() {

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


    const clienteIdSelecionado = localStorage.getItem('clienteId');
    console.log(clienteIdSelecionado)
        var cep = document.getElementsByName('cep')[0].value;
        var endereco = document.getElementsByName('rua')[0].value;
        var numero = document.getElementsByName('numero')[0].value;
        var complemento = document.getElementsByName('complemento')[0].value;
        var bairro = document.getElementsByName('bairro')[0].value;
        var cidade = document.getElementsByName('cidade')[0].value;
        var uf = document.getElementsByName('uf')[0].value;
        // var nomeContato = document.getElementsByName('nome_responsavel')[0].value;
        // var telefoneContato = document.getElementsByName('telefone_responsavel')[0].value;
        // var emailContato = document.getElementsByName('email_responsavel')[0].value;
      
      
        var data = {
          clienteID: clienteIdSelecionado,
          cep: cep,
          endereco: endereco,
          numero: numero,
          complemento: complemento,
          bairro: bairro,
          cidade: cidade,
          uf: uf,
        //   clienteId: clienteIdSelecionado,
        //   nome_contato: nomeContato,
        //   fone: telefoneContato,
        //   email: emailContato,
        };

         // Enviar os dados para a função em PHP
  fetch(`/criaEnderecoContato/${clienteIdSelecionado}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify(data)
  })
    .then(response => {

      if (response.status === 200) {
        alert("Cliente cadastrado com sucesso!");
       // window.location.reload();
        window.location.href = '/listaCliente';
      } else if (response.status === 500) {
        
        alert("Erro ao cadastrar o cliente. Verifique todos os campos do formulário.");
      }
      return response.json();
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  
    return false;
        
}
