
var mobile_submenu_open = false;

$('#mobile-menu-icon.closed').on('click', function () {
  $(this).toggleClass('open');
$('#mobile-menu.closed').toggleClass('open');
$('.telaPreta').toggleClass('open');
})
$('.content').on('click', function () {
  $(this).toggleClass('active');
})

$('.btnEnviar.btnFlex').on('click', function () {
$(this).toggleClass('open');
$('.escolheProd').toggleClass('open');
$('.telaPreta').toggleClass('open');

})

$('.modalPremium').on('click', function () {
  $(".escolheProd").toggleClass('open');
  $(".telaPreta").toggleClass('open');
  event.stopPropagation();
})

$('body').on('click', '.qtd .plus', function () {
  var qtd = $(this).parent().find('input').val();
if (qtd < 50) {
  qtd++;
$(this).parent().find('input').val(qtd);
  }
});

$('body').on('click', '.qtd .minus', function () {
  var qtd = $(this).parent().find('input').val();
  if (qtd > 1) {
  qtd--;
$(this).parent().find('input').val(qtd);
  }
});
$('.cadCliBtn.btnEnviar').on('click', function () {
$(".popUpAtencao").toggleClass('open');
$(".telaPreta").toggleClass('open');
element = document.getElementsByTagName("section")[0];
element.scrollIntoView();
})
$('.popUpAtencao img').on('click', function () {
$(".popUpAtencao").toggleClass('open');
$(".telaPreta").toggleClass('open');
event.stopPropagation()

})


$('.excluiEnd').on('click', function () {
  $(".popUpAtencao").toggleClass('open');
  $(".telaPreta").toggleClass('open');
  element = document.getElementsByTagName("section")[0];
  element.scrollIntoView();
})
$('button.cancela').on('click', function () {
  $(".popUpAtencao").toggleClass('open');
  $(".telaPreta").toggleClass('open');
  event.stopPropagation()
})


