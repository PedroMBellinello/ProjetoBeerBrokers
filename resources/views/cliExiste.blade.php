



@csrf

@extends('adminlte::page')

@section('title', 'Meus clientes ')

<link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">

{{---Imports---}}
@section('css')

    <link href="{{ asset('css/cadastroPed.css') }}" rel="stylesheet">
@stop
{{---------}}

<span class="telaPreta" id="telaPreta"></span>

{{---body---}}
@section('content')



  <p class="txt">CADASTRE UM NOVO PEDIDO</p>
  <section class="cadPed" >
    <p class="txt mt">SELECIONE O CLIENTE E ENDEREÇO</p>
    <div class="selCli">
      <select name="nomeClientes" id="nomeClientes">
        <option value="" selected="" disabled="" hidden="" disabled>Clientes...</option>
        
      </select> 
    </div>
    <div class="selCli" style="margin-top: 10px;">
      <select name="enderecoCliente" id="enderecoCliente">
        <option value="" selected="" disabled="" hidden="" disabled>Endereços...</option>
      </select> 
    </div>
    
    <div class="containerBtnCliExis"> 
      {{-- <a href="/prodAdicionado" id="btnClientes" > --}}
        <a  id="btnClientes" >
          <div class="btnEnviar cliExisBtn" onclick="getEnderecioCliente()" >Avançar</div>
        </a>
      </div>

          {{-- pupUp Error--}}
          <div class="popUpAtencao popUpAtencao2" id="popUpError" >
            <h1 style="color: red">ATENÇÃO!</h1>
            <p>Selecione um cliente e um endereço para continuar!</p>
            <div class="btnContainer2">
              <button class="confirmError">Ok</button> 
            </div>
          </div>
          
  </section>


  @stop
{{-----------}}


{{---Imports---}}
@section('js')
<script src="{{ asset('js/geral.js') }}" defer></script>
<script src="{{ asset('js/colectData.js') }}" defer></script>
@stop
{{----------}}
 


