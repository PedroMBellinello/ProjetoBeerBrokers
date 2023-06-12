

//Cria endereço do cliente
function CriaEndereco() {
    //token de auth 
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


    const clienteIdSelecionado = localStorage.getItem('clienteId');
    //console.log(clienteIdSelecionado)
        var cep = document.getElementsByName('cep')[0].value;
        var endereco = document.getElementsByName('rua')[0].value;
        var numero = document.getElementsByName('numero')[0].value;
        var complemento = document.getElementsByName('complemento')[0].value;
        var bairro = document.getElementsByName('bairro')[0].value;
        var cidade = document.getElementsByName('cidade')[0].value;
        var uf = document.getElementsByName('uf')[0].value;
      
        var data = {
          clienteID: clienteIdSelecionado,
          cep: cep,
          endereco: endereco,
          numero: numero,
          complemento: complemento,
          bairro: bairro,
          cidade: cidade,
          uf: uf,
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

      if (response.status == 200) {
        scrollToTop();
        let popUpSuccess = document.getElementById("popUpSucess");
        popUpSuccess.style.display = "block";

        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.add("open")

        let okButton = popUpSuccess.querySelector(".confirm");
        okButton.addEventListener("click", function() {
        window.location.href = '/listaEndereco';

        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.remove("open")

        popUpSuccess.style.display = "none";

        });
      } else if (response.status == 500) {
        scrollToTop();
        let popUpError = document.getElementById("popUpError");
        popUpError.style.display = "block";
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.add("open")

        let okButton = popUpError.querySelector(".confirmError");

        okButton.addEventListener("click", function() {
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.remove("open")
        popUpError.style.display = "none";
        });
      }
      return response.json();
    })
    .then(result => {
     //console.log(result);
    })
    .catch(error => {
      let popUpError = document.getElementById("popUpError");
      popUpError.style.display = "block";
      let telaPreta = document.getElementById("telaPreta");
      telaPreta.classList.add("open")

      let okButton = popUpError.querySelector(".confirmError");

      okButton.addEventListener("click", function() {
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.remove("open")
      popUpError.style.display = "none";
      });
     // console.error('Erro:', error);
    });
  
    return false;
        
}
