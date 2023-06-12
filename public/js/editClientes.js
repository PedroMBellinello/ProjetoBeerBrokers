
  //gera o formulario de clientes com base no id recebido 
  window.onload = function formCliente() {

       fetch('/indexClientes')
         .then(response => response.json())
         .then(data => {

           //pega o id do usuario 
           const ID = localStorage.getItem('Id');
        
           //acha o usuario no banco com base no id recebido
           var cliente = data.find(cliente => cliente.id == ID );
    
           if (cliente) {
             // Obtendo as referências para os elementos do formulário
             const cnpjInput = document.getElementById("cnpj");
             const razaoSocialInput = document.getElementById("razao");
             const nomeFantasiaInput = document.querySelector("input[name='fantasia']"); 
             const inscEstadualInput = document.querySelector("input[name='inscEst']");
             const inscMunicipalInput = document.querySelector("input[name='inscMuni']");
             const emailInput = document.querySelector("input[name='email']");
             const telefoneInput = document.querySelector("input[name='fone']");
        
             // Preenchendo os campos do formulário com base nos dados do cliente
             cnpjInput.value = cliente.cnpj;
             razaoSocialInput.value = cliente.razao;
             nomeFantasiaInput.value = cliente.fantasia;
             inscEstadualInput.value = cliente.insc_estadual;
             inscMunicipalInput.value = cliente.incs_municipal;
             emailInput.value = cliente.email;
             telefoneInput.value = cliente.fone;
           }

         });

  };

// recupera o id do cliente para update 
  const ID = localStorage.getItem('Id');

  //atualiza o cliente com base no id recebido 
  function updateCliente() {

      //pega o token de auth     
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

      //pega o id do cliente 
      const ID = localStorage.getItem('Id');

      // Obter os valores dos campos de entrada
      const cnpj = document.getElementsByName("cnpj")[0].value;
      const razao = document.getElementsByName("razao")[0].value;
      const fantasia = document.getElementsByName("fantasia")[0].value;
      const inscEst = document.getElementsByName("inscEst")[0].value;
      const inscMuni = document.getElementsByName("inscMuni")[0].value;
      const email = document.getElementsByName("email")[0].value;
      const fone = document.getElementsByName("fone")[0].value;

      // Criar um objeto com os valores
      const data = {
        cnpj: cnpj,
        razao: razao,
        fantasia: fantasia,
        insc_estadual: inscEst,
        incs_municipal: inscMuni,
        email: email,
        fone: fone,
      };

      // Enviar os dados para a função em PHP
      fetch(`/api/updateCliente/update/${ID}`, {
        method: 'PUT',
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

            let telaPreta = document.getElementById("telaPreta");
            telaPreta.classList.remove("open")

           window.location.href = '/listaCliente';
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
          window.location.reload();
          });
        }
      });

        return false;

  }