//consulta o cep digitado no input na api via cep e preenche os inputs com ele
function getEnderecoViaCep() {
    //obtemo endereci pelo valor digitado no input do cep
    const cepInput = document.getElementsByName("cep")[0];
    cepInput.addEventListener("blur", function() {
    const cep = cepInput.value
    //formata o cep para o padrão 
    const formattedCep = cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
    cepInput.value = formattedCep;
    //url consulta cep
    var urlcep = `https://viacep.com.br/ws/${cep}/json/`;
    //consulta o cep com o valor recebido do input
    fetch(urlcep)
    .then(response => response.json())
    .then(data => {
      //monta o objeto com os dados do endereco
      const endereco = {
        rua: data.logradouro,
        bairro: data.bairro, 
        cidade: data.localidade,
        estado: data.uf
      };
      //separa os valores do objeto endereco para preencher o html
      let rua = endereco.rua 
      let bairro = endereco.bairro 
      let cidade = endereco.cidade 
      let estado = endereco.estado

      //pega os inputs no html
      const ruaInput = document.querySelector("input[name='rua']");
      const bairroInput = document.querySelector("input[name='bairro']");
      const cidadeInput = document.querySelector("input[name='cidade']");
      const estadoInput = document.querySelector("input[name='uf']");

      //define o valor dos inputs
      ruaInput.value = rua;
      bairroInput.value = bairro;
      cidadeInput.value = cidade;
      estadoInput.value = estado;

      //desabilita o input com o endereco correto retornado pela api
      ruaInput.disabled = true;
      bairroInput.disabled = true;
      cidadeInput.disabled = true;
      estadoInput.disabled = true;

      //retorna o background do input para branco caso o cep seja correto
      cepInput.style.backgroundColor = "white";

    })
    .catch(error => {
      //seleciona os inputs no html
      var cepInput = document.getElementById("cep");
      const ruaInput = document.querySelector("input[name='rua']");
      const bairroInput = document.querySelector("input[name='bairro']");
      const cidadeInput = document.querySelector("input[name='cidade']");
      const estadoInput = document.querySelector("input[name='uf']");

      //limpa os  inputs caso o cep digitado seja o errado
      ruaInput.value = '';
      bairroInput.value = '';
      cidadeInput.value = '';
      estadoInput.value = ''; 
      //cepInput.ariaPlaceholder = "";
      //altera o background do input para vermelho para simbolizar o erro 
      cepInput.style.backgroundColor = "rgba(197, 84, 84, 0.5)";
    });

  });

}


//cadastrar o cliente endereço e contato 
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


  const regexNumero = /^\d+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verificar se os campos de fone e telefoneResponsavel contêm apenas números
  const isFoneValid = regexNumero.test(fone);
  const isTelefoneResponsavelValid = regexNumero.test(telefoneResponsavel);

  if (!isFoneValid || !isTelefoneResponsavelValid) {
    scrollToTop()
    let popUpError = document.getElementById("popUpError");
    popUpError.style.display = "block";

    //adiciona o fundo preto
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.classList.add("open")
    
    let okButton = popUpError.querySelector(".cancela");
    okButton.addEventListener("click", function() {
    popUpError.style.display = "none";

    //remove o fundo preto
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.classList.remove("open")
    
    });
    return false; // Impedir o envio do formulário
  }

  if (!regexEmail.test(email)) {
    scrollToTop()
    let popUpError = document.getElementById("popUpError");
    popUpError.style.display = "block";

    //adiciona o fundo preto
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.classList.add("open")
    
    let okButton = popUpError.querySelector(".cancela");
    okButton.addEventListener("click", function() {
    popUpError.style.display = "none";

    //remove o fundo preto
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.classList.remove("open")
    
    });
    return false; // Impedir o envio do formulário
  }
  


  // Criar um objeto com os valores do input para enviar para o php
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
    fone: telefoneResponsavel,
    email_contato: emailResponsavel
  };



  // Enviar os dados para a função em PHP
  fetch('/criaClienteEndereco', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status === 200) {
        scrollToTop()
        let popUpSuccess = document.getElementById("popUpSucess");
        popUpSuccess.style.display = "block";

       //adiciona o fundo preto
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.add("open")

        let okButton = popUpSuccess.querySelector(".confirm");
        okButton.addEventListener("click", function() {

           //remove o fundo preto
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.remove("open")
          window.location.href = "/cliExiste";
        });
      } else if (response.status === 500) {
        scrollToTop()
        let popUpError = document.getElementById("popUpError");
        popUpError.style.display = "block";

        //adiciona o fundo preto
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.add("open")
        
        let okButton = popUpError.querySelector(".cancela");
        okButton.addEventListener("click", function() {
        popUpError.style.display = "none";

        //remove o fundo preto
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.remove("open")
        
        });
      }    
      return response.json();
    })
    .catch(error => {
    });
  
  return false;
  

}


function scrollToTop() {
  var currentPosition = window.scrollY || window.pageYOffset;
  var targetPosition = 0;
  var startTime = null;

  function scrollToTop(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    var progress = timestamp - startTime;
    var easeInOutCubic = progress < 500 ? progress ** 3 / (500 ** 3) : 1;
    var currentPosition = window.scrollY || window.pageYOffset;
    var distance = currentPosition - targetPosition;
    var newPosition = currentPosition - distance * easeInOutCubic;
    window.scrollTo(0, newPosition);
    if (progress < 500) {
      requestAnimationFrame(scrollToTop);
    }
  }
  requestAnimationFrame(scrollToTop);
}
