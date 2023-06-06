




@extends('adminlte::page')

@section('title', 'Resumo do Pedido')

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
 
 @section('js')
 <script src="{{ asset('js/geral.js') }}" defer></script>
 <script src="{{ asset('js/getPedidoSelecionado.js') }}" defer></script>


@stop



@section('content')

<section class="resumo">
    <p class="txt">DADOS DO PEDIDO</p>
     <div class="resumoCont">
      <p class="nomeContent">
      <svg xmlns="http://www.w3.org/2000/svg" width="29.837" height="33.361" viewBox="0 0 29.837 33.361">
        <g id="Grupo_6" data-name="Grupo 6" transform="translate(-7833.32 -155.781)">
          <g id="Grupo_5" data-name="Grupo 5">
            <g id="Grupo_4" data-name="Grupo 4">
              <path id="Caminho_29" data-name="Caminho 29"
                d="M7833.32,155.781h25.039c.008.1.024.193.024.29q0,7.773,0,15.548c0,.106-.01.211-.014.3h-1.178v-.338c0-1.315.018-2.63-.01-3.944a1.76,1.76,0,0,0-2.533-1.533,1.859,1.859,0,0,0-1.037,1.816q0,3.26,0,6.519v.422h-.417a1.8,1.8,0,0,0-1.955,1.971c0,.967,0,1.934,0,2.9a12.354,12.354,0,0,0,.744,4.341c.183.5.407.991.614,1.489-.635.1-.763.245-.764.878v2.7h-18.487v-.475q0-16.217,0-32.433C7833.344,156.083,7833.328,155.932,7833.32,155.781Zm10.149,14.906h6.814a3.217,3.217,0,0,0,.326-.006.612.612,0,0,0,.62-.588.622.622,0,0,0-.61-.6,1.926,1.926,0,0,0-.228-.005q-6.912,0-13.823,0a1.622,1.622,0,0,0-.355.034.589.589,0,0,0-.476.577.581.581,0,0,0,.5.558,2.373,2.373,0,0,0,.421.029Q7840.063,170.689,7843.469,170.687Zm-.01,2.379h6.879a3.277,3.277,0,0,0,.358-.01.585.585,0,0,0,0-1.166,2.388,2.388,0,0,0-.293-.009h-13.856a1.851,1.851,0,0,0-.325.016.584.584,0,0,0,0,1.152,2.117,2.117,0,0,0,.357.016Zm.03-5.952h-6.878a2.673,2.673,0,0,0-.358.013.574.574,0,0,0-.512.546.557.557,0,0,0,.422.587,1.379,1.379,0,0,0,.386.038q6.927,0,13.854,0a2.038,2.038,0,0,0,.293-.011.6.6,0,0,0,.532-.6.592.592,0,0,0-.568-.565c-.108-.01-.217-.007-.325-.007Zm-.032-1.2h6.911c.578,0,.871-.209.859-.608s-.3-.584-.857-.584h-13.789a2.275,2.275,0,0,0-.261.006.614.614,0,0,0-.583.592.6.6,0,0,0,.613.589c.108.009.217.005.326.005Z"
                fill="#5e5e5f" />
              <path id="Caminho_30" data-name="Caminho 30"
                d="M7843.457,165.912h-6.781c-.109,0-.218,0-.326-.005a.6.6,0,0,1-.613-.589.614.614,0,0,1,.583-.592,2.275,2.275,0,0,1,.261-.006h13.789c.557,0,.844.2.857.584s-.281.608-.859.608"
                fill="#5e5e5f" />
              <path id="Caminho_31" data-name="Caminho 31"
                d="M7853.611,176.053c0,.913,0,1.79,0,2.668a2.039,2.039,0,0,0,.048.482.575.575,0,0,0,1.114-.04,2.416,2.416,0,0,0,.036-.453q0-5.313,0-10.626a3,3,0,0,1,.023-.454.6.6,0,0,1,.555-.507.566.566,0,0,1,.584.464,1.809,1.809,0,0,1,.029.388q0,3.553,0,7.106c0,.087,0,.174,0,.261.008.436.241.709.6.7s.58-.274.584-.718c0-.511,0-1.022,0-1.532.006-.442.234-.714.589-.721s.6.271.6.705c.007.869,0,1.739.005,2.608a1.738,1.738,0,0,0,.04.419.534.534,0,0,0,.515.424.541.541,0,0,0,.584-.375,1.264,1.264,0,0,0,.057-.416c.006-.674,0-1.347,0-2.021,0-.473.22-.746.586-.747s.6.288.6.742q0,1.646,0,3.292a.632.632,0,0,0,.424.692.581.581,0,0,0,.759-.6c.012-.695,0-1.391.006-2.086a1.619,1.619,0,0,1,.046-.418.531.531,0,0,1,.583-.416.539.539,0,0,1,.534.44,1.133,1.133,0,0,1,.035.29c-.007,1.6.01,3.194-.032,4.79a11.072,11.072,0,0,1-1.446,5.021.366.366,0,0,1-.268.162q-3.618.014-7.236,0a.435.435,0,0,1-.3-.212,11.48,11.48,0,0,1-1.445-5.613q0-1.4,0-2.8c0-.734.167-.9.9-.9C7853.4,176.054,7853.48,176.053,7853.611,176.053Z"
                fill="#5e5e5f" />
              <path id="Caminho_32" data-name="Caminho 32"
                d="M7853.027,189.141v-2.334h9.51v2.334Zm7.745-1.743a6.424,6.424,0,0,0-.68.005.529.529,0,0,0-.5.513.5.5,0,0,0,.417.6,8.908,8.908,0,0,0,1.515,0,.5.5,0,0,0,.418-.6.528.528,0,0,0-.494-.515A6.424,6.424,0,0,0,7860.772,187.4Z"
                fill="#5e5e5f" />
              <path id="Caminho_33" data-name="Caminho 33"
                d="M7860.772,187.4a6.424,6.424,0,0,1,.68.005.528.528,0,0,1,.494.515.5.5,0,0,1-.418.6,8.908,8.908,0,0,1-1.515,0,.5.5,0,0,1-.417-.6.529.529,0,0,1,.5-.513A6.424,6.424,0,0,1,7860.772,187.4Z"
                fill="#5e5e5f" />
            </g>
          </g>
        </g>
      </svg>
         DADOS DO PEDIDO</p>
      <div class="infoGeral">
        <p class="textoPedido">Número do Pedido:</p>
        <p class="nPed" id="numPedido"></p>
        <p class="valor"><strong>Valor do pedido: </strong><span id="vl_pedido"> </span></p>
        <p>Data de compra: <span id="dtPedido"></span></p>
        <p>Forma de pagamento: <span id="formaPgto"></span></p>
        <p>Qtd Parcelas: <span id="qtdParcela"></span></p>
        <p>Status: <span id="status"></span></p>
      </div> 
     <div class="boxCerv">
      </div>
    </div>
    {{-- <div class="resumoCont">
      <p class="nomeContent">
        <svg xmlns="http://www.w3.org/2000/svg" width="33.798" height="26.657" viewBox="0 0 33.798 26.657">
          <g id="Grupo_16" data-name="Grupo 16" transform="translate(-6655.451 -156.381)">
            <g id="Grupo_15" data-name="Grupo 15">
              <path id="Caminho_117" data-name="Caminho 117"
                d="M6655.451,182.84c.131-.789.271-1.577.392-2.368q.721-4.692,1.43-9.385.675-4.449,1.35-8.9c.283-1.857.571-3.714.847-5.572.027-.184.095-.248.271-.235.141.01.284,0,.483,0l1.16,26.653h-5.933Z"
                fill="#5e5e5f" />
              <path id="Caminho_118" data-name="Caminho 118"
                d="M6689.249,183.031H6662.6l-1.158-26.618h26.653Q6688.669,169.7,6689.249,183.031Zm-7.824-22.99a6.72,6.72,0,0,1-6.078,6.617,6.485,6.485,0,0,1-4.319-1.107,6.653,6.653,0,0,1-2.968-5.5h-1.211a7.7,7.7,0,0,0,4.121,6.864,7.491,7.491,0,0,0,8.206-.41,7.628,7.628,0,0,0,3.434-6.463Z"
                fill="#5e5e5f" />
            </g>
          </g>
        </svg>
        RESUMO DO PRODUTO
      </p>
      <div class="boxCerv">
          <div class="img">
            <img src="https://clubedomalte.fbitsstatic.net/img/p/cerveja-underground-american-ipa-garrafa-355ml-88480/255537.jpg?w=214&h=214&v=no-change&qs=ignore" alt="">
          </div>
          <div class="desc">
            <p class="nome">Caixa de cerveja Dogma c/ 12 unid.</p>
            <p class="qtdCer">Qtde: <span>5</span></p>
            <p class="valorRes">Valor: <span>R$ 114,50</span></p>
          </div>
      </div>
    </div> --}}
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
        INFORMAÇÕES DO CLIENTE
      </p>
      <div class="boxCerv">
        <div class="infoGeral">
          <p><strong>CNPJ:</strong><br> <span id="cnpj"></span></p>
          <p><strong>Razão Social:</strong> <br> <span id="razao"></span></p>
          <p><strong>Nome Fantasia:</strong> <br> <span id="fantasia"></span></p>
          <p><strong>Inscrição Estadual:</strong ><br> <span id="insc_est"></span></p>
          <p><strong>Inscrição Municipal:</strong> <br> <span id="insc_muni"></span></p>
          <p><strong>E-mail:</strong> <br> <span id="email"></span></p>
          <p><strong>Telefone:</strong> <br> <span id="fone"></span></p>
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
          <p><strong>Endereço entrega:</strong> <span id="endereco"></span></p>
          <p><strong>Número:</strong>  <span id="numero"></span></p>
          <p><strong>Bairro:</strong> <span id="bairro"></span></p>
          <p><strong>CEP:</strong>  <span id="cep"></span></p>
          <p><strong>Cidade:</strong>  <span id="cidade"></span></p>
          <p><strong>Estado:</strong>  <span id="uf"></span></p>
          <p><strong>Complemento:</strong>  <span id="complemento"></span></p>
        </div>
      </div>
    </div>

  </section>
@stop


