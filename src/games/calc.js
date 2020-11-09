import { getRandomNumber } from '../utils/random.js';

const calculatingTheAnswer = (operator, firstNumber, secondNumber) => {
  let answer = '';
  switch (operator) {
    case '+':
      answer = String(firstNumber + secondNumber);
      break;
    case '-':
      answer = String(firstNumber - secondNumber);
      break;
    case '*':
      answer = String(firstNumber * secondNumber);
      break;
    default:
  }
  return answer;
};

const createRound = () => {
  const MIN_NUMBER = 0;
  const operators = ['+', '-', '*'];

  const firstNum = getRandomNumber(MIN_NUMBER);
  const secondNum = getRandomNumber(MIN_NUMBER);

  const randomOperator = operators[getRandomNumber(MIN_NUMBER, operators.length - 1)];

  const result = {
    expression: `${firstNum} ${randomOperator} ${secondNum}`,
    correctAnswer: calculatingTheAnswer(randomOperator, firstNum, secondNum),
  };
  return result;
};

const gameData = {
  description: 'What is the result of the expression?',
  createRound,
};

export default gameData;
