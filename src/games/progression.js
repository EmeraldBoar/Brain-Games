import { getRandomNumber } from '../utils/random.js';

const createsRound = () => {
  const MAX_NUMBER = 100;
  const MAX_STEP = 100;
  const QUANTITY = 10;
  const startProgression = getRandomNumber(MAX_NUMBER);
  const randomStep = getRandomNumber(MAX_STEP);

  let numberProgression = startProgression;

  const numbers = [];

  for (let i = 0; i < QUANTITY; i += 1) {
    numbers.push(numberProgression);
    numberProgression += randomStep;
  }

  const randomHiddenIndex = getRandomNumber(numbers.length - 1);
  const correctAnswer = String(numbers[randomHiddenIndex]);
  numbers[randomHiddenIndex] = '..';

  return {
    expression: numbers.join(' '),
    correctAnswer,
  };
};

const gameData = {
  description: 'What number is missing in the progression?',
  createsRound,
};

export default gameData;
