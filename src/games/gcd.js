import { getRandomNumber } from '../utils/random.js';

const calculateTheAnswer = (firstNumber, secondNumber) => {
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
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const expression = `${firstNumber} ${secondNumber}`;

  return {
    expression,
    correctAnswer: calculateTheAnswer(firstNumber, secondNumber),
  };
};

const gameData = {
  description: 'Find the greatest common divisor of given numbers.',
  createRound,
};

export default gameData;
