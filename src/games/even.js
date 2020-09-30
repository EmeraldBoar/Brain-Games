import getRandomNum from '../utils/random.js';

const game = (maxNum = 100) => {
  const randomNum = getRandomNum(maxNum);
  const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
  return {
    expression: randomNum,
    correctAnswer,
  };
};

const gameData = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  game,
};

export default gameData;
