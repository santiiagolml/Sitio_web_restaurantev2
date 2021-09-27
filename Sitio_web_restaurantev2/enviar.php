<?php
$asunto = $_POST['asunto'];
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$servicio = $_POST['servicio'];

$header = 'From: ' . $correo . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$message .= "Su e-mail es: " . $correo . " \r\n";
$message .= "Teléfono de contacto: " . $servicio . " \r\n";
$message .= "Mensaje: " . $_POST['servicio'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'andres.tateno@gmail.com';
$asunto = 'Mensaje de... (Escribe como quieres que se vea el remitente de tu correo)';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
-->
