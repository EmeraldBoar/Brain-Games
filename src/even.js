import readLineSync from 'readline-sync';

const evenGame = (gameRound = 3, maxNum = 1000) => {
  const userName = readLineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= gameRound; i += 1) {
    const randomNum = Math.round(Math.random() * maxNum);
    const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
