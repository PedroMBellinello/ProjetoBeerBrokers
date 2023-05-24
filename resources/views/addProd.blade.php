

{{-- NÃO UTILIZADA  --}}

@extends('adminlte::page')


@section('title', 'Add Produtos ')


@section('css')
   <link href="{{ asset('css/login.css') }}" rel="stylesheet">
   <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
   <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
   <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
   <link href="{{ asset('css/cadastroPed.css') }}" rel="stylesheet">
@stop

  <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">




@section('content')

  <section class="login novoPed">
    <p>CADASTRE UM NOVO PEDIDO</p>
    <button class="btnEnviar btnFlex" type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
        <g id="Grupo_51" data-name="Grupo 51" transform="translate(-160.228 -156.363)">
          <text id="_" data-name="+" transform="translate(166.92 173.645)" fill="#fff" font-size="16.522" font-family="Montserrat-Medium, Montserrat" font-weight="500">
            <tspan x="0" y="0">+</tspan>
          </text>
            <circle id="Elipse_4" data-name="Elipse 4" cx="11" cy="11" r="11" transform="translate(160.728 156.863)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
        </g>
      </svg>
    Adicionar produto
     </button>
      <div class="escolheProd">
        <div class="modalPremium">
          <img src="https://recursos.clubedomalte.com.br/i/_2023/_PH/fecharBeerBrokers.png" alt="">
        </div>
        <div class="divFlex">
          <label for="">Rótulo*</label>
          <input type="text">
        </div>
        <div class="divFlexInBtn">
          <div class="quantCont">
            <label class="quant" for="">Quantidade*</label>
           <div class="qtd">
              <button class="minus" role="button" tabindex="0">-</button>
              <input id="produto-spot-quantidade selected-quantity" class="input-spot-quantidade num" value="1" min="1"" type="text" role="form" tabindex="0" />
              <button class="plus" role="button" tabindex="0">+</button>
           </div>
          </div>
          <div class="btnCont">
            <button class="btnEnviar">OK</button>
          </div>
        </div>
      </div>

      <div class="popUpAtencao">
        <img src="https://recursos.clubedomalte.com.br/i/_2023/_PH/fecharBeerBrokers.png" alt="">
        <h1>ATENÇÃO!</h1>
        <p>Preencha todos os campos para cadastrar um novo cliente.</p>
      </div>
  </section>

@stop



@section('js')
   <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
   <script src="{{ asset('js/geral.js') }}" defer></script>
@stop




