
@extends('adminlte::page')


@section('title', 'Editar Endereço e contato')


@section('css')
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">
    <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
    <link href="{{ asset('css/cadCli.css') }}" rel="stylesheet">
    <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
    <link href="{{ asset('css/listaEnd.css') }}" rel="stylesheet">
@stop

  <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">





@section('content')

   <section class="cadCli">
     <form onsubmit="return updateEndereco()">
     <div class="cadEndCont">
       <p>EDIÇÃO DE ENDEREÇO</p>
       <label for="">CEP*</label>
       <input type="text" name="" id="cep" required>

       <label for="">Rua*</label>
       <input type="text" name="" id="rua" required>

       <label for="">Número*</label>
       <input type="text" name="" id="numero" required>

       <label for="">Complemento*</label>
       <input type="text" name="" id="complemento" >


       <label for="">Bairro*</label>
       <input type="text" name="" id="bairro" required>

       <label for="">Cidade*</label>
       <input type="text" name="" id="cidade" required>

       <label for="">Estado*</label>
       <input type="text" name="" id="uf" required>

       <input style="margin:0 auto" class="btnEnviar" type="submit" value="Salvar informações" >

       </form>
     </div>

          {{-- popUp sucess --}}
          <div class="popUpAtencao popUpAtencao2" id="popUpSucess" >
            <h1>ATENÇÃO!</h1>
            <p>Endereço editado com sucesso!</p>
            <div class="btnContainer2">
              <button class="confirm">Ok</button> 
            </div>
          </div>
      
          {{-- popUp erro --}}
          <div class="popUpAtencao popUpAtencao2" id="popUpError" >
            <h1 style="color: red">ATENÇÃO!</h1>
            <p>Erro ao Editar o Endereço!</p>
            <div class="btnContainer2">
              <button class="confirmError">Ok</button> 
            </div>
          </div>
        
   </section>



@stop



@section('js')
   <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
   <script src="{{ asset('js/EditEnderecos.js') }}" defer></script>
   <script src="{{ asset('js/geral.js') }}" defer></script>



@stop




