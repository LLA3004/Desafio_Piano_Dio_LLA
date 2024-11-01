const teclasPiano = document.querySelectorAll(".piano-keys .key ")

let audio = new Audio("assets/tunes/a.wav");

const playTune = (key) => {
    
   audio.src=`assets/tunes/${key}.wav`
    audio.play();
};

teclasPiano.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});



document.addEventListener("keydown")
