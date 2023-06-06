

{{-- NÃO UTILIZADA  --}}

@extends('adminlte::page')


@section('title', 'Lista de endereços')


@section('css')
    <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
    <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
    <link href="{{ asset('css/resumo.css') }}" rel="stylesheet">
    <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
    <link href="{{ asset('css/listaEnd.css') }}" rel="stylesheet">
    <link href="{{ asset('css/cadCli.css') }}" rel="stylesheet">
@stop

  <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">





@section('content')


  <section class="resumo">
    <p class="txt">LISTA DE ENDEREÇOS CADASTRADOS</p>
    
    <a onclick="getIdCliente()">
      <input class="cadCliBtn btnEnviar" type="submit" value="CADASTRAR NOVO ENDEREÇO" id="cadastrar" style="font-weight:">
    </a>
    {{-- <div class="resumoCont"
      <div class="boxCerv">
        <div class="infoGeral lista">
          <p><strong>Nome do endereço:</strong> <span id="">xxxxxx</span></p>
          <p><strong>CEP:</strong> <span id="">xxxxxx</span></p>
          <p><strong>Logradouro:</strong> <span id="">Tainah Minei</span></p>
          <p><strong>Número:</strong> <span id="">Tainah Minei</span></p>
          <p><strong>Bairro:</strong> <span id="">xxxxxx</span></p>
          <p><strong>Cidade:</strong> <span id="">xxxx@yz.com.br</span></p>
          <p><strong>Estado:</strong> <span id="">Paraná</span></p>
          <p><strong>Complemento:</strong> <span id="">Casa 05</span></p>
          <p><strong>Responsável:</strong> <span id="">xxxxx</span></p>
          <p><strong>Telefone do responsável:</strong><br> <span id="">(00) 0000-0000</span></p>
          <p><strong>E-mail do responsável:</strong><br> <span id="">xxx@yz.com.br</span></p>
        </div>
      </div>
      <div class="btnEnd">
        <button class="excluiEnd">Excluir</button>
        <button class="btnEnviar editaEnd">Editar</button>
      </div>
    </div>
     <div class="resumo"></div> --}}

     {{-- popUp sucess --}}
     <div class="popUpAtencao popUpAtencao2" id="popUpSucess">
      <h1>ATENÇÃO!</h1>
      <p>Endereço Excluido com sucesso</p>
      <div class="btnContainer2">
        <button class="confirm">Ok</button> 
      </div>
    </div>

    {{-- popUp erro --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpError">
      <h1 style="color: red">ATENÇÃO!</h1>
      <p>Erro ao Excluir o Endereço</p>
      <div class="btnContainer2">
        <button class="confirm">Ok</button> 
      </div>
    </div>
  

    {{-- pop up confirmação --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpExcluir" >
      <h1 style="color: red">ATENÇÃO!</h1>
      <p>Deseja Realmente excluir o endereço?</p>
      <div class="btnContainer2">
        <button class="confirm">Excluir</button> 
        <button class="confirmError">Cancelar</button> 

      </div>
     </div>
  

  </section>


@stop



@section('js')
   <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
   <script src="{{ asset('js/geral.js') }}" defer></script>
   <script src="{{ asset('js/getEnderecos.js') }}" defer></script>

@stop




