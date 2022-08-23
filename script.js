let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let color3 = document.querySelector('.color3');
let bgValue = document.querySelector('#bgValue');
let containerBg = document.querySelector('.container-bg');
const randomBackground = document.querySelector('.random-background');

containerBg.onload = randomGradient();

function setGradient() {
    containerBg.style.background = 'linear-gradient(to right,' + color1.value + ", " + color2.value + ", " + color3.value + ")";
    bgValue.textContent = `${color1.value}, ${color2.value}, ${color3.value}`
}

function randomColors() {
    let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A', 'B', 'C', 'D', 'E', 'F'];
    let newColor = [];
    for(let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * hexValues.length);
        newColor.push(hexValues[randomValue]);
    }
    return newColor.join("");  
}

function randomGradient() {
    color1.value = "#" + randomColors();
    color2.value = "#" + randomColors();
    color3.value = "#" + randomColors();

    containerBg.style.background = 'linear-gradient(to right,' + color1.value + ", " + color2.value + ", " + color3.value + ")";

    bgValue.textContent = `${color1.value}, ${color2.value}, ${color3.value}`
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
color3.addEventListener('input', setGradient);
randomBackground.addEventListener('click', randomGradient);