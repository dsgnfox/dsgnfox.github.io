// ------------ Скролл меню с активной ссылкой
jQuery(window).scroll(function(){
         var $sections = $('.sec');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-$(".js-header-scroll").outerHeight()+10;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

$(".js-header-scroll").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
       event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top-120;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });

// ------------ Сменить стиль шапки при прокрутке

$(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
        $('.header__menu').removeClass('header__menu--top');
        $('.header-fixed').css('background','#fff');
        $('.header-mobile').removeClass('header__menu--top');
        $('.header-mobile').css('background','#fff');
        $('.header__logo .svg-icon').css('fill', '#009aff');
        $('.header-mobile__logo .svg-icon').css('fill', '#009aff');
    }
    else {
        $('.header__logo .svg-icon').css('fill', '#fff');
        $('.header-mobile__logo .svg-icon').css('fill', '#fff');
        $('.header__menu').addClass('header__menu--top');
        $('.header-fixed').css('background','transparent');
        $('.header-mobile').addClass('header__menu--top');
        $('.header-mobile').css('background','transparent');
    }
});

// -------------------- Клик по гамбургеру (цвет)
$( "label.hamburger" ).click(function() {
  	if ($(this).hasClass('hamburger--white')) {
      $(this).removeClass('hamburger--white');
    } else {
      $('label.hamburger').addClass('hamburger--white');
    }
});
// -------------------- Клик по ссылке в гамбургере
$( ".drawer-list a" ).click(function() {
	$('label.hamburger').trigger('click');
});
//-------------------- Табы
 $(document).ready(function(){
    $('.tabs').tabs();
  });
//-------------------- Слайдер отзывов
$(document).ready(function(){
  $('.feedback__items').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
  });
});
//-------------------- Если открыт поп-ап, то размываем задний план
$( ".js-blured-content" ).click(function() {
    $(".main-wrapper").addClass("f-blured");
});
//-------------------- Передать в форму заявк название тарифа
$(".js-tarrifs__btn").click(function() {
	var inet = $(this).attr("data-inet");
	var tv = $(this).attr("data-tv");
	var cost = $(this).attr("data-cost");
	$("input[type='text'].js-connect-inet").val(inet);
	$("input[type='text'].js-connect-tv").val(tv);
	$("input[type='text'].js-connect-cost").val(cost);
	
});
//-------------------- Форма - Заявка на подключение - Popup
	$(".js-connect_submit").click(function() {
		if ($(this).parents('form').find(".required").val()=='') {
				var inputcheck = $(this).parents('form').find(".required");
				setTimeout(function() {
				inputcheck.css('border', '1px solid #ff2f00');
				inputcheck.attr('placeholder', 'Заполните поле');
				}, 10);
				setTimeout(function() {
				inputcheck.css('border', '1px solid #009aff');
				}, 3000);
			}
		else {
				swal("Ваш запрос принят!", "Спасибо за обращение.\nВ Ближайшее время мы вам перезвоним!", "success");
				$('.js-connect-form')[0].reset();
				$(".sa-confirm-button-container button").click(function() {
					$.fancybox.close();
				});
		}
			return false
	});
//-------------------- Форма - Заявка на подключение - Юр.лицо
	$(".js-connect-biz_submit").click(function() {
		if ($(this).parents('form').find(".required").val()=='') {
				var inputcheck = $(this).parents('form').find(".required");
				setTimeout(function() {
				inputcheck.css('border', '1px solid #ff2f00');
				inputcheck.attr('placeholder', 'Заполните поле');
				}, 10);
				setTimeout(function() {
				inputcheck.css('border', '1px solid #009aff');
				}, 3000);
			}
		else {
				swal("Ваш запрос принят!", "Спасибо за обращение.\nВ Ближайшее время мы вам перезвоним!", "success");
				$('.js-connect-biz-form')[0].reset();
				$(".sa-confirm-button-container button").click(function() {
					$.fancybox.close();
				});
		}
			return false
	});
