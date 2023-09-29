import randomNumber from "./createRandomNumber";
const systemSteps: number[] = [];
interface GameButtons {
  firstBtn: boolean;
  secondBtn: boolean;
  thirdBtn: boolean;
  fourthBtn: boolean;
}

const fireBtn = (
  step: number,
  setBtnActive: any,
  btnActive: GameButtons,
  playSounds: any
) => {
  if (step === 1) {
    setBtnActive({ ...btnActive, firstBtn: true });
    playSounds.do();
  }
  if (step === 2) {
    setBtnActive({ ...btnActive, secondBtn: true });
    playSounds.re();
  }
  if (step === 3) {
    setBtnActive({ ...btnActive, thirdBtn: true });
    playSounds.mi();
  }
  if (step === 4) {
    setBtnActive({ ...btnActive, fourthBtn: true });
    playSounds.fa();
  }
};

const fireSystemButtons = (
  difficultyChoice: string,
  setBtnActive: any,
  btnActive: GameButtons,
  playSounds: any,
  setHasUserStep: any,
  playerSteps: any,
  setPlayerSteps: any,
  systemSteps: number[]
) => {
  setHasUserStep(false);
  let delay: number =
    difficultyChoice === "1" ? 1000 : difficultyChoice === "2" ? 800 : 800;

  systemSteps.forEach((step) => {
    setTimeout(() => {
      fireBtn(step, setBtnActive, btnActive, playSounds);
    }, delay);
    delay +=
      difficultyChoice === "1" ? 1050 : difficultyChoice === "2" ? 800 : 550;
  });

  delay +=
    difficultyChoice === "1" ? 1050 : difficultyChoice === "2" ? 800 : 550;

  // включается ввод пользователя
  setTimeout(() => {
    setBtnActive({
      firstBtn: false,
      secondBtn: false,
      thirdBtn: false,
      fourthBtn: false,
    });
    setHasUserStep(true);
  }, delay);
};

const start = (
  difficultyChoice: string,
  setBtnActive: any,
  btnActive: GameButtons,
  playSounds: any,
  setHasUserStep: any,
  playerSteps: any,
  setPlayerSteps: any,
  systemSteps: number[]
) => {
  // Рандомный номер добавляется в массив
  systemSteps.push(randomNumber(systemSteps));

  // кнопки из массива включаются
  fireSystemButtons(
    difficultyChoice,
    setBtnActive,
    btnActive,
    playSounds,
    setHasUserStep,
    playerSteps,
    setPlayerSteps,
    systemSteps
  );
};
const showErrorChoice = (): void => {
  alert("Вы не выбрали уровень сложности!");
};

const startGame = (
  difficultyChoice: string | null,
  setBtnActive: any,
  btnActive: GameButtons,
  playSounds: any,
  setHasUserStep: any,
  playerSteps: any,
  systemSteps: number[]
) => {
  difficultyChoice
    ? start(
        difficultyChoice,
        setBtnActive,
        btnActive,
        playSounds,
        setHasUserStep,
        playerSteps,
        setHasUserStep,
        systemSteps
      )
    : showErrorChoice();
};

const startNextRound = (
  difficultyChoice: any,
  setBtnActive: any,
  btnActive: GameButtons,
  playSounds: any,
  setHasUserStep: any,
  playerSteps: any,
  setPlayerSteps: any,
  systemSteps: any
) => {
  systemSteps.push(randomNumber(systemSteps));

  fireSystemButtons(
    difficultyChoice,
    setBtnActive,
    btnActive,
    playSounds,
    setHasUserStep,
    playerSteps,
    setPlayerSteps,
    systemSteps
  );
};

export { startGame, startNextRound, systemSteps };
