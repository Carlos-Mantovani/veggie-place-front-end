const likeButton = document.querySelectorAll(".like-button");
const iconHearts = document.querySelectorAll(".heart-icon");

// Quero que quando um likeButton for clicado, o IconHeart tenha sua propriedade name alterada para "heart" ou "heart-outline";
iconHearts.forEach((iconHeart) => {
    iconHeart.addEventListener("click", (e) => {
        isRed = e.target.classList.contains("heart-icon");

        if (iconHeart.style.color == "red") {
            iconHeart.style.color = "rgba(0, 0, 0, 0.267)";
            console.log('Unfavorited-product')
        } else {
            iconHeart.style.color = "red";
            console.log('favorited-product')
        }

    });
});