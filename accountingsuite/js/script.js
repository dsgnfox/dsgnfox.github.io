// анимация
 AOS.init();

// меню на мобильном
$('.menu-slide-btn').click (function () {
	$(this).toggleClass('isOpen');
	$('.menu-slide-collapse').toggleClass('isOpen');
	$('.mmenu-bg').toggleClass('isOpen');
});
$('.mmenu-bg').click (function () {
	$(this).removeClass('isOpen');
	$('.menu-slide-btn').removeClass('isOpen');
	$('.menu-slide-collapse').removeClass('isOpen');
});

// цвет хэдера при скролле
$(window).scroll(function(){
	$('header').toggleClass('scrolled', $(this).scrollTop() > 10);
});