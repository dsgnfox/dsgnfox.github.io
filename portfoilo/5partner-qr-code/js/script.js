//Лейбл поднимается вверх
$(document).on('change', '.input__animation', function() {
	if($(this).val())
		$(this).addClass('has_value');
	else
		$(this).removeClass('has_value');
})
$('.input__animation').change();

//Появление крестика в инпуте, если введно больше 3 знаков
$(document).on('keyup', 'input, textarea', function() {
	var max = 3;
	var len = $(this).val().length;
	if(len >= max)
		$(this).siblings('.input__clear').show();
	else
		$(this).siblings('.input__clear').hide();
	if ($(this).is('textarea')) {
		max = 23;
		if(len >= max)
			$(this).attr('rows', '5');
		else
			$(this).attr('rows', '1');
	}
});
$('input, textarea').trigger('keyup');

// Очистка поля по нажатию на крестик
$(document).on('click', '.input__clear', function() {
	$(this).siblings('input, textarea').val('').change();
	$(this).hide();
});

// Переключалка чекбоксов как на айфоне
function switchInit() {
	var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
	elems.forEach(function(html) {
		var switchery = new Switchery(html, {
			color: '#E9C8EC',
			secondaryColor: '#F1F1F1',
			jackColor: '#851D8F',
			jackSecondaryColor: '#C6C5C5'
		});		
	});
}
switchInit();

// Проверка формы
$('.form__submit').on('click', function(e) {
	e.preventDefault();
  	var thisForm = $(this).parents(".form");
 	var isvalidate = thisForm[0].checkValidity();
  	if (isvalidate) {
	    e.preventDefault();
	    $('.content').hide();
		$('.form-success').show();
		setTimeout(function() {
			$('.form-success').css('opacity', '1');
		}, 500);
		setTimeout(function() {
			$('.form-success__icon svg').show();
		}, 1000);
		$('html,body').animate({scrollTop: $('.wrapper').offset().top},'1000');
	} else {
			var inp = thisForm.find('input[required]');
			inp.next().children().text(inp.attr('data-error') || 'Это поле обязательное');
			inp.next().children().addClass('input__error');
			inp.next().children().css('animation', 'shake 1s ease-in-out');
			setTimeout(function() {
				inp.next().children().removeClass('input__error');
				inp.next().children().removeAttr('style');
			}, 4000);
	  	}
});

//Добавление файлов при загрузке
$(function() {
	$(document).on('click', '#uploaded_files button', function(e) {
		e.preventDefault();
		$(this).parent('.file').remove();
	});
	$('.upload_input input[type=file]').val('');
	$(document).on('change', '.upload_input input[type=file]', function() {
		var accept = $(this).attr('accept');
		if (~accept.indexOf(this.files[0].type)) {
			var block = $('<div class="file"></div>');
			var name = this.files[0].name;
			var inp = $(this).clone();
			block.append('<span class="name">'+name+'</span><button type="button">удалить</button>');
			block.append(inp);
			$('#uploaded_files').append(block);
		}
		$(this).val('');
	});
});

// сумма для поля "общий счетчик""
$(document).on('keyup change', '#input__counter_color, #input__counter_bw', function() {
	var sum = 0;
	var c = parseInt($('#input__counter_color').val());
	var bw = parseInt($('#input__counter_bw').val());
	if (!isNaN(c)) sum += c;
	if (!isNaN(bw)) sum += bw;
	$('#input__counter_copies').val(sum).trigger('change');
});

// добавляем текст в плейсхолдер, если активен свитч
$(document).on('change', '#form__details-switcher', function() {
	var desc = $('#form__description');
	if ($(this).is(':checked')) {
		desc.text(desc.text() + ", Подробности в офисе");
	} else {
		desc.text(desc.text().replace(', Подробности в офисе', ''));
	}
});

// информация о заказчике
$(document).on('click', '.spoiler', function() {
	$(this).toggleClass('active');
	$(this).next('.spoiler_content').slideToggle();
});