import { getRandomNumber } from '../utils/random.js';

const calculatingTheAnswer = (randomNumber) => {
  let isPrime = false;

  if (randomNumber % 2 === 0) {
    isPrime = false;
  } else if (randomNumber === 2 || randomNumber === 1) {
    isPrime = true;
  } else {
    const randomNumSqrt = Math.sqrt(randomNumber);
    for (let i = 3; i < randomNumSqrt; i += 2) {
      if (randomNumber % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }

  if (isPrime) {
    return 'yes';
  }
  return 'no';
};

const createRound = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const result = {
    expression: randomNumber,
    correctAnswer: calculatingTheAnswer(randomNumber),
  };
  return result;
};

const gameData = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  createRound,
};

export default gameData;
