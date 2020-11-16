import { getRandomNumber } from '../utils.js';

const calculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      return '';
  }
};

const createRound = () => {
  const MIN_NUMBER = 0;
  const operators = ['+', '-', '*'];

  const firstNum = getRandomNumber(MIN_NUMBER);
  const secondNum = getRandomNumber(MIN_NUMBER);

  const randomOperator = operators[getRandomNumber(MIN_NUMBER, operators.length - 1)];

  const result = {
    expression: `${firstNum} ${randomOperator} ${secondNum}`,
    correctAnswer: calculate(randomOperator, firstNum, secondNum),
  };
  return result;
};

const gameData = {
  description: 'What is the result of the expression?',
  createRound,
};

export default gameData;
