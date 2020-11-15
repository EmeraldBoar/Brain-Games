import { getRandomNumber } from '../random.js';

const createRound = () => {
  const MIN_NUMBER = 1;
  const MAX_STEP = 100;
  const QUANTITY = 10;
  const step = getRandomNumber(MIN_NUMBER, MAX_STEP);
  let progressionElement = getRandomNumber();

  const progression = [];

  for (let i = 0; i < QUANTITY; i += 1) {
    progression.push(progressionElement);
    progressionElement += step;
  }

  const hiddenElementIndex = getRandomNumber(MIN_NUMBER, progression.length - 1);
  const correctAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';

  return {
    expression: progression.join(' '),
    correctAnswer,
  };
};

const gameData = {
  description: 'What number is missing in the progression?',
  createRound,
};

export default gameData;
