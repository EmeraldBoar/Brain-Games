import { getRandomNumber } from '../utils/random.js';

const createsRound = () => {
  const MAX_NUMBER = 100;
  let firstNum = getRandomNumber(MAX_NUMBER);
  let secondNum = getRandomNumber(MAX_NUMBER);

  const expression = `${firstNum} ${secondNum}`;

  while (firstNum !== secondNum) {
    if (firstNum < secondNum) {
      secondNum -= firstNum;
    } else {
      firstNum -= secondNum;
    }
  }
  return {
    expression,
    correctAnswer: String(secondNum),
  };
};

const gameData = {
  description: 'Find the greatest common divisor of given numbers.',
  createsRound,
};

export default gameData;
