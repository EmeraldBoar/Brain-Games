import getRandomNum from '../utils/random.js';

const evenGame = (maxNum = 1000) => {
  const randomNum = getRandomNum(maxNum);
  const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';

  return [
    {
      conditionsOfTheGame: 'Answer "yes" if the number is even, otherwise answer "no".',
    },
    {
      expression: randomNum,
      correctAnswer,
    },
  ];
};

export default evenGame;
