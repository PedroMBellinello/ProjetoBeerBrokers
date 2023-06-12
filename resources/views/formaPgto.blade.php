
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


<span class="telaPreta" id="telaPreta"></span>

@section('content')



    <section class="pgtoCont">
        <p>PAGAMENTO</p>
        <div class="cadPed">
          <p class="txt">SELECIONE A FORMA DE PAGAMENTO</p>
          <div class="containerBTN">
            <select class="escolhaPgto" name="" id="formaPgto" onchange="obterMetodo()">
               <option selected="" disabled="" hidden="" value="" disabled>Selecione a forma de pagamento Cartão, Boleto, Pix...</option> 
              <option value="3">Cartão</option>
              <option value="4">Boleto</option>
              <option value="5">Pix</option>
            </select>
          </div>
          <div class="cartao">
            <label for="">Parcelas</label>
            <select class="escolhaPgto parcela" name="" id="parcelas" onchange="obterParcela()">
              {{-- <option selected="" disabled="" hidden="" value="" disabled>Pagamento à vista</option> --}}
              <option selected="" disabled="" hidden="" value="" disabled>Selecione a quantidade de parcelas.</option> 
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


        <div class="popUpAtencao popUpAtencao2" id="popUpError">
          <h1 style="color: red">ATENÇÃO!</h1>
          <p>Por favor, selecione o método de pagamento e a quantidade de parcelas.</p>
          <div class="btnContainer2">
            <button class="confirm">Ok</button> 
          </div>
        </div>

      </section>

@stop




@section('js')
    <script src="{{ asset('js/geral.js') }}" defer></script>
    <script src="{{ asset('js/formaPgtoQtdParcelas.js') }}" defer></script>


@stop


