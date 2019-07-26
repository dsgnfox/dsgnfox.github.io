//
AOS.init({
});

// табы
$(function() {
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});

//
$('audio').initAudioPlayer();

// отправка формы -- отправку на скрипт убрал, потому что для гита
$('#js-btn-submit').on('click', function(e) {
  var thisForm = $(this).parents("#js-form");
  var isvalidate = thisForm[0].checkValidity();
  if (isvalidate) {
    e.preventDefault();
    swal("Ваш запрос принят!", "Спасибо за обращение.\nВ ближайшее время мы вам перезвоним!", "success");
    thisForm[0].reset();
  }
});

//
$('#js-form-tel').inputmask({"mask": "+7 (999) 999-99-99"});

// скрывать меню на мобильных при клике по ссылке в нем
if(document.documentElement.clientWidth < 992) {
  $('.nav-item.nav-link').click(function() {
    $('.navbar-collapse').collapse('toggle');
  })
};

// плавный скролл
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 50;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

//
$('.hero-img-btn a').hover(function() {
  $('.hero-img').toggleClass('brightness');
});