// прелоадер
document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done'); 
		}
	}, 500);
}

// мобильное меню
var mobMenu = document.querySelector('.header__burger');
var mobMenuContent = document.querySelector('.header__info');
mobMenu.addEventListener('click', function() {
	this.classList.toggle('header__burger--active');
	mobMenuContent.classList.toggle('header__info--active');
});