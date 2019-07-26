// анимация
  AOS.init({
  });

// Обработка формы
$('.js-btn-send').on('click', function(event) {
  var thisForm = $(this).parents(".js-form");
  var isvalidate = thisForm[0].checkValidity();
  yaCounter53436934.reachGoal('formSubmit'); // передача кол-ва кликов в метрику
  if (isvalidate) {
    event.preventDefault();
    $.get("main/sendmail.php", { name: $(this).parent().children('.js-form-name').val(), phone: $(this).parent().children('.js-form-tel').val() })
    .done(function(data) {
      swal("Ваш запрос принят!", "Спасибо за обращение.\nВ ближайшее время мы вам перезвоним!", "success");
      thisForm[0].reset();
    });
  }
});

// бургер белым при открытом меню
$( "label.hamburger" ).click(function() {
	$(this).toggleClass('hamburger--white');
});

// показать ещё
$('.js-load').click(function() {
  if ( $( ".js-load-hidden" ).is( ":hidden" ) ) {
    $( ".js-load-hidden" ).show( "slow" );
  } else {
    $( ".js-load-hidden" ).slideUp();
  }
  $(this).parent().children().toggleClass('icon-arrow--up');
});

//fancybox
$(".js-fancybox").fancybox({
	loop: false
});

// карта в контактах
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.739176, 37.621361],
            zoom: 15,
            controls: ['zoomControl']
        }, {suppressMapOpenBlock: true}),
        myPlacemark = new ymaps.Placemark([55.738176, 37.633661], {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        })
    
    myMap.geoObjects.add(myPlacemark);
}

//спойлеры
$('.spoilers__body').hide();
$('.spoiler__title').click(function(){
  $(this).next().slideToggle();
  $(this).children(".spoiler__icon-arrow").toggleClass('spoilers__icon-arrow--rotate');
});

//моб меню
$('.mmenu').click(function(){
  $('.modal-mmenu').toggle();
  $(this).addClass('mmenu--active');
});
$('.modal-mmenu__bg').click(function(){
  $('.modal-mmenu').hide();
  $('.mmenu').removeClass('mmenu--active');
});

//маска на инпуте с телефоном
$('.js-form-tel').mask("+7(999)999-99-99");