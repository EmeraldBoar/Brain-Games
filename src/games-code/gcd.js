import getRandomNum from '../utils/random.js';

const gcdGame = (maxNum = 1000) => {
  let firstNum = getRandomNum(maxNum);
  let secondNum = getRandomNum(maxNum);

  const expression = `${firstNum} ${secondNum}`;

  while (firstNum !== secondNum) {
    if (firstNum < secondNum) {
      secondNum -= firstNum;
    } else {
      firstNum -= secondNum;
    }
  }
  return [
    {
      conditionsOfTheGame: 'Find the greatest common divisor of given numbers.',
    },
    {
      expression,
      correctAnswer: String(secondNum),
    },
  ];
};

export default gcdGame;
