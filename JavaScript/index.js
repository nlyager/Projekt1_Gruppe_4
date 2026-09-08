// Definer index scroll knap
var toCardButton = document.getElementsByClassName("scroll-to-card")[0]
var mainCover = document.getElementsByClassName("main")[0]
var mainTextContainer = document.getElementById("main-text-container")

goToCards = function() {
    window.scrollTo({
        top: window.scrollY + document.getElementsByClassName("card-select")[0].getBoundingClientRect().y - 80,
        behavior: "smooth"
    })
}

toCardButton.addEventListener("click", goToCards)

enableTransparent()
checkTransparent()

if (!document.referrer || new URL(document.referrer).host !== location.host) {
    doAnimation();
}

function doAnimation() {
    mainTextContainer.style.opacity = "0";
    mainCover.style.opacity = "0";
    mainCover.style.transform = "scale(1.1)";
    document.body.style.overflowX = "hidden";

    window.onload = function() {

        setTimeout(function(){

            mainCover.style.transition = "transform 0.5s, opacity 0.5s";
            mainCover.style.transform = "scale(1)";
            mainCover.style.opacity = "1";

            mainTextContainer.style.transition = "opacity 1s";
            mainTextContainer.style.opacity = "1";
        }, 10)
    }
}
