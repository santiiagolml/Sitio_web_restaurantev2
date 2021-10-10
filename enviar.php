<?php
$asunto = $_POST['asunto'];
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$serv = $_POST  ['servicio'];
$servicio = $_POST['servicioe'];

$header = 'From: ' . $correo . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$message .= "Su e-mail es: " . $correo . " \r\n";
$message .= "Requiere este servicio: " . $serv . " \r\n";
$message .= "Servicio especial?: " . $_POST['servicioe'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'fabioannypro47@gmail.com';


mail($para, $asunto, utf8_decode($message), $header);
mail($correo, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
