var video = document.getElementById("videomain");
video.autoplay = true;
video.loop = true;
video.muted = true;
video.play();

function option1clicked() {
    var optionslist = document.getElementById("optionslist");

    if(optionslist.style.display === "grid") {
        optionslist.style.display = "none";
    } else {
        optionslist.style.display = "grid";
    }
}