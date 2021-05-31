<?php
session_start();
include("ConnectionDB.php");

/* Take data by $_POST function */
$burger = $_POST['burger'];
$rate = $_POST['rate'];
$comment = $_POST['comment'];
$date = date("Y/m/d");

$consult = "INSERT INTO opiniones (Hamburguesa, Calificación, Comentario, Fecha) VALUES('$burger', $rate, '$comment', '$date')";

$result = consultDB($consult);

if($result == FALSE) {
    echo 0;
    // echo "Hubo un problema al registrar su comentario.";
}
else {
    echo 1;
    // echo "¡Gracias por su comentario!";
}

?>