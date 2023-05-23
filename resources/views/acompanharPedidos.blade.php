@extends('adminlte::page')

@section('title', 'Acompanhar pedidos')

@section('css')
   <link href="{{ asset('css/login.css') }}" rel="stylesheet">
   <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
   <link href="{{ asset('css/prodAdicionado.css') }}" rel="stylesheet">
   <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
   <link href="{{ asset('css/formaPgto.css') }}" rel="stylesheet">
   <link href="{{ asset('css/meusPed.css') }}" rel="stylesheet">
   <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
@stop

<link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">


@section('content')


<section class="meusPedCont">
  <p>MEUS PEDIDOS</p>
  <div class="meusPedContainer">
    <div class="flexPedidos">
      <div class="numPedContainer">
        <p class="numPed" >Nº do pedido: <strong id="numPed">52477370</strong></p>
      </div>
      <div class="statusDet">
        <p>Status: <span>Faturado</span></p>
      </div>
      </div>
      <button class="btnEnvia btnCinza" onclick="getDados_Pedido()">DETALHES DO PEDIDO</button>
    </div>
    

@stop




@section('js')
  <script src="{{ asset('js/geral.js') }}" defer></script>
  <script src="{{ asset('js/processaPed.js') }}" defer></script>

@stop