
var mobile_submenu_open = false;

// $('#mobile-menu-icon.closed').on('click', function () {
//   $(this).toggleClass('open');
// $('#mobile-menu.closed').toggleClass('open');
// $('.telaPreta').toggleClass('open');
// })
// $('.content').on('click', function () {
//   $(this).toggleClass('active');
// })

// $('.btnEnviar.btnFlex').on('click', function () {
// $(this).toggleClass('open');
// $('.escolheProd').toggleClass('open');
// $('.telaPreta').toggleClass('open');

// })

// $('.modalPremium').on('click', function () {
//   $(".escolheProd").toggleClass('open');
//   $(".telaPreta").toggleClass('open');
//   event.stopPropagation();
// })


// $('.cadCliBtn.btnEnviar').on('click', function () {
// $(".popUpAtencao").toggleClass('open');
// $(".telaPreta").toggleClass('open');
// element = document.getElementsByTagName("section")[0];
// element.scrollIntoView();
// })
// $('.popUpAtencao img').on('click', function () {
// $(".popUpAtencao").toggleClass('open');
// $(".telaPreta").toggleClass('open');
// event.stopPropagation()

// })


// $('.excluiEnd').on('click', function () {
//   $(".popUpAtencao").toggleClass('open');
//   $(".telaPreta").toggleClass('open');
//   element = document.getElementsByTagName("section")[0];
//   element.scrollIntoView();
// })
// $('button.cancela').on('click', function () {
//   $(".popUpAtencao").toggleClass('open');
//   $(".telaPreta").toggleClass('open');
//   event.stopPropagation()
// })




function scrollToTop() {
  var currentPosition = window.scrollY || window.pageYOffset;
  var targetPosition = 0;
  var startTime = null;

  function scrollToTop(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    var progress = timestamp - startTime;
    var easeInOutCubic = progress < 500 ? progress ** 3 / (500 ** 3) : 1;
    var currentPosition = window.scrollY || window.pageYOffset;
    var distance = currentPosition - targetPosition;
    var newPosition = currentPosition - distance * easeInOutCubic;
    window.scrollTo(0, newPosition);
    if (progress < 500) {
      requestAnimationFrame(scrollToTop);
    }
  }
  requestAnimationFrame(scrollToTop);
}
