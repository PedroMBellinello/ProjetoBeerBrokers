@extends('adminlte::page')

@section('title', 'Acompanhar pedidos')

  {{-- Imports --}}
  <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">

@section('css')
   <link href="{{ asset('css/login.css') }}" rel="stylesheet">
   <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
   <link href="{{ asset('css/prodAdicionado.css') }}" rel="stylesheet">
   <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
   <link href="{{ asset('css/formaPgto.css') }}" rel="stylesheet">
   <link href="{{ asset('css/meusPed.css') }}" rel="stylesheet">
   <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
@stop

{{--------}}


@section('content')

  <section class="meusPedCont">
    <p>MEUS PEDIDOS</p>
      {{-- <div class="meusPedContainer">
        <div class="flexPedidos">
          <div class="numPedContainer">
            <p class="numPed" >Nº do pedido: <strong id="numPed"></strong></p>
          </div>
          <div class="statusDet">
            <p>Status: <span>Faturado</span></p>
          </div>
        </div>
          <button class="btnEnvia btnCinza" onclick="getpedido()">DETALHES DO PEDIDO</button>
      </div> --}}
    <div id="container"></div>

    {{-- popUp erro --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpError" >
      <h1 style="color: red">ATENÇÃO!</h1>
      <p>Nenhum pedido encontrado!</p>
      <div class="btnContainer2">
        <button class="confirmError">Ok</button> 
      </div>
    </div>

  </section>    

@stop
 

{{-- Imports --}}
@section('js')
  <script src="{{ asset('js/geral.js') }}" defer></script>
  <script src="{{ asset('js/getPedidos.js') }}" defer></script>
@stop
{{-------}}