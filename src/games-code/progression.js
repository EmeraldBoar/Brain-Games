import getRandomNum from '../utils/random.js';

const game = (maxNum = 100) => {
  const MAX_STEP = 100;
  const QUANTITY = 10;
  const startProgression = getRandomNum(maxNum);
  const randomStep = getRandomNum(MAX_STEP);

  let numberProgression = startProgression;

  const numbers = [];

  for (let i = 0; i < QUANTITY; i += 1) {
    numbers.push(numberProgression);
    numberProgression += randomStep;
  }

  const randomHiddenIndex = getRandomNum(numbers.length - 1);
  const correctAnswer = String(numbers[randomHiddenIndex]);
  numbers[randomHiddenIndex] = '..';

  return {
    expression: numbers.join(' '),
    correctAnswer,
  };
};

const gameData = {
  rules: 'What number is missing in the progression?',
  game,
};

export default gameData;
