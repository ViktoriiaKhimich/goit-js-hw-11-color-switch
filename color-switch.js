const colors = [
    '#FFFFFF', 
    '#2196F3', 
    '#4CAF50', 
    '#FF9800', 
    '#009688', 
    '#795548', 
  ];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
}

refs.startBtn.addEventListener('click', changeBodyColor);
refs.stopBtn.addEventListener('click', stopBodyColor);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

let timeId = null;
let isActive = false;

function changeBodyColor () {
    if (isActive) {
        return;
    }
    isActive = true;
    timeId = setInterval(() => {
        const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.backgroundColor = colors[randomColorIndex]; 
    }, 1000)
}

function stopBodyColor() {
    clearInterval(timeId);
    isActive = false;
}
