


function enviarFormulario() {
  
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  // Obter os valores dos campos de entrada
  const cnpj = document.getElementsByName("cnpj")[0].value;
  const razao = document.getElementsByName("razao")[0].value;
  const fantasia = document.getElementsByName("fantasia")[0].value;
  const inscEst = document.getElementsByName("inscEst")[0].value;
  const inscMuni = document.getElementsByName("inscMuni")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const fone = document.getElementsByName("fone")[0].value;
  const cep = document.getElementsByName("cep")[0].value;
  const rua = document.getElementsByName("rua")[0].value;
  const numero = document.getElementsByName("numero")[0].value;
  const complemento = document.getElementsByName("complemento")[0].value;
  const bairro = document.getElementsByName("bairro")[0].value;
  const cidade = document.getElementsByName("cidade")[0].value;
  const uf = document.getElementsByName("uf")[0].value;
  const nomeResponsavel = document.getElementsByName("nome_responsavel")[0].value;
  const telefoneResponsavel = document.getElementsByName("telefone_responsavel")[0].value;
  const emailResponsavel = document.getElementsByName("email_responsavel")[0].value;


  // Criar um objeto com os valores
  const data = {
    cnpj: cnpj,
    razao: razao,
    fantasia: fantasia,
    insc_estadual: inscEst,
    incs_municipal: inscMuni,
    email: email,
    fone: fone,
    cep: cep,
    endereco: rua,
    numero: numero,
    complemento: complemento,
    bairro: bairro,
    cidade: cidade,
    uf: uf,
    nome_contato: nomeResponsavel,
    telefone_contato: telefoneResponsavel,
    email_contato: emailResponsavel
  };

  // Enviar os dados para a função em PHP
  //debugger
  fetch('/criaClienteEndereco', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    // Manipular a resposta da função em PHP, se necessário
    console.log(result);
    //alert("Cliente Cadastrado com sucesso!!")
  })
  .catch(error => {
    // Lidar com erros, se houver
    console.error('Erro:', error);
  });


}


