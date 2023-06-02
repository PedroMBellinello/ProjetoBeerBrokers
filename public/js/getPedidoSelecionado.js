//recupera os dados do pedido do local storage e utiliza nas funções
var meuPedido = JSON.parse(localStorage.getItem('pedido'));

//ao carregar a pagina chama as funções 
document.addEventListener('DOMContentLoaded', () => {
    objetoPedido()
    getDadosPedido()
    obterDadosCliente()
    obterEnderecoPedido();
  })



//recebe os dados do pedido e preenche  com base neles
function getDadosPedido() {
    let meuPedido = JSON.parse(localStorage.getItem('pedido'));
    let numPedido = meuPedido.id
    let status = meuPedido.status
    //recebe o valor do pedido converte para a moeda R$
    let vlPedido = meuPedido.vl_pedido
    var vlPedidoFormatado =  parseInt(vlPedido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //recebe o valor da data e converte para o formato padrão D/M/A
    let dtPedido = meuPedido.dt_pedido
    var partesData = dtPedido.split("-");
    var novaDataFormatada = partesData[2] + "/" + partesData[1] + "/" + partesData[0];

    //compara o id para atribuir o texto correspondente
    let formaPgto = meuPedido.condicaoVenda_id
      if (formaPgto = 3) {
          formaPgto = 'Cartão'
       } else if (formaPgto = 4){
          formaPgto = 'Boleto'
       } else if (formaPgto = 5){
         formaPgto = 'Pix'
       } 
    // compara o id para atribuir o valor da parcela correta
    let qtdParcela = meuPedido.qt_parcela
       if (qtdParcela = 6) {
           qtdParcela = '6x'
        } else if (qtdParcela = 5){
           qtdParcela = '5x'
        } else if (qtdParcela = 4){
           qtdParcela = '4x'
        } else if (qtdParcela = 3){
           qtdParcela = '3x'
        } else if (qtdParcela = 2){
           formaPgto = '2x'
        } else if (qtdParcela = 1){
           qtdParcela = '1x'
        } 
    //preencher o html com os dados do pedido
    document.getElementById('numPedido').innerHTML = numPedido
    document.getElementById('vl_pedido').innerHTML = vlPedidoFormatado
    document.getElementById('dtPedido').innerHTML = novaDataFormatada;
    document.getElementById('formaPgto').innerHTML = formaPgto
    document.getElementById('qtdParcela').innerHTML = qtdParcela
    document.getElementById('status').innerHTML = status
}



//monta um objeto com sku qtd e valor do pedido para informar a cria div produto
 function objetoPedido() {
    var meuPedido = JSON.parse(localStorage.getItem('pedido'));
    var pedidoId = meuPedido.id;
  
    fetch(`/getDadosPedidoItem/${pedidoId}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        for (let i = 0; i < data.length; i++) {
          var sku = data[i].SKU;
          var qtd = data[i].qt_produto;
          var vl = data[i].vl_total;
          var vlPedidoFormatado =  parseFloat(vl).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          // Chama a função para criar a div do produto
         criarDivProduto(sku, qtd, vlPedidoFormatado); 
        }
      });
  }
  
  // cria  adiv do produto com base nos dados recebidos pela objeto pedido e o sku do prod
 function criarDivProduto(sku, qtd, vlPedidoFormatado) {
    fetch(`/getProdutosPedido/${sku}`)
      .then(response => response.json())
      .then(data => {
            var descricao = data[0].descricao;
            var url_img = data[0].url_img;
              
              // Cria a div principal
              var divResumoCont = document.createElement('div');
              divResumoCont.classList.add('resumoCont');
              // Cria o parágrafo com o nome do conteúdo
              var pNomeContent = document.createElement('p');
              pNomeContent.classList.add('nomeContent');
  
              // Cria o elemento SVG e define seus atributos
              var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
              svg.setAttribute('width', '33.798');
              svg.setAttribute('height', '26.657');
              svg.setAttribute('viewBox', '0 0 33.798 26.657');
  
              // Cria os elementos g e path dentro do SVG e define seus atributos
              var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
              g.setAttribute('id', 'Grupo_16');
              g.setAttribute('data-name', 'Grupo 16');
              g.setAttribute('transform', 'translate(-6655.451 -156.381)');
  
              var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
              path1.setAttribute('id', 'Caminho_117');
              path1.setAttribute('data-name', 'Caminho 117');
              path1.setAttribute('d', 'M6655.451,182.84c.131-.789.271-1.577.392-2.368q.721-4.692,1.43-9.385.675-4.449,1.35-8.9c.283-1.857.571-3.714.847-5.572.027-.184.095-.248.271-.235.141.01.284,0,.483,0l1.16,26.653h-5.933Z');
              path1.setAttribute('fill', '#5e5e5f');
  
              var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
              path2.setAttribute('id', 'Caminho_118');
              path2.setAttribute('data-name', 'Caminho 118');
              path2.setAttribute('d', 'M6689.249,183.031H6662.6l-1.158-26.618h26.653Q6688.669,169.7,6689.249,183.031Zm-7.824-22.99a6.72,6.72,0,0,1-6.078,6.617,6.485,6.485,0,0,1-4.319-1.107,6.653,6.653,0,0,1-2.968-5.5h-1.211a7.7,7.7,0,0,0,4.121,6.864,7.491,7.491,0,0,0,8.206-.41,7.628,7.628,0,0,0,3.434-6.463Z');
              path2.setAttribute('fill', '#5e5e5f');
  
              // Adiciona os elementos ao SVG
              g.appendChild(path1);
              g.appendChild(path2);
              svg.appendChild(g);
  
              // Adiciona o SVG ao parágrafo "nomeContent"
              pNomeContent.appendChild(svg);
              pNomeContent.innerHTML += 'RESUMO DO PRODUTO';
  
              // Cria a div "boxCerv"
              var divBoxCerv = document.createElement('div');
              divBoxCerv.classList.add('boxCerv');
  
              // Cria a div "img"
              var divImg = document.createElement('div');
              divImg.classList.add('img');
  
              // Cria a imagem e define o atributo "src" e "alt"
              var img = document.createElement('img');
              img.setAttribute('src', url_img);
              img.setAttribute('alt', "Falha ao carregar a imagem");
  
              divImg.appendChild(img);
  
              // Cria a div "desc"
              var divDesc = document.createElement('div');
              divDesc.classList.add('desc');
  
              // Cria os parágrafos com as informações da cerveja
              var pNome = document.createElement('p');
              pNome.classList.add('nome');
              pNome.textContent = descricao;
  
              var pQtdCer = document.createElement('p');
              pQtdCer.classList.add('qtdCer');
              pQtdCer.innerHTML = 'Quantidade: ' + qtd;
  
              var pValorRes = document.createElement('p');
              pValorRes.classList.add('valorRes');
              pValorRes.innerHTML = 'Valor: ' + vlPedidoFormatado ;
  
              divDesc.appendChild(pNome);
              divDesc.appendChild(pQtdCer);
              divDesc.appendChild(pValorRes);
  
              divBoxCerv.appendChild(divImg);
              divBoxCerv.appendChild(divDesc);
  
              divResumoCont.appendChild(pNomeContent);
              divResumoCont.appendChild(divBoxCerv);
  
              // Obtém o elemento com ID "container"
              var container = document.getElementById('container');
  
              // Adiciona a div ao elemento "container"
              container.appendChild(divResumoCont);
       })
  }


  
//obter os dados do cliente e preencher o html com base nele
 function obterDadosCliente() {
    var meuPedido = JSON.parse(localStorage.getItem('pedido'));
    var idCliente = meuPedido.cliente_id;

    fetch(`/getclientePedido/${idCliente}`)
      .then(response => response.json())
        .then(data => {
          let cnpj = data[0].cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
          let razao = data[0].razao
          let fantasia = data[0].fantasia
          let insc_est = data[0].insc_estadual
          let insc_muni = data[0].incs_municipal
          let email = data[0].email
          let fone = data[0].fone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
          //preencher as iformações do cliente com base nos dados do pedido
          document.getElementById('cnpj').innerHTML = cnpj
          document.getElementById('razao').innerHTML = razao
          document.getElementById('fantasia').innerHTML = fantasia
          document.getElementById('insc_est').innerHTML = insc_est
          document.getElementById('insc_muni').innerHTML = insc_muni
          document.getElementById('email').innerHTML = email
          document.getElementById('fone').innerHTML = fone
        })
 }

//obtem os dados do endereco e preenche com base nele
 function obterEnderecoPedido() {
    var meuPedido = JSON.parse(localStorage.getItem('pedido'));
    var enderecoPedido = meuPedido.endereco_id;

    console.log(enderecoPedido)
    fetch(`/indexEnderecoPedido/${enderecoPedido}`)
      .then(response => response.json())
      .then(data => {
        let endereco = data[0].endereco
        let numero = data[0].numero
        let bairro = data[0].bairro
        let cep = data[0].cep.replace(/^(\d{5})(\d{3})$/, '$1-$2')
        let cidade = data[0].cidade
        let estado = data[0].uf
        let complemento = data[0].complemento
        //preencher o html com base no cliente
        document.getElementById('endereco').innerHTML = endereco
        document.getElementById('numero').innerHTML = numero
        document.getElementById('bairro').innerHTML = bairro
        document.getElementById('cep').innerHTML = cep
        document.getElementById('cidade').innerHTML = cidade
        document.getElementById('uf').innerHTML = estado
        document.getElementById('complemento').innerHTML = complemento
    });
 }


