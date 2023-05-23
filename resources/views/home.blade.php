@extends('adminlte::page')

@section('title', 'Cadastrar Novo Pedido')


@section('css')
  <link href="{{ asset('css/login.css') }}" rel="stylesheet">
  <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
  <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
@stop

<link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">


@section('content')


  <section class="cadPed">
    <p class="txt">CADASTRE UM NOVO PEDIDO</p>
      <div class="containerBTN">
        {{-- <a href="/listaCliente">
          <button class="btnEnviar">LISTA DE CLIENTES</button>
        </a> --}}
        <a href="/cliExiste">
          <button class="btnEnviar"> CLIENTE EXISTE </button>
        </a> 
        <a href="/cadastrarCliente">
          <button class="btnEnviar"> NOVO CLIENTE </button>
        </a>
      </div>
  </section>



@stop



@section('js')
    
@stop