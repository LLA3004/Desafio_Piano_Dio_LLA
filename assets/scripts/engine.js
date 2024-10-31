const teclasPiano = document.querySelectorAll(".piano-keys .key ")


const playTune = (key)=> {}
teclasPiano.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=>playTune(key.dataset));
    })


