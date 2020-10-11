/* eslint-disable import/prefer-default-export */
export const getRandomNumber = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
