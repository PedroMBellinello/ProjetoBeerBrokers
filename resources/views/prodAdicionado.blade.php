


@extends('adminlte::page')


@section('title', 'Add Produtos ')

@section('css')
   <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
   <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
   <link href="{{ asset('css/login.css') }}" rel="stylesheet">
   <link href="{{ asset('css/prodAdicionado.css') }}" rel="stylesheet">
   <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
@stop


   <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">




@section('content')


  <section class="login novoPed">
      <p>CADASTRE UM NOVO PEDIDO</p>
      <div class="divDoProd">
        <div class="foto">
          <img src="https://clubedomalte.fbitsstatic.net/img/p/cerveja-underground-american-ipa-garrafa-355ml-88480/255537.jpg?w=214&h=214&v=no-change&qs=ignore" alt="">
        </div>
        <div class="descricao" >
          <p class="nome">Caixa de Cerveja Underground 255ml c/12un</p>
          <div class="qtdCont">
            <p>Quant.:</p>
            <div class="qtd">
              <button class="minus" role="button" tabindex="0">-</button>
              <input id="produto-spot-quantidade selected-quantity" class="input-spot-quantidade num" value="1" min="1"
                m" type="text" role="form" tabindex="0" />
              <button class="plus" role="button" tabindex="0">+</button>
            </div>
          </div>
          <div class="mudar">
            <a href="#">Editar</a>
            <button class="btnEnviar">Lançar</button>
          </div>
        </div>
      </div>

      <div id="container" ></div>

      <button class="btnEnviar btnFlex" type="submit"  onclick="mostraModal()">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
          <g id="Grupo_51" data-name="Grupo 51" transform="translate(-160.228 -156.363)">
            <text id="_" data-name="+" transform="translate(166.92 173.645)" fill="#fff" font-size="16.522"
              font-family="Montserrat-Medium, Montserrat" font-weight="500">
              <tspan x="0" y="0">+</tspan>
            </text>
            <circle id="Elipse_4" data-name="Elipse 4" cx="11" cy="11" r="11" transform="translate(160.728 156.863)"
              fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
          </g>
        </svg>
        Adicionar produto
      </button>
      <a href="formaPgto">
        <button class="btnEnviar btnFlex btnCinza" type="submit">
          Formas de pagamento
        </button>
      </a>
      <div class="escolheProd" id="modalEscolheProd">
        <div class="divFlex">
          <label for="">Rótulo*</label>
          <input type="text" id="rotulo">
        </div>
        <div class="divFlexInBtn">
          <div class="quantCont">
            <label class="quant" for="">Quantidade*</label>
            <div class="qtd">
              <button class="minus" role="button" tabindex="0">-</button>
              <input id="produto-spot-quantidade selected-quantity" class="input-spot-quantidade num" value="1" min="1"
                 " type="text" role="form" tabindex="0" />
              <button class="plus" role="button" tabindex="0">+</button>
            </div>
          </div>
          <div class="btnCont">
              <button class="btnEnviar" onclick="gerarNovaDiv()">OK</button>
          </div>
        </div>
      </div>
  </section>  

@stop

@section('js')
  <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
  <script src="{{ asset('js/geral.js') }}" defer></script>
  <script src="{{ asset('js/processaPed.js') }}" ></script>

@stop



