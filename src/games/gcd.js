import { getRandomNumber } from '../utils/random.js';

const calculatingTheAnswer = (firstNumber, secondNumber) => {
  let firstNum = firstNumber;
  let secondNum = secondNumber;
  while (firstNum !== secondNum) {
    if (firstNum < secondNum) {
      secondNum -= firstNum;
    } else {
      firstNum -= secondNum;
    }
  }
  return String(secondNum);
};

const createRound = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const expression = `${firstNumber} ${secondNumber}`;

  return {
    expression,
    correctAnswer: calculatingTheAnswer(firstNumber, secondNumber),
  };
};

const gameData = {
  description: 'Find the greatest common divisor of given numbers.',
  createRound,
};

export default gameData;
