const teclasPiano = document.querySelectorAll(".piano-keys .key ")

let audio = new Audio(".src/tunes/a.wav");

const playTune = (Key) => {
    audio.play();
};

teclasPiano.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=>playTune(key.dataset));
    })


