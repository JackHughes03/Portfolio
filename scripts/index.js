var video = document.getElementById("videomain");
video.autoplay = true;
video.loop = true;
video.muted = true;
video.play();

var navbuttons = document.getElementsByClassName("navbuttons");

const hamBurger = document.querySelector('.ham8');
var navbuttonsback = document.getElementById("navbuttonsback");
hamBurger.addEventListener('click', () => {
    // display navbuttons
    if(navbuttons[0].style.display === "block") {
    for (var i = 0; i < navbuttons.length; i++) {
        navbuttons[i].style.display = "none";
    }
    navbuttonsback.style.display = "none";
    } else {
        for (var i = 0; i < navbuttons.length; i++) {
            navbuttons[i].style.display = "block";
        }
        navbuttonsback.style.display = "block";
    }
});