<?php
if (isset($_GET['name'])) $name=$_GET['name']; else $name='';
if (isset($_GET['phone'])) $phone=$_GET['phone']; else $phone='';
$to  = 'Заявка с сайта <a.nesterenko@lnet.su>'; 
$subject = 'LNET :: Заявка с сайта'; 
$message = "<h3 style='color: #000;'>Запрос на бесплатную консультацую:</h3>
			<p><b style='color: #000;'>Имя:</b> $name
			<br/><b style='color: #000;'>Телефон:</b> $phone
			</p>
			";
			
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: '.$name_. '<lnet.su>' . "\r\n";
$headers .= "Reply-To: a.nesterenko@lnet.su\r\n"; 

if (mail($to, $subject, $message, $headers)) {
	echo '1';
} else echo '0';
?>