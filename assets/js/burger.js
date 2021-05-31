var burger = location.search.substring(1);

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

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}
executeRating(ratingStars);