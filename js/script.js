"use strict";

const sections = document.querySelectorAll("section");

// Tager fat om  browser vinduet og gør noget ved det
window.onscroll = () => {
    sections.forEach(sec => {

        // Får nuværende scroll position
        let scrollDistance = window.scrollY;

        // Får sektionens position ift. toppen af dokumentet
        let secDistance = sec.offsetTop;

        // Hvis sektionen er kommet ind i synsfeltet, tilføjes der "show-animate" ellers fjernes den
        if (scrollDistance >= secDistance) {
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    });
};

const sectionOne = document.querySelector(".sec1");

sectionOne.addEventListener("mouseover", function(){
    // "this" får den anonyme "function" til at samarbejde med eventlistener funktionen
    // Da der allerede står det er en klasse, skal der ikke være . foran scale
    this.classList.add("scale");
});

sectionOne.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});


//#region Images
const horseBtn = document.getElementById("horseElem");
const polarBtn = document.getElementById("bearElem");
const dogBtn = document.getElementById("dogElem");


const soundHorse = new Audio();
soundHorse.src = "sound/hamonica.mp3";

const soundPolar = new Audio();
soundPolar.src = "sound/acoustic-guitar-loop-f-91bpm-132687.mp3";

const soundDog = new Audio();
soundDog.src = "sound/dog.wav";


if (horseBtn) {
  horseBtn.addEventListener("click", () => {
    soundHorse.play();
  });
}

if (horseBtn) {
    horseBtn.addEventListener("click", function() {
        this.classList.toggle("anim-rotate");
    })
}


if (polarBtn) {
  polarBtn.addEventListener("click", () => {
    soundPolar.play();
  });
}

if (dogBtn) {
  dogBtn.addEventListener("click", () => {
    soundDog.play();
  });
}


//#endregion


