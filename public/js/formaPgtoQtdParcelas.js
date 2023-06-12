function limpaFormaPgtoEqtd() {
     var formaPgtoSelecionada = localStorage.getItem('formaPgtoSelecionada');
     var parcelasSelecionadas = localStorage.getItem('parcelasSelecionadas');

     localStorage.removeItem('formaPgtoSelecionada', formaPgtoSelecionada);
     localStorage.removeItem('parcelasSelecionadas', parcelasSelecionadas);

  }
window.onload = limpaFormaPgtoEqtd;
 //salva o meotodo de pagamento escolhido
 function obterMetodo() {
    var formaPgtoSelect = document.getElementById("formaPgto");
    // Obter o valor selecionado da forma de pagamento
    var formaPgtoSelecionada = formaPgtoSelect.value;
    // Salvar o valor em localStorage
    localStorage.setItem('formaPgtoSelecionada', formaPgtoSelecionada);
  }
 

 //salva a quantidade de parcelas  escolhido
 function obterParcela() {
    var parcelasSelect = document.getElementById("parcelas");
    // Obter o valor selecionado de parcelas
    var parcelasSelecionadas = parcelasSelect.value;

    localStorage.setItem('parcelasSelecionadas', parcelasSelecionadas);
 }
 
 var urlParams = new URLSearchParams(window.location.search);
 var opcoesSelecionadas = JSON.parse(decodeURIComponent(urlParams.get('opcoesSelecionadas')));

 //redireciona para a tela de finalizar pedido com os dados do produto vinculados a url

 function confirmaDadosPedido() {
    var formaPgtoSelecionada = localStorage.getItem('formaPgtoSelecionada');
    var parcelasSelecionadas = localStorage.getItem('parcelasSelecionadas');

    if (!formaPgtoSelecionada || !parcelasSelecionadas) {
        scrollToTop();
        let popUpExcluirErro = document.getElementById("popUpError");
        popUpExcluirErro.style.display = "block";
        let telaPreta = document.getElementById("telaPreta");
        telaPreta.classList.add("open")
      
        let deletarBtn = popUpExcluirErro.querySelector(".confirm");
        deletarBtn.addEventListener("click", function() {
          popUpExcluirErro.style.display = "none";
          let telaPreta = document.getElementById("telaPreta");
          telaPreta.classList.remove("open")
        });
    } else {
      window.location.href = '/finalizarPedido?opcoesSelecionadas=' + encodeURIComponent(JSON.stringify(opcoesSelecionadas));
    }
 }