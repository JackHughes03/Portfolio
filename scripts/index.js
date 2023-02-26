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

function playpause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

var formHeight = document.querySelector('form').clientHeight;
document.querySelector('#backgroundform').style.height = (formHeight + 50) + 'px';

function changefr() {
    // Define the translations from English to French
    const translations = {
        'Hello': 'Bonjour',
        'Welcome': 'Bienvenue',
        'Home': 'Accueil',
        // Add more translations here
    };
    
    // Loop through all elements in the document and replace their English text with French text
    const elements = document.querySelectorAll('*');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const originalText = element.textContent;
        const translatedText = translations[originalText];
        if (translatedText) {
            element.textContent = translatedText;
        }
    }
}

function changefr() {
    var translate = document.getElementById("google_translate_element");

    if (translate.style.display === "block") {
        translate.style.display = "none";
    }
    else {
        translate.style.display = "block";
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}