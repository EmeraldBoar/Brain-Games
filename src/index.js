import readLineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const manageGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(game.description);

  let roundsCount = 0;

  while (roundsCount < NUMBER_OF_ROUNDS) {
    const gameData = game.createRound();
    console.log(`Question: ${gameData.expression}`);

    const userAnswer = readLineSync.question('Your answer ');

    if (userAnswer === gameData.correctAnswer) {
      roundsCount += 1;
      console.log('Correct');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameData.correctAnswer}".`);
      break;
    }
  }

  if (roundsCount === NUMBER_OF_ROUNDS) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export default manageGame;
