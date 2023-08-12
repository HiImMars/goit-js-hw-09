import Notiflix from 'notiflix';

const promiseForm = document.querySelector('.form');
const options = {
  position: 'center-bottom',
  distance: '15px',
  borderRadius: '15px',
  timeout: 8000,
  clickToClose: true,
  cssAnimationStyle: 'from-bottom',
};

promiseForm.addEventListener('submit', onPromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromise(event) {
  event.preventDefault();
  // console.log(event.currentTarget.elements.amount.value);
  const { delay, step, amount } = event.currentTarget.elements;
  let promiseDelay = Number(delay.value);
  let promiseStep = Number(step.value);
  let promiseAmount = Number(amount.value);
  let position = 0;

  if (amount <= 0 || delay < 0 || step < 0) {
    Notiflix.Notify.failure(` Please input correct values (>=0)`);
  }

  for (let i = 0; i <= promiseAmount; i += 1) {
    position = i;

    createPromise(position, promiseDelay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          options
        )
      )
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          options
        );
      });
    promiseDelay += promiseStep;
  }
  event.currentTarget.reset();
}
