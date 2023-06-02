

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
              <input type="text" name="cnpj" id="cnpj" required>
            
              <label for="">Razão Social*</label>
              <input type="text" name="razao" id="razao" required>

              <label for="">Nome Fantasia*</label>
              <input type="text" name="fantasia" required>

              <label for="">Inscrição Estadual*</label>
              <input type="text" name="inscEst" required>
        
              <label for="">Inscrição Municipal*</label>
              <input type="text" name="inscMuni" required>

              <label for="">E-mail*</label>
              <input type="text" name="email" required>

              <label for="">Telefone*</label>
              <input type="text" name="fone" required>

              <input class="cadCliBtn btnEnviar" type="submit" value="Salvar Edição" id="cadastrar">
          </form>
        </div>
  </section>

@stop


{{---Imports---}}
@section('js')
    <script src="{{ asset('js/geral.js') }}" defer></script>
    <script src="{{ asset('js/editClientes.js') }}" defer></script>
@stop
{{---------}}


