@extends('adminlte::page')

@section('title', 'Cadastrar Pedido')

@section('css')
  <link href="{{ asset('css/login.css') }}" rel="stylesheet">
  <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
  <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
@stop

  <script src="{{ asset('js/geral.js') }}" defer></script>
  
  <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">

@section('content')

<body>

    <section class="cadPed">
      <p class="txt">CADASTRE UM NOVO PEDIDO</p>
      <a href="/cliExiste">
      <div class="containerBTN">
        <button class="btnEnviar">
          CLIENTE EXISTE
          </button>
        </a> 
        <a href="/cadastrarCliente">
        <button class="btnEnviar">
         NOVO CLIENTE
        </button></a>
      </div>
    </section>
  </div>
</body>
</html>

@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')

@stop