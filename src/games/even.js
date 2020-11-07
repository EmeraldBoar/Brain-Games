import { getRandomNumber } from '../utils/random.js';

const calculatingTheAnswer = (randomNumber) => {
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return correctAnswer;
};

const createRound = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const randomNum = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  return {
    expression: randomNum,
    correctAnswer: calculatingTheAnswer(randomNum),
  };
};

const gameData = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  createRound,
};

export default gameData;
