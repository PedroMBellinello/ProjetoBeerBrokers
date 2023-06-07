

<link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">

@extends('adminlte::page')

@section('title', 'Cadastrar Clientes')


@section('css')
   <link href="{{ asset('css/login.css') }}" rel="stylesheet">
   <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
   <link href="{{ asset('css/cadCli.css') }}" rel="stylesheet">
   <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
   
@stop

@section('js')   
    <script src="{{ asset('js/geral.js') }}" defer></script>
   <script src="{{ asset('js/cadEndereco.js') }}"></script>
   <script src="{{ asset('js/cadClientes.js') }}"></script>

   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
@stop



<meta name="csrf-token" content="{{ csrf_token() }}">

@section('content')

  
  
  <section class="cadCli">
   @csrf
    <p>CADASTRO DE NOVO ENDEREÇO</p>
    <div class="cadEndCont">
      <p>CADASTRO DE ENDEREÇO</p>

          <label for="">CEP*</label> 
          <input type="text" name="cep" id="cep"  onchange="getEnderecoViaCep()" required inputmode="numeric">

         <label for="">Rua*</label>
          <input type="text" name="rua" id="" required>

          <label for="">Número*</label>
          <input type="text" name="numero" id="" required>

          <label for="">Complemento*</label>
          <input type="text" name="complemento" id="">

          <label for="">Bairro*</label>
          <input type="text" name="bairro" id="" required>

          <label for="">Cidade*</label>
          <input type="text" name="cidade" id="" required>

          <label for="">Estado*</label>
          <input type="text" name="uf" id="" required> 

          <input class="cadCliBtn btnEnviar" type="submit" value="CADASTRAR" id="cadastrar" onclick="CriaEndereco()"  >
      </form>
    </div>

    {{-- popUpSucess --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpSucess">
      <h1>ATENÇÃO!</h1>
      <p>Endereço cadastrado com sucesso</p>
      <div class="btnContainer2">
        <button class="confirm">Ok</button> 
      </div>
     </div>
    
    {{-- popUpError --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpError">
        <h1 style="color: red">ATENÇÃO!</h1>
      <p>Erro ao cadastrar o Endereço verifique todos os campos e tente novamente</p>
      <div class="btnContainer2">
        <button class="confirmError" >Ok</button> 
      </div>
    </div>
    

  </section>



@stop

