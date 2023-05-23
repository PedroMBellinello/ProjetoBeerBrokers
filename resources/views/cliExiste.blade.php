@php
@endphp

@csrf
@extends('adminlte::page')

@section('title', 'Meus clientes ')



@section('css')
    <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">
    <link href="{{ asset('css/cadastroPed.css') }}" rel="stylesheet">
@stop





@section('content')



  <p class="txt">CADASTRE UM NOVO PEDIDO</p>
  <section class="cadPed">
      <p class="txt mt">SELECIONE O CLIENTE</p>
      <div class="selCli">
        <select name="nomeClientes" id="nomeClientes">
          <option value="" selected="" disabled="" hidden="">Clientes...</option>
        </select> 
      </div>
      </section>
      <div class="containerBtnCliExis">
        {{-- <a href="/addProd" id="btnClientes"> --}}
          <a href="prodAdicionado" id="btnClientes">
          <div class="btnEnviar cliExisBtn">Avançar</div>
        </a>
      </div>


@stop


  {{-- Scripts JS --}}
@section('js')
    <script src="{{ asset('js/geral.js') }}" defer></script>
    <script src="{{ asset('js/colectData.js') }}" defer></script>
@stop



