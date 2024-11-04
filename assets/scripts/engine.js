const teclasPiano = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

// Função para tocar o som de uma tecla
const playTune = (key) => {
    const audio = new Audio(`assets/tunes/${key}.wav`); // Cria um novo objeto Audio
    audio.volume = volumeSlider.value; // Aplica o volume atual do slider
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

// Configura eventos de clique para cada tecla do piano
teclasPiano.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

// Configura evento de pressionamento de tecla para o teclado
document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

// Função para ajustar o volume de todas as novas instâncias de áudio
const handleVolume = (e) => {
    volumeSlider.value = e.target.value;
};

// Função para mostrar ou ocultar teclas
const showHiddenKeys = () => {
    teclasPiano.forEach(key => key.classList.toggle("hide"));
};

// Eventos para controlar volume e visibilidade das teclas
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHiddenKeys);
