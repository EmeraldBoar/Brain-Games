import readLineSync from 'readline-sync';

const nameQuery = () => {
    const name = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}

export { nameQuery };