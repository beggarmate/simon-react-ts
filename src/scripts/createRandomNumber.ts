function returnRandomNumber(systemSteps: number[]): number {
  let randomNumber = Math.random();
  randomNumber =
    randomNumber <= 0.25
      ? 1
      : randomNumber <= 0.5
      ? 2
      : randomNumber <= 0.75
      ? 3
      : 4;
  if (
    systemSteps.length !== 0 &&
    randomNumber === systemSteps[systemSteps.length - 1]
  ) {
    return returnRandomNumber(systemSteps);
  }
  return randomNumber;
}

export default returnRandomNumber;