//-------------------- Форма - Заявка на подключение - На странице - Юр.лицо
	$(".js-inpage-biz-connect_submit").click(function() {
		if ($(this).parents('form').find(".required").val()=='') {
				var inputcheck = $(this).parents('form').find(".required");
				setTimeout(function() {
				inputcheck.css('border', '1px solid #ff2f00');
				inputcheck.attr('placeholder', 'Заполните поле');
				}, 10);
				setTimeout(function() {
				inputcheck.css('border', '1px solid #009aff');
				}, 3000);
			}
		else {
				swal("Ваш запрос принят!", "Спасибо за обращение.\nВ Ближайшее время мы вам перезвоним!", "success");
				$('.js-inpage-biz-connect-form')[0].reset();
		}
			return false
	});
//-------------------- Форма - Заявка на подключение - На странице
	$(".js-inpage-connect_submit").click(function() {
		if ($(this).parents('form').find(".required").val()=='') {
				var inputcheck = $(this).parents('form').find(".required");
				setTimeout(function() {
				inputcheck.css('border', '1px solid #ff2f00');
				inputcheck.attr('placeholder', 'Заполните поле');
				}, 10);
				setTimeout(function() {
				inputcheck.css('border', '1px solid #009aff');
				}, 3000);
			}
		else {
				swal("Ваш запрос принят!", "Спасибо за обращение.\nВ Ближайшее время мы вам перезвоним!", "success");
				$('.js-inpage-connect-form')[0].reset();
		}
			return false
	});
//-------------------- Форма - Заявка на подключение - На странице - Юр.лицо
	$(".js-inpage-biz-connect_submit").click(function() {
		if ($(this).parents('form').find(".required").val()=='') {
				var inputcheck = $(this).parents('form').find(".required");
				setTimeout(function() {
				inputcheck.css('border', '1px solid #ff2f00');
				inputcheck.attr('placeholder', 'Заполните поле');
				}, 10);
				setTimeout(function() {
				inputcheck.css('border', '1px solid #009aff');
				}, 3000);
			}
		else {
				swal("Ваш запрос принят!", "Спасибо за обращение.\nВ Ближайшее время мы вам перезвоним!", "success");
				$('.js-inpage-biz-connect-form')[0].reset();
		}
			return false
	});
//-------------------- Форма - Отзыв о кабельном ТВ
	$(".js-ktv-feedback_submit").click(function() {
		if ($(this).parents('form').find(".required").val()=='') {
				var inputcheck = $(this).parents('form').find(".required");
				setTimeout(function() {
				inputcheck.css('border', '1px solid #ff2f00');
				inputcheck.attr('placeholder', 'Заполните поле');
				}, 10);
				setTimeout(function() {
				inputcheck.css('border', '1px solid #009aff');
				}, 3000);
			}
		else {
				swal("Ваш запрос принят!", "Спасибо за обращение.\nВ Ближайшее время мы вам перезвоним!", "success");
				$('.js-ktv-feedback-form')[0].reset();
				$(".sa-confirm-button-container button").click(function() {
					$.fancybox.close();
				});
		}
			return false
	});
//-------------------- Форма - Письмо директору
	$(".js-letter_submit").click(function() {
		if ($(this).parents('form').find(".required").val()=='') {
				var inputcheck = $(this).parents('form').find(".required");
				setTimeout(function() {
				inputcheck.css('border', '1px solid #ff2f00');
				inputcheck.attr('placeholder', 'Заполните поле');
				}, 10);
				setTimeout(function() {
				inputcheck.css('border', '1px solid #009aff');
				}, 3000);
			}
		else {
				swal("Ваш запрос принят!", "Спасибо за обращение.\nВ Ближайшее время мы вам перезвоним!", "success");
				$('.js-letter-form')[0].reset();
				$(".sa-confirm-button-container button").click(function() {
					$.fancybox.close();
				});
		}
			return false
	});