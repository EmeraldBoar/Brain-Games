import getRandomNum from '../utils/random.js';

const game = (maxNum = 100) => {
  const randomNum = getRandomNum(maxNum);

  const result = {
    expression: randomNum,
    correctAnswer: '',
  };

  let isPrime = false;

  if (randomNum % 2 === 0) {
    isPrime = false;
  } else if (randomNum === 2 || randomNum === 1) {
    isPrime = true;
  } else {
    const randomNumSqrt = Math.sqrt(randomNum);
    for (let i = 3; i < randomNumSqrt; i += 2) {
      if (randomNum % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }

  if (isPrime) {
    result.correctAnswer = 'yes';
  } else {
    result.correctAnswer = 'no';
  }
  return result;
};

const gameData = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  game,
};

export default gameData;
