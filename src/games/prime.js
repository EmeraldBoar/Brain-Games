import { getRandomNumber } from '../utils/random.js';

const isPrime = (randomNumber) => {
  if (randomNumber < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(randomNumber); i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }

  return true;
};

const calculateTheAnswer = (num) => {
  const answer = isPrime(num) ? 'yes' : 'no';
  return answer;
};

const createRound = () => {
  const randomNumber = getRandomNumber();

  const result = {
    expression: randomNumber,
    correctAnswer: calculateTheAnswer(randomNumber),
  };
  return result;
};

const gameData = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  createRound,
};

export default gameData;
