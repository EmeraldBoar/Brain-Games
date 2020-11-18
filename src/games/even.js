import { getRandomNumber } from '../utils.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const createRound = () => {
  const randomNumber = getRandomNumber();
  return {
    expression: randomNumber,
    correctAnswer: isEven(randomNumber) ? 'yes' : 'no',
  };
};

const gameData = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  createRound,
};

export default gameData;
