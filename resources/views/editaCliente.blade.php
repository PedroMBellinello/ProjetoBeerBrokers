

@extends('adminlte::page')

@section('title', 'Editar Clientes')


{{---Imports---}}

  <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">

@section('css')
   <link href="{{ asset('css/login.css') }}" rel="stylesheet">
   <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
   <link href="{{ asset('css/cadCli.css') }}" rel="stylesheet">
   <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
@stop

{{---------}}

{{---token---}}
   <meta name="csrf-token" content="{{ csrf_token() }}">
{{---------}}

@section('content')
  
  <section class="cadCli">
    @csrf
      <p>DADOS DO CLIENTE</p>
        <div class="cadCliCont">
          <p>EDIÇÃO DE CLIENTE</p>
          <form name="formCad" onsubmit="return updateCliente()"  >

              <label for="">CNPJ*</label>
              <input type="text" name="cnpj" id="cnpj"  inputmode="numeric" required>
            
              <label for="">Razão Social*</label>
              <input type="text" name="razao" id="razao" required>

              <label for="">Nome Fantasia*</label>
              <input type="text" name="fantasia" required>

              <label for="">Inscrição Estadual*</label>
              <input type="text" name="inscEst" >
        
              <label for="">Inscrição Municipal*</label>
              <input type="text" name="inscMuni" >
 
              <label for="">E-mail*</label>
              <input type="text" name="email" required>

              <label for="">Telefone*</label>
              <input type="text" name="fone"  inputmode="numeric" required >

              <input class="cadCliBtn btnEnviar" type="submit" value="Salvar Edição" id="cadastrar">
          </form>
        </div>

        {{-- popUpSucess --}}
        <div class="popUpAtencao popUpAtencao2" id="popUpSucess">
          <h1>ATENÇÃO!</h1>
          <p>Cliente Editado com sucesso</p>
          <div class="btnContainer2">
            <button class="confirm">Ok</button> 
          </div>
        </div>

        {{-- popUpError --}}
        <div class="popUpAtencao popUpAtencao2" id="popUpError">
          <h1 style="color: red">ATENÇÃO!</h1>
          <p>Erro ao atualizar o cliente verifique todos os campos e tente novamente</p>
          <div class="btnContainer2">
            <button class="confirmError" >Ok</button> 
          </div>
        </div>


  </section>

@stop


{{---Imports---}}
@section('js')
    <script src="{{ asset('js/geral.js') }}" defer></script>
    <script src="{{ asset('js/editClientes.js') }}" defer></script>
@stop
{{---------}}


