import { getRandomNumber } from '../random.js';

const calculateTheAnswer = (randomNumber) => {
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return correctAnswer;
};

const createRound = () => {
  const randomNum = getRandomNumber();
  return {
    expression: randomNum,
    correctAnswer: calculateTheAnswer(randomNum),
  };
};

const gameData = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  createRound,
};

export default gameData;
