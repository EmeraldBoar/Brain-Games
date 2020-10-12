import readLineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const manageGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(game.description);

  let countRounds = 0;

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const gameData = game.createsRound();

    console.log(`Question: ${gameData.expression}`);

    const answerUser = readLineSync.question('Your answer ');

    if (answerUser === gameData.correctAnswer) {
      console.log('Correct');
      countRounds += 1;
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${gameData.correctAnswer}".`);
      break;
    }
  }

  if (countRounds === NUMBER_OF_ROUNDS) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export default manageGame;
