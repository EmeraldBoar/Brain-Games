import { getRandomNumber } from '../utils/random.js';

const createRound = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const MAX_STEP = 100;
  const QUANTITY = 10;
  const startProgression = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const randomStep = getRandomNumber(MIN_NUMBER, MAX_STEP);

  let numberProgression = startProgression;

  const numbers = [];

  for (let i = 0; i < QUANTITY; i += 1) {
    numbers.push(numberProgression);
    numberProgression += randomStep;
  }

  const randomHiddenIndex = getRandomNumber(MIN_NUMBER, numbers.length - 1);
  const correctAnswer = String(numbers[randomHiddenIndex]);
  numbers[randomHiddenIndex] = '..';

  return {
    expression: numbers.join(' '),
    correctAnswer,
  };
};

const gameData = {
  description: 'What number is missing in the progression?',
  createRound,
};

export default gameData;
