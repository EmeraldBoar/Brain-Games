import { getRandomNumber } from '../utils/random.js';

const game = () => {
  const MAX_NUMBER = 100;
  const randomNum = getRandomNumber(1, MAX_NUMBER);
  const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
  return {
    expression: randomNum,
    correctAnswer,
  };
};

const gameData = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  game,
};

export default gameData;
