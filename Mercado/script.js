const sliders = document.querySelector(".box-carousel-product")
var scrollPerClick = document.querySelector(".container-product").clientWidth;
var scrollAmount = 0;

function sliderScrollLeft(){
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if(scrollAmount < 0){
        scrollAmount = 0
    }
}

function sliderScrollRight(){
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        })
    }
}