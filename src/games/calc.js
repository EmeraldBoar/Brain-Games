import getRandomNum from '../utils/random.js';

const game = (maxNum = 100) => {
  const operators = ['+', '-', '*'];

  const firstNum = getRandomNum(maxNum);
  const secondNum = getRandomNum(maxNum);

  const randomOperator = operators[getRandomNum(operators.length - 1)];

  const result = {
    expression: `${firstNum} ${randomOperator} ${secondNum}`,
    correctAnswer: '',
  };

  switch (randomOperator) {
    case '+': result.correctAnswer = String(firstNum + secondNum);
      break;
    case '-': result.correctAnswer = String(firstNum - secondNum);
      break;
    case '*': result.correctAnswer = String(firstNum * secondNum);
      break;
    default:
  }
  return result;
};

const gameData = {
  rules: 'What is the result of the expression?',
  game,
};

export default gameData;
