import { getRandomNumber } from '../utils/random.js';

const game = () => {
  const MAX_NUMBER = 100;
  const operators = ['+', '-', '*'];

  const firstNum = getRandomNumber(MAX_NUMBER);
  const secondNum = getRandomNumber(MAX_NUMBER);

  const randomOperator = operators[getRandomNumber(operators.length - 1)];

  const result = {
    expression: `${firstNum} ${randomOperator} ${secondNum}`,
    correctAnswer: '',
  };

  switch (randomOperator) {
    case '+':
      result.correctAnswer = String(firstNum + secondNum);
      break;
    case '-':
      result.correctAnswer = String(firstNum - secondNum);
      break;
    case '*':
      result.correctAnswer = String(firstNum * secondNum);
      break;
    default:
  }
  return result;
};

const gameData = {
  description: 'What is the result of the expression?',
  game,
};

export default gameData;
