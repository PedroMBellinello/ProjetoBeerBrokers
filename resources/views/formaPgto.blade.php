
@extends('adminlte::page')

@section('title', 'Forma de Pagamento')

@section('css')
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">
    <link href="{{ asset('css/cadPed.css') }}" rel="stylesheet">
    <link href="{{ asset('css/addProd.css') }}" rel="stylesheet">
    <link href="{{ asset('css/formaPgto.css') }}" rel="stylesheet">
    <link href="{{ asset('css/geral.css') }}" rel="stylesheet">
@stop

@section('icon')
   <link rel="icon" type="image/png" href="https://recursos.clubedomalte.com.br/i/_2022/lupulo.svg">
@stop

@section('content')
    <section class="pgtoCont">
        <p>PAGAMENTO</p>
        <div class="cadPed">
          <p class="txt">SELECIONE A FORMA DE PAGAMENTO</p>
          <div class="containerBTN">
            <select class="escolhaPgto" name="" id="">
              <option selected="" disabled="" hidden="" value="" disabled>Cartão, Boleto, Pix...</option>
              <option value="">Cartão</option>
              <option value="">Boleto</option>
              <option value="">Pix</option>
            </select>
          </div>
          <div class="cartao">
            <label for="">Parcelas</label>
            <select class="escolhaPgto parcela" name="" id="">
              <option selected="" disabled="" hidden="" value="" disabled>Pagamento à vista</option>
              <option value="">Pagamento à vista</option>
              <option value="">2x sem juros</option>
              <option value="">3x sem jutos</option>
              <option value="">4x sem jutos</option>
              <option value="">5x sem jutos</option>
              <option value="">6x sem jutos</option>
            </select>
          </div>
        </div>
      </section>

@stop



@section('js')
    <script src="{{ asset('js/geral.js') }}" defer></script>
    <script src="{{ asset('js/processaPed.js') }}" ></script>
@stop

