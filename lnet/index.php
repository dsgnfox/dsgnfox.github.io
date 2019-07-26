<?php
$title='Группа компаний СЕТИ :: Монтаж локальных сетей, СКУД, ОПС, видеонаблюдение и электропроводки';
$description='Более 4000 выполненых проектов с 2014 года. Получите бесплатную консультацию инженера.';
$keywords='';
?>
<?php include "main/header.php"; ?>
<body>
	<div class="hero-img" id="main">
		<div class="container">
			<div class="header">
				<a href='/' class="logo" data-aos="fade-up" data-aos-delay="0">
					<div class="logo__img"><img src="img/logo.png" srcset="img/logo@2x.png 2x" alt=""></div>
					<div class="logo__txt">LNET</div>
				</a>
				<div class="header__menu">
					<a href="#activity" class="header__link" data-aos="fade-up"  data-aos-delay="100">Виды деятельности</a>
					<a href="#our-object" class="header__link" data-aos="fade-up" data-aos-delay="300">Наши объекты</a>
					<a href="#license" class="header__link" data-aos="fade-up" data-aos-delay="400">Лицензии</a>
					<a href="#contact" class="header__link" data-aos="fade-up" data-aos-delay="500">Контакты</a>
				</div>
				<div class="header__right" data-aos="fade-up" data-aos="fade-up" data-aos-delay="600">
					<a href="tel:88005501961" class="header__phone">8 800 550-19-61</a>
					<div class="header__adress">Москва, Большая Татарская, 34/2</div>
				</div>
				<div class="mmenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div class="hero-img__title" data-aos="fade-up" data-aos-delay="700">Проектирование и&nbsp;монтаж cлаботочных систем</div>
			<div class="hero-img__form" data-aos="fade-up" data-aos-delay="800"">
				<form action="" class="js-form">
					<div class="form__title">Получите бесплатную консультацию инженера</div>
					<div class="form__items">
						<input type="text" class="form__input js-form-name" placeholder="Имя" required>
						<input type="text" class="form__input js-form-tel" placeholder="Телефон" required>
						<button class="form__btn js-btn-send">Получить</button>
					</div>
				</form>
			</div>
		</div>
		
		<?php include "items/hero-img-boxes.php"; ?>

		<div class="hero-img-gradient" style="background: -moz-linear-gradient(45deg, #011900 0%, #006f41 100%); background: -webkit-linear-gradient(45deg, #011900 0%,#006f41 100%); background: linear-gradient(45deg, #011900 0%,#006f41 100%);"></div>
		<div class="hero-img-pic" style="background-image: url('img/header-bg-main-page.jpg');"></div>
	</div>

	<?php include "items/faces.php"; ?>

	<?php include "items/our-clients.php"; ?>

	<?php include "items/activity.php"; ?>	

	<?php include "items/box-form.php"; ?>

	<?php include "items/our-object.php"; ?>
		
	<?php include "items/feedback.php"; ?>

	<?php include "items/box-form.php"; ?>

	<?php include "items/license.php"; ?>

	<?php include "items/contact.php"; ?>

	<footer class="footer">
		<div class="section">
			<div class="container">
				<div class="footer__menu" data-aos="fade-up" data-aos-delay="0">
					<a href="#main" class="footer__link" data-aos="fade-up" data-aos-delay="200">Бесплатная консультация</a>
					<a href="#our-clients" class="footer__link">Наши клиенты</a>
					<a href="#faces" class="footer__link">Лица компании</a>
					<a href="#activity" class="footer__link">Виды деятельности</a>
					<a href="#our-object" class="footer__link">Наши объекты</a>
					<a href="#feedback" class="footer__link">Отзывы клиентов</a>
					<a href="#license" class="footer__link">Лицензии</a>
				</div>
				<div class="footer__copyright">2014 — 2019</div>
			</div>
		</div>
	</footer>

	<div class="modal-mmenu" style="display: none;">
		<div class="modal-mmenu__txt">
			<ul>
				<li><a href="#main" class="header__link">Бесплатная консультация</a></li>
				<li><a href="#our-clients" class="header__link">Наши клиенты</a></li>
				<li><a href="#faces" class="header__link">Лица компании</a></li>
				<li><a href="#activity" class="header__link">Виды деятельности</a></li>
				<li><a href="#our-object" class="header__link">Наши объекты</a></li>
				<li><a href="#feedback" class="header__link">Отзывы клиентов</a></li>
				<li><a href="#license" class="header__link">Лицензии</a></li>
				<li><a href="#contact" class="header__link">Контакты</a></li>
				<li><a href="https://yandex.ru/maps/213/moscow/?from=api-maps&l=map&ll=37.621361%2C55.739176&mode=routes&origin=jsapi_2_1_73&rtext=~55.738176%2C37.633661&rtt=pd&z=15" class="header__link" traget='_blank'>Как добраться</a></li>
			</ul>
			<a href="tel:88005501961" class="header__phone">8 800 550-19-61</a>
			<div class="header__adress">Москва, Большая Татарская, 34/2</div>
		</div>
		<div class="modal-mmenu__bg"></div>
	</div>


	<?php include "main/js-scripts.php"; ?>
	


</body>
</html>