var burger = location.search.substring(1);
var rate = 0;
console.log("Hola");

$(document).ready(function() {
    var image = "index.jpg";
    var name = "";
    var ingredients = "";

    if (burger == "regia") {
        image = "regia.jpg";
        name = "La Regia";
        ingredients = "Carne, queso blanco, tocino, salchicha y guacamole";
    } else if (burger == "bbq") {
        image = "bbq.png";
        name = "BBQ Burger";
        ingredients = "Carne, queso americano, salsa bbq, aros de cebolla empanizados y tocino";
    } else if (burger == "chili") {
        image = "chili.png";
        name = "Chili House";
        ingredients = "Carne, chili house, queso americano, mostaza, pepinillos, cebolla y tomate";
    } else if (burger == "teriyaki") {
        image = "teriyaki.jpeg";
        name = "Teriyaki Burger";
        ingredients = "Carne, queso blanco, salsa teriyaki, piña, cebolla caramelizada, lechuga, tomate y mayonesa";
    } else if (burger == "deluxe") {
        image = "deluxe.jpg";
        name = "Burger Deluxe";
        ingredients = "Carne, queso blanco, tocino, chile california, lechuga, tomate, cebolla y salsa de cilantro";
    } else if (burger == "street") {
        image = "street.jpg";
        name = "Street Burger";
        ingredients = "Carne, queso americano, wini rojo, mayonesa, lechuga, tomate, pepinillo, cebolla caramelizada, catsup y mostaza";
    } else if (burger == "chicken") {
        image = "chicken.jpeg";
        name = "Chicken Buffalo Ranch";
        ingredients = "Pechuga empanizada, queso blanco, tocino, lechuga, tomate, y aderezo ranch";
    } else if (burger == "chili-fries") {
        image = "chili-fries.jpg";
        name = "Chili Pit's Fries";
        ingredients = "Papas Fritas, chili y mezcla de queso americano y blanco";
    } else {
        window.location.href = "index.html"
    }

    $('#burger-image').css('background-image', "url('assets/img/" + image + "')");
    $('#burger-name').html(name);
    $('#ingredients').html(ingredients);

    var info = "burger=" + burger;
    var no_error = true;

    console.log(info);

    $.ajax({
        url: "get-comments.php",
        data: info,
        async: false,
        type: "POST",
        dataType: "text",
        success: function(data) {
            $('#comments').html(data);
        }
    });
});

// Prevent reload
$(document).ready(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
    });
});

// Try insert new user
$('#submit').click(function() {
    var form = $("form")[0];
    form.checkValidity();
    form.reportValidity();

    if (form.reportValidity()) {

        var comment = document.getElementById('comment').value;

        var info = "comment=" + comment + "&rate=" + rate + "&burger=" + burger;
        var no_error = true;

        console.log(info);

        $.ajax({
            url: "RegisterOpinion.php",
            data: info,
            async: false,
            type: "POST",
            dataType: "text",
            success: function(data) {
                no_error = data;
            }
        });

        console.log(no_error);

        if (no_error) {
            $(".sent-message").show();
        } else {
            $('.error-message').html("Hubo un problema al registrar su comentario.").show();
        }

    } else {
        return;
    }
});

const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);
            rate = i + 1;
            console.log(rate);

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) {
                    stars[i].className = starClassActive;
                }
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}
executeRating(ratingStars);

/*
<div class="col-lg-6 menu-item filter-hamburguesas">
    <div class="menu-content">
        <span class="rate"></span><span id="date"></span>
    </div>
    <div class="comment"></div>
</div>

*/