// Salvar o estado do checkbox e o campo do email em cookies
    function salvaDados(checked) {
          //Se o checkbox estiver marcado seta o email e senha nos cockies caso nao limpa os cockies
        if (checked) {
          //pega os inputs email e senha e salva nos cockies
          var emailInput = document.getElementById("email");
          var passowrdInput = document.getElementById("senha");
          //salva o valor dos inputs
          let emailSalvo = emailInput.value;
          let senhaSalvo = passowrdInput.value;
          //salva nos cockies o email e senha
          Cookies.set("senhaSalvo", senhaSalvo);
          Cookies.set("emailSalvo", emailSalvo);
        } else {
          //Remove dos cockies o email e senha
          Cookies.remove("emailSalvo");
          Cookies.remove("senhaSalvo");
        }
    }
    
    
//Ao carregar a pagina verifica se existem dados savlos para login e senha nos cockies caso existam auto preenche os inputs
    window.addEventListener("DOMContentLoaded", (event) => {
        //Pega os cockies de email e senha 
        var emailSalvo = Cookies.get("emailSalvo");
        var senhaSalvo = Cookies.get("senhaSalvo");
        //seleciona o checkbox ao carregar a pagina
        var checkbox = document.getElementById("remember");
      
        if (emailSalvo) {
          //Pega os inputs de emaile  senha
          var emailInput = document.getElementById("email");
          var passowrdInput = document.getElementById("senha");
          //Define o campo de email e senha com base no cockie
          emailInput.value = emailSalvo;
          passowrdInput.value = senhaSalvo
          //seta o checkbox como marcado caso o usuario salve dados no lembrar-me
          checkbox.checked = true;
        }
    });
  

      