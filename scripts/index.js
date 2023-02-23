var video = document.getElementById("videomain");
video.autoplay = true;
video.loop = true;
video.muted = true;
video.play();

var navbuttons = document.getElementsByClassName("navbuttons");

const hamBurger = document.querySelector('.ham8');
hamBurger.addEventListener('click', () => {
    // display navbuttons
    for (var i = 0; i < navbuttons.length; i++) {
        navbuttons[i].style.display = "block";
    }
});