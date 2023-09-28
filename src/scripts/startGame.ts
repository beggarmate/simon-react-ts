import randomNumber from "./createRandomNumber";

interface GameButtons {
  firstBtn: boolean;
  secondBtn: boolean;
  thirdBtn: boolean;
  fourthBtn: boolean;
}

enum Sounds {
  "./music/fa.mp3",
  "./music/lja.mp3",
  "./music/mi.mp3",
  "./music/sol.mp3",
}

const systemSteps: number[] = [1, 3, 4, 2];
const playerSteps: number[] = [];

const fireBtn = (step: number, setBtnActive: any, btnActive: GameButtons) => {
  if (step === 1) {
    setBtnActive({ ...btnActive, firstBtn: true });
  }
  if (step === 2) {
    setBtnActive({ ...btnActive, secondBtn: true });
  }
  if (step === 3) {
    setBtnActive({ ...btnActive, thirdBtn: true });
  }
  if (step === 4) {
    setBtnActive({ ...btnActive, fourthBtn: true });
  }
};

const fireSystemButtons = (
  lvl: number,
  setBtnActive: any,
  btnActive: GameButtons
) => {
  let delay: number = lvl === 1 ? 750 : lvl === 2 ? 500 : 250;
  systemSteps.forEach((step) => {
    setTimeout(() => {
      fireBtn(step, setBtnActive, btnActive);
    }, delay);
    delay += lvl === 1 ? 1000 : lvl === 2 ? 750 : 500;
  });

  delay += lvl === 1 ? 1000 : lvl === 2 ? 750 : 500;

  setTimeout(() => {
    setBtnActive({
      firstBtn: false,
      secondBtn: false,
      thirdBtn: false,
      fourthBtn: false,
    });
  }, delay);
};

const sound = new Audio("https://zvukipro.com/index.php?do=download&id=10970");
const start = (lvl: number, setBtnActive: any, btnActive: GameButtons) => {
  sound.play();
  // Рандомный номер добавляется в массив
  systemSteps.push(randomNumber());

  // кнопки из массива включаются
  fireSystemButtons(lvl, setBtnActive, btnActive);
};
const showErrorChoice = () => {};

const startGame = (
  lvl: number | null,
  setBtnActive: any,
  btnActive: GameButtons
) => {
  lvl ? start(lvl, setBtnActive, btnActive) : showErrorChoice();
};

export default startGame;
