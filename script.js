'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ NO number`;
  }
  // when players win
  else if (guess == number) {
    document.querySelector(`.message`).textContent = ` 🎉Correct Number !!!`;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `33rem`;

    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
    }
    //when guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(
        `.message`
      ).textContent = `⬆ The guess is too high`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `😟You lost the game`;
      document.querySelector(`.score`).textContent = 0;
    }

    //when guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `⬇ The guess is too low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `😟You lost the game`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
  document.querySelector(`.highscore`).textContent = highscore;
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
