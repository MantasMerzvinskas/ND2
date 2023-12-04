let currentLight = 'red';
let blinkInterval;

function changeLight(color) {
  if (color !== currentLight) {
    document.querySelector(`.${currentLight}-light`).style.backgroundColor = '';
    currentLight = color;
    document.querySelector(`.${color}-light`).style.backgroundColor = color;
    clearInterval(blinkInterval);
  }
}

function turnOnAllLights() {
  document.querySelector('.red-light').style.backgroundColor = 'red';
  document.querySelector('.yellow-light').style.backgroundColor = 'yellow';
  document.querySelector('.green-light').style.backgroundColor = 'green';
  clearInterval(blinkInterval);
}

function blinkYellow() {
  clearInterval(blinkInterval);
  blinkInterval = setInterval(() => {
    const yellowLight = document.getElementById('yellow-light');
    yellowLight.style.backgroundColor = yellowLight.style.backgroundColor === 'yellow' ? '' : 'yellow';
  }, 500);
}
function turnOffAllLights() {
  clearInterval(blinkInterval);
  document.querySelector('.red-light').style.backgroundColor = '';
  document.querySelector('.yellow-light').style.backgroundColor = '';
  document.querySelector('.green-light').style.backgroundColor = '';
  currentLight = '';
}