
<link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">

@extends('adminlte::page')

@section('title', 'Forma de Pagamento')

@section('css')
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">
    <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
    <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
    <link href="{{ asset('css/formaPgto.css') }}" rel="stylesheet">
    <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
@stop



@section('content')
    <section class="pgtoCont">
        <p>PAGAMENTO</p>
        <div class="cadPed">
          <p class="txt">SELECIONE A FORMA DE PAGAMENTO</p>
          <div class="containerBTN">
            <select class="escolhaPgto" name="" id="formaPgto" onchange="obterMetodo()">
              {{-- <option selected="" disabled="" hidden="" value="" disabled>Selecione a forma de pagamento Cartão, Boleto, Pix...</option> --}}
              <option value="3">Cartão</option>
              <option value="4">Boleto</option>
              <option value="5">Pix</option>
            </select>
          </div>
          <div class="cartao">
            <label for="">Parcelas</label>
            <select class="escolhaPgto parcela" name="" id="parcelas" onchange="obterParcela()">
              {{-- <option selected="" disabled="" hidden="" value="" disabled>Pagamento à vista</option> --}}
              <option value="1">Pagamento à vista</option>
              <option value="2">2x sem juros</option>
              <option value="3">3x sem juros</option>
              <option value="4">4x sem juros</option>
              <option value="5">5x sem juros</option>
              <option value="6">6x sem juros</option>
            </select>
          </div>
        </div>
        <button class="btnEnviar" onclick="confirmaDadosPedido()" >AVANÇAR</button>
      </section>

@stop




@section('js')
    <script src="{{ asset('js/geral.js') }}" defer></script>
    <script>
      //salva o meotodo de pagamento escolhido
      function obterMetodo() {
        var formaPgtoSelect = document.getElementById("formaPgto");
        // Obter o valor selecionado da forma de pagamento
        var formaPgtoSelecionada = formaPgtoSelect.value;
    
 //       console.log(formaPgtoSelecionada)
        // Salvar o valor em localStorage
        localStorage.setItem('formaPgtoSelecionada', formaPgtoSelecionada);
       }
      
    
      //salva a quantidade de parcelas  escolhido
      function obterParcela() {
         var parcelasSelect = document.getElementById("parcelas");
         // Obter o valor selecionado de parcelas
         var parcelasSelecionadas = parcelasSelect.value;
//        console.log(parcelasSelecionadas)

         localStorage.setItem('parcelasSelecionadas', parcelasSelecionadas);
      }
      
      var urlParams = new URLSearchParams(window.location.search);
      var opcoesSelecionadas = JSON.parse(decodeURIComponent(urlParams.get('opcoesSelecionadas')));

      //redireciona para a tela de finalizar pedido com os dados do produto vinculados a url
      function confirmaDadosPedido() {
        window.location.href = '/finalizarPedido?opcoesSelecionadas=' + encodeURIComponent(JSON.stringify(opcoesSelecionadas));
      }
      // Remover 'formaPgtoSelecionada' do localStorage
      localStorage.removeItem('formaPgtoSelecionada');

      // Remover 'parcelasSelecionadas' do localStorage
      localStorage.removeItem('parcelasSelecionadas');
    </script>
@stop


