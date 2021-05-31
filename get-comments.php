<?php
include('ConnectionDB.php');

$count = 0;
$burger = $_POST["burger"];

$sql = "SELECT Calificación, Comentario, DATE_FORMAT(Fecha, '%d/%m/%Y') AS Fecha FROM opiniones WHERE Hamburguesa = '$burger'";

if (!($result = consultDB($sql))) {
    echo "<div class='section-title'>";
    echo "<h2><span id='error-comments'>";
    echo "Hubo un problema al cargar los comentarios.";
    echo "</span></h2></div>";
} else {
    while ($row = mysqli_fetch_array($result)) {
        $rate = $row["Calificación"];
        $date = $row["Fecha"];
        $comment = $row["Comentario"];

        if (isset($comment)) {
            echo "<div class='col-lg-6 menu-item filter-hamburguesas'>";
            echo "<div class='menu-content'>";
            echo "<span class='rate'>";
            for ($i = 0; $i < $rate; $i++) {
                echo "<i class='fas fa-star'></i>";
            }
            for ($i = $rate; $i < 5; $i++) {
                echo "<i class='far fa-star'></i>";
            }
            echo "</span><span id='date'>" . $date . "</span>";
            echo "</div>";
            echo "<div class='comment'>" . $comment . "</div>";
            echo "</div>";
            $count++;
        }
    }
    if ($count <= 0) {
        echo "<div class='section-title'>";
        echo "<h2><span id='no-comments'>";
        echo "No existen comentarios aún para esta Burger.";
        echo "</span></h2></div>";
    }
}
