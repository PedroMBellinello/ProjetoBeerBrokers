




@extends('adminlte::page')

@section('title', 'Forma de Pagamento')

 {{-- Imports --}}


  <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">

@section('css')
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">
    <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
    <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
    <link href="{{ asset('css/resumo.css') }}" rel="stylesheet">
    <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
@stop
 {{--------}}

 

@section('content')

<section class="resumo">
    <p class="txt">DADOS DO PEDIDO</p>
      <p class="nomeContent">
      <div class="boxCerv">
      </div>
    </div>

    <div id="container"></div>

    <div class="resumoCont">
      <p class="nomeContent">
        <svg xmlns="http://www.w3.org/2000/svg" width="28.108" height="31.6" viewBox="0 0 28.108 31.6">
          <g id="Grupo_18" data-name="Grupo 18" transform="translate(-6654.056 -531.4)">
            <g id="Grupo_17" data-name="Grupo 17">
              <path id="Caminho_120" data-name="Caminho 120"
                d="M6654.056,563c.115-.9.179-1.8.355-2.682a13.945,13.945,0,0,1,27.319-.478c.235,1.033.294,2.106.434,3.16Z"
                fill="#5e5e5f" />
              <path id="Caminho_121" data-name="Caminho 121"
                d="M6659.925,539.382a8.2,8.2,0,1,1,7.885,8.419A8.216,8.216,0,0,1,6659.925,539.382Z" fill="#5e5e5f" />
            </g>
          </g>
        </svg>
        DADOS DE PAGAMENTO
      </p>
      <div class="boxCerv">
        <div class="infoGeral">
          <p><strong>Metodo De pagamento:</strong> <span id="metodo"></span></p>
          <p><strong>Quantidade de Parcelas:</strong> <span id="qtd_parcela"></span></p>
        </div>
      </div>
    </div>

    <div class="resumoCont">
      <p class="nomeContent">
        <svg xmlns="http://www.w3.org/2000/svg" width="28.108" height="31.6" viewBox="0 0 28.108 31.6">
          <g id="Grupo_18" data-name="Grupo 18" transform="translate(-6654.056 -531.4)">
            <g id="Grupo_17" data-name="Grupo 17">
              <path id="Caminho_120" data-name="Caminho 120"
                d="M6654.056,563c.115-.9.179-1.8.355-2.682a13.945,13.945,0,0,1,27.319-.478c.235,1.033.294,2.106.434,3.16Z"
                fill="#5e5e5f" />
              <path id="Caminho_121" data-name="Caminho 121"
                d="M6659.925,539.382a8.2,8.2,0,1,1,7.885,8.419A8.216,8.216,0,0,1,6659.925,539.382Z" fill="#5e5e5f" />
            </g>
          </g>
        </svg>
        INFORMAÇÕES DO CLIENTE
      </p>
      <div class="boxCerv">
        <div class="infoGeral">
          <p><strong>CNPJ:</strong> <span id="cnpj"></span></p>
          <p><strong>Razão Social:</strong> <span id="razao"></span></p>
          <p><strong>Nome Fantasia:</strong> <span id="fantasia"></span></p>
          <p><strong>Inscrição Estadual:</strong> <span id="insc_estadual"></span></p>
          <p><strong>Inscrição Municipal:</strong> <span id="insc_municipal"></span></p>
          <p><strong>E-mail:</strong><br> <span id="email"></span></p>
          <p><strong>Telefone:</strong> <span id="fone"></span></p>
        </div>
      </div>
    </div>
    <div class="resumoCont">
      <p class="nomeContent">
        <svg xmlns="http://www.w3.org/2000/svg" width="44.51" height="27.81" viewBox="0 0 44.51 27.81">
          <g id="Grupo_14" data-name="Grupo 14" transform="translate(-6646.543 -865.841)">
            <g id="Grupo_13" data-name="Grupo 13">
              <path id="Caminho_105" data-name="Caminho 105"
                d="M6646.543,874.952q2.442-2.829,4.892-5.653a.822.822,0,0,1,.528-.283c2.334-.019,4.667-.013,7-.011.083,0,.166.015.271.025v11.107h-.565q-5.784,0-11.566,0c-.187,0-.374.021-.561.032Zm6.364,3.583c1.261,0,2.522,0,3.783,0,.7,0,.983-.285.985-.974q.007-2.979,0-5.958c0-.72-.283-1-1-1.005-1.218,0-2.435.009-3.653-.007a1.217,1.217,0,0,0-1.018.467c-.889,1.052-1.727,2.157-2.708,3.116a3.746,3.746,0,0,0-1.185,3.308c.083.766.293,1.052,1.056,1.054C6650.414,878.537,6651.661,878.535,6652.907,878.535Z"
                fill="#5e5e5f" />
              <path id="Caminho_106" data-name="Caminho 106"
                d="M6646.543,881.736h12.68v7.91h-.734a5.594,5.594,0,0,0-2.439-4.555,5.394,5.394,0,0,0-3.36-.974,5.631,5.631,0,0,0-5.385,5.535h-.762Z"
                fill="#5e5e5f" />
              <path id="Caminho_107" data-name="Caminho 107"
                d="M6690.254,886.506h-1.743c-.942,0-1.885.015-2.826-.012a.87.87,0,0,1-.576-.263,5.571,5.571,0,0,0-8.742.005.739.739,0,0,1-.49.256q-6.2.021-12.391.01c-.057,0-.114-.009-.206-.018V865.841h26.974Zm-13.44-19.1h-10.822c-.755,0-1.163.29-1.153.816s.4.784,1.137.784q10.779,0,21.557,0a2.548,2.548,0,0,0,.56-.05.771.771,0,0,0,.055-1.477,2.3,2.3,0,0,0-.643-.07Q6682.159,867.4,6676.814,867.4Zm0,6.367q-5.389,0-10.779,0a2.894,2.894,0,0,0-.6.051.769.769,0,0,0-.055,1.476,1.888,1.888,0,0,0,.556.07q10.821,0,21.644,0a2.279,2.279,0,0,0,.515-.054.708.708,0,0,0,.579-.76.7.7,0,0,0-.6-.738,3.3,3.3,0,0,0-.6-.045Q6682.137,873.766,6676.814,873.768Zm-.056-3.173H6665.98c-.755,0-1.125.252-1.139.773s.376.808,1.147.808h21.557a3.027,3.027,0,0,0,.477-.018.782.782,0,0,0-.008-1.544,3.162,3.162,0,0,0-.477-.018Z"
                fill="#5e5e5f" />
              <path id="Caminho_108" data-name="Caminho 108"
                d="M6676.777,889.5a3.971,3.971,0,0,1,7.936.262,3.97,3.97,0,1,1-7.936-.262Zm3.946-2.2a2.382,2.382,0,0,0,.032,4.764,2.382,2.382,0,0,0-.032-4.764Z"
                fill="#5e5e5f" />
              <path id="Caminho_109" data-name="Caminho 109"
                d="M6652.922,885.712a3.969,3.969,0,1,1-3.987,3.969A3.994,3.994,0,0,1,6652.922,885.712Zm-.032,1.587a2.382,2.382,0,0,0,.029,4.764,2.382,2.382,0,0,0-.029-4.764Z"
                fill="#5e5e5f" />
              <path id="Caminho_110" data-name="Caminho 110" d="M6675.366,888.122l-.223,1.522h-14.257v-1.522Z" fill="#5e5e5f" />
              <path id="Caminho_111" data-name="Caminho 111" d="M6686.111,888.1h4.942v1.539h-4.714Z" fill="#5e5e5f" />
              <path id="Caminho_112" data-name="Caminho 112"
                d="M6656.069,872.176c-.8,0-1.582.029-2.358-.011a1.054,1.054,0,0,0-.951.446c-.882,1.056-1.773,2.1-2.694,3.126a1.225,1.225,0,0,0-.3,1.187h6.3Z"
                fill="#5e5e5f" />
              <path id="Caminho_113" data-name="Caminho 113"
                d="M6653.683,889.664a.791.791,0,0,0-.77-.777.822.822,0,0,0-.8.8.793.793,0,0,0,.824.764A.771.771,0,0,0,6653.683,889.664Z"
                fill="#5e5e5f" />
              <path id="Caminho_114" data-name="Caminho 114"
                d="M6656.069,872.176v4.748h-6.3a1.225,1.225,0,0,1,.3-1.187c.921-1.021,1.812-2.07,2.694-3.126a1.054,1.054,0,0,1,.951-.446C6654.487,872.205,6655.266,872.176,6656.069,872.176Z"
                fill="#5e5e5f" />
              <path id="Caminho_115" data-name="Caminho 115"
                d="M6680.744,888.887a.791.791,0,0,1,.774.816.77.77,0,0,1-.784.75.791.791,0,0,1-.784-.76A.82.82,0,0,1,6680.744,888.887Z"
                fill="#5e5e5f" />
              <path id="Caminho_116" data-name="Caminho 116"
                d="M6653.683,889.664a.771.771,0,0,1-.744.789.793.793,0,0,1-.824-.764.822.822,0,0,1,.8-.8A.791.791,0,0,1,6653.683,889.664Z"
                fill="#5e5e5f" />
            </g>
          </g>
        </svg>
        INFORMAÇÕES DA ENTREGA
      </p>
      <div class="boxCerv">
        <div class="infoGeral">
          <p><strong>CEP:</strong> <span id="cep"></span></p>
          <p><strong>Endereço entrega:</strong> <span id="endereco"></span></p>
          <p><strong>Complemento:</strong> <span id="complemento"></span></p>
          <p><strong>Número:</strong> <span id="numero"></span></p>
          <p><strong>Bairro:</strong> <span id="bairro"></span></p>
          <p><strong>Cidade:</strong> <span id="cidade"></span></p>
          <p><strong>Estado:</strong> <span id="uf"></span></p>
          
          <p><strong>Nome do responsável:</strong ><br> <span id="nome_contato"></span></p>
          <p><strong>E-mail do responsável:</strong ><br> <span id="emailContato"></span></p>
          <p><strong>Telefone do responsável:</strong ><br> <span id="foneContato"></span></p>
        </div>
      </div>
    </div>
    <div class="containerBtn">
        <button class="btnEnviar" onclick="finalizarCompra()">Finalizar</button>
    </div>

    {{-- popUp Succes --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpSucess">
      <h1>ATENÇÃO!</h1>
      <p>Pedido cadastrado com sucesso!</p>
      <div class="btnContainer2">
        <button class="confirm">Ok</button> 
      </div>
    </div>

    {{-- pupUp Error --}}
    <div class="popUpAtencao popUpAtencao2" id="popUpError">
      <h1 style="color: red">ATENÇÃO!</h1>
      <p>Erro ao cadastrar o pedido tente novamente</p>
      <div class="btnContainer2">
        <button class="confirmError">Ok</button> 
      </div>
    </div>
  </section>

  
@stop   



@section('js')
    <script src="{{ asset('js/geral.js') }}" defer></script>
    <script src="{{ asset('js/processaPed.js') }}" ></script>
    

@stop

