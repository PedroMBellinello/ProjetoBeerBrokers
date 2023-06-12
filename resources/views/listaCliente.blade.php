


@extends('adminlte::page')

@section('title', 'Lista de Clientes') 



<link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">


@section('css')
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">
    <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
    <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
    <link href="{{ asset('css/resumo.css') }}" rel="stylesheet">
    <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
    <link href="{{ asset('css/listaEnd.css') }}" rel="stylesheet">
@stop




<meta name="csrf-token" content="{{ csrf_token() }}">


<span class="telaPreta" id="telaPreta"></span>


@section('content')


<section class="resumo">
  <p class="txt">LISTA DE CLIENTES CADASTRADOS</p>


    <a href="/cadastrarCliente">
      <input class="cadCliBtn btnEnviar" type="submit" value="CADASTRAR NOVO CLIENTE" id="cadastrar" style="font-weight: bold; font-size:12px;" >
    </a>
   {{-- <div class="resumoCont">
    <div class="boxCerv">
      <div class="infoGeral lista">
        <p><strong>CNPJ:</strong> <span>xxxxxx</span></p>
        <p><strong>Razão Social:</strong> <span>xxxxxx</span></p>
        <p><strong>Nome Fantasia:</strong> <span>Tainah Minei</span></p>
        <p><strong>Inscrição Estadual:</strong> <span>Tainah Minei</span></p>
        <p><strong>Inscrição Municipal:</strong> <span>xxxxxx</span></p>
        <p><strong>Email:</strong> <span>xxxx@yz.com.br</span></p>
        <p><strong>Telefone:</strong><br> <span>(00) 0000-0000</span></p>
      </div>
    </div>
    <div class="btnEnd">
      <button class="btnEnviar editaEnd">
        <a href="/listaEndereco">
         Endereços
        </a>
      </button>
       <button class="btnEnviar editaEnd">
        <a href="/editaCliente">
        Editar
        </a>
      </button>
      <button class="excluiEnd">Excluir</button> 
    </div>
  </div >  --}}

  <div id="resumoCont" ></div>

  {{-- popUp sucesso --}}
  <div class="popUpAtencao popUpAtencao2" id="popUpSucess">
    <h1>ATENÇÃO!</h1>
    <p>Cliente Excluido com sucesso</p>
    <div class="btnContainer2">
      <button class="confirm" onclick="succes()">Ok</button> 
    </div>
  </div>

  {{-- popUp erro --}}
  <div class="popUpAtencao popUpAtencao2" id="popUpError">
    <h1 style="color: red">ATENÇÃO!</h1>
    <p>Erro ao Excluir o Endereço</p>
    <div class="btnContainer2">
      <button class="confirmError">Ok</button> 
    </div>
  </div>

  <div class=" popUpAtencao popUpAtencao2" id="popUpDeleteCliente">
    {{-- <img src="https://recursos.clubedomalte.com.br/i/_2023/_PH/fecharBeerBrokers.png" alt=""> --}}
    <h1 style="color: red">ATENÇÃO!</h1>
    <p>Tem certeza que deseja excluir permanentemente esse endereço?</p>
    <div class="btnContainer2">
      <button class="btnEnviar excluiEndDef">Excluir</button>
      <button class="cancela">Cancelar</button>
    </div>
  </div>


</section>


@stop



@section('js')
    {{-- <script src="{{ asset('js/geral.js') }}" defer></script> --}}
    <script src="{{ asset('js/clientes.js') }}" defer></script>
    <script src="{{ asset('js/cadClientes.js') }}" defer></script>
@stop







