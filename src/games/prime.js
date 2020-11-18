import { getRandomNumber } from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const createRound = () => {
  const randomNumber = getRandomNumber();
  return {
    expression: randomNumber,
    correctAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

const gameData = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  createRound,
};

export default gameData;
