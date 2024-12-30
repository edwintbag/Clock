const analogClock = document.querySelector('.analog-clock');
const digitalClock = document.querySelector('.digital-clock');
const toggleBtn = document.getElementById('toggle-btn');
const digitalTime = document.getElementById('digital-time');

let showAnalog = true;

// Update Analog Clock
function updateAnalogClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (hours * 30) + (minutes / 2); // 360/12 = 30
  const minuteDeg = (minutes * 6); // 360/60 = 6
  const secondDeg = (seconds * 6);

  document.querySelector('.hand.hour').style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector('.hand.minute').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('.hand.second').style.transform = `rotate(${secondDeg}deg)`;
}

// Update Digital Clock
function updateDigitalClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  digitalTime.textContent = `${hours}:${minutes}:${seconds}`;
}

// Toggle Clock Mode
toggleBtn.addEventListener('click', () => {
  showAnalog = !showAnalog;
  analogClock.style.display = showAnalog ? 'block' : 'none';
  digitalClock.style.display = showAnalog ? 'none' : 'block';
  toggleBtn.textContent = showAnalog ? 'Switch to Digital' : 'Switch to Analog';
});

// Initialize Clock
function initializeClock() {
  analogClock.style.display = 'block';
  setInterval(() => {
    updateAnalogClock();
    updateDigitalClock();
  }, 1000);
}

initializeClock();