<?php
session_start();
include("ConnectionDB.php");

/* Take data by $_POST function */
$rate = $_POST['rate'];
$comment = $_POST['comment'];
$date = date("d/m/Y");

$consult = "INSERT INTO users (Calificación, Comentario, Fecha) VALUES('$rate', '$comment', '$date')";

$result = consultDB($consult);

if($result == FALSE) {
    echo "Hubo un problema al registrar su comentario.";
}
else {
    echo "¡Gracias por su comentario!";
}

?>