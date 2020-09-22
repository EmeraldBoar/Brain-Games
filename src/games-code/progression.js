import getRandomNum from '../utils/random.js';

const progressionGame = (maxStart = 100, maxStep = 100, quantity = 10) => {
  const startProgression = getRandomNum(maxStart);
  let numProgression = startProgression;
  const step = getRandomNum(maxStep);
  const numArr = [];

  for (let i = 0; i < quantity; i += 1) {
    numArr.push(numProgression);
    numProgression += step;
  }

  const hiddenIndex = getRandomNum(numArr.length - 1);
  const correctAnswer = String(numArr[hiddenIndex]);
  numArr[hiddenIndex] = '..';

  return [
    {
      conditionsOfTheGame: 'What number is missing in the progression?',
    },
    {
      expression: numArr.join(' '),
      correctAnswer,
    },
  ];
};

export default progressionGame;
