import getRandomNum from '../utils/random.js';

const game = (maxNum = 100) => {
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
  return {
    expression,
    correctAnswer: String(secondNum),
  };
};

const gameData = {
  rules: 'Find the greatest common divisor of given numbers.',
  game,
};

export default gameData;
