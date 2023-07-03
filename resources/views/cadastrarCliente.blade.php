

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
   <script src="{{ asset('js/cadClientes.js') }}" defer></script>
   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
@stop



<meta name="csrf-token" content="{{ csrf_token() }}">



<span class="telaPreta" id="telaPreta"></span>




@section('content')

  
  <section class="cadCli">
   @csrf
    <p>CADASTRO DE NOVO CLIENTE</p>
    <div class="cadCliCont">
      <p>CADASTRO DE DADOS</p>
      <form name="formCad"  onsubmit="return enviarFormulario()" >
  
          <label for="">CNPJ*</label>
          <input type="text" name="cnpj" id="cnpj" inputmode="numeric" required>
          
          <label for="">Razão Social*</label>
          <input type="text" name="razao" id="razao" required>

          <label for="">Nome Fantasia*</label>
          <input type="text" name="fantasia" required>

          {{-- nao é obrigatorio --}}
          <label for="">Inscrição Estadual*</label>
          <input type="text" name="inscEst">
        
          {{-- nao é obrigatorio --}}
          <label for="">Inscrição Municipal*</label>
          <input type="text" name="inscMuni">

          <label for="">E-mail*</label>
          <input type="email" name="email" required>

          <label for="">Telefone*</label>
          <input type="number" name="fone" inputmode="numeric" required>
    </div>
  
    <div class="cadEndCont">
      <p>CADASTRO DE ENDEREÇO E CONTATO</p>

          <label for="">CEP*</label>
          <input type="text" name="cep" id="cep" inputmode="numeric" required  onchange="getEnderecoViaCep()" >

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

          <label for="">Nome do responsávem pela filial*</label>
          <input type="text" name="nome_responsavel" id="" required>

          <label for="">Telefone do responsável pela filial*</label>
          <input type="number" name="telefone_responsavel" id=""  inputmode="numeric" required>

          <label for="">E-mail do responsável pela filial*</label>
          <input type="email" name="email_responsavel" id=""> 

          <input class="cadCliBtn btnEnviar" type="submit" value="CADASTRAR" id="cadastrar"  >
      </form>
    </div>

    {{-- popUp sucesso --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpSucess">
      <h1>ATENÇÃO!</h1>
      <p>Cliente cadastrado com sucesso</p>
      <div class="btnContainer2">
        <button class="confirm" onclick="succes()">Ok</button> 
      </div>
    </div>
    {{-- popUp erro cadastro --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpError">
      <h1 style="color: red">ATENÇÃO!</h1>
      <p>Erro ao cadastrar cliente verifique todos os campos e tente novamente!</p>
      <div class="btnContainer2">
        <button class="cancela" onclick="error()">Ok</button> 
      </div>
    </div>
  </section>



@stop



@section('js')
    <script src="{{ asset('js/geral.js') }}" defer></script>
    <script src="{{ asset('js/cadClientes.js') }}" defer></script>
@stop


