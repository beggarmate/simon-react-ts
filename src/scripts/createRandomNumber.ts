function returnRandomNumber(): number {
  let randomNumber = Math.random();
  randomNumber =
    randomNumber <= 0.25
      ? 1
      : randomNumber <= 0.5
      ? 2
      : randomNumber <= 0.75
      ? 3
      : 4;
  return randomNumber;
}

export default returnRandomNumber;
