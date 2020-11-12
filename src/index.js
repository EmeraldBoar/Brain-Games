import promptly from 'promptly';

const NUMBER_OF_ROUNDS = 3;

const launchGame = async (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(game.description);

  let roundsCount = 0;

  while (roundsCount < NUMBER_OF_ROUNDS) {
    const { expression, correctAnswer } = game.createRound();
    console.log(`Question: ${expression}`);

    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await promptly.prompt('Your answer ');

    if (userAnswer === correctAnswer) {
      roundsCount += 1;
      console.log('Correct');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }

  if (roundsCount === NUMBER_OF_ROUNDS) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export default launchGame;
