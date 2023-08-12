import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

dateInput.style.fontSize = '20px';

startBtn.style.fontSize = '20px';
startBtn.style.backgroundColor = '#D2B48C';
startBtn.style.borderRadius = '4px';
startBtn.disabled = true;

timer.style.display = 'flex';
timer.style.gap = '20px';
timer.style.marginTop = '30px';
timer.style.fontSize = '20px';

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      selectedDate = selectedDates[0].getTime();
      startBtn.disabled = false;
    }
  },
};

const fp = flatpickr(dateInput, options);

let intervalId = null;
let currentDate;

startBtn.addEventListener('click', countdownTimer);

function countdownTimer() {
  counter.start();
}
const counter = {
  start() {
    intervalId = setInterval(() => {
      currentDate = Date.now();
      const deltaTime = selectedDate - currentDate;
      updateTimerface(convertMs(deltaTime));
      startBtn.disabled = true;
      dateInput.disabled = true;

      if (deltaTime <= 1000) {
        this.stop();
        Notiflix.Notify.info(
          'Timer stopped! You can choose a new date or refresh this page to set a new timer'
        );
      }
    }, 1000);
  },

  stop() {
    startBtn.disabled = true;
    dateInput.disabled = false;
    clearInterval(intervalId);
    return;
  },
};

function updateTimerface({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
