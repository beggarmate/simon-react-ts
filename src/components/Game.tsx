import React, { useState } from "react";
import MyBtn from "./UI/MyRadio/MyBtn";
import DifficultyChoice from "./DifficultyChoice";
import startGame from "../scripts/startGame";
import useSound from "use-sound";

const Game = () => {
  const [hasStartedGame, setHasStartedGame] = useState(false);
  const [difficultyChoice, setDifficultyChoice] = useState<string | null>(null);
  const [btnActive, setBtnActive] = useState({
    firstBtn: false,
    secondBtn: false,
    thirdBtn: false,
    fourthBtn: false,
  });
  const sound = new Audio(
    "https://zvukipro.com/uploads/files/2019-05/1558419037_re.mp3"
  );
  const lvl: number | null =
    difficultyChoice === "1"
      ? 1
      : difficultyChoice === "2"
      ? 2
      : difficultyChoice === "3"
      ? 3
      : null;
  return (
    <div className="game">
      <h3 className="game__title">Simon Game</h3>
      <div className="game__board">
        <div className="game__board-place">
          <div className="btns">
            <MyBtn
              className={
                btnActive.firstBtn
                  ? "game_btn btn1 game__btn-active"
                  : "game_btn btn1"
              }
            />
            <MyBtn
              className={
                btnActive.secondBtn
                  ? "game_btn btn2 game__btn-active"
                  : "game_btn btn2"
              }
            />
            <MyBtn
              className={
                btnActive.thirdBtn
                  ? "game_btn btn3 game__btn-active"
                  : "game_btn btn3"
              }
            />
            <MyBtn
              className={
                btnActive.fourthBtn
                  ? "game_btn btn4 game__btn-active"
                  : "game_btn btn4"
              }
            />
          </div>
        </div>
        <div className="game__board-info">
          <h3 className="score">Score:</h3>
          <div className="difficulty__container">
            <h3 className="diffuculty__title">difficulty level</h3>
            <DifficultyChoice
              difficultyChoice={difficultyChoice}
              setDifficultyChoice={setDifficultyChoice}
            />
            <button
              onClick={() => {
                setHasStartedGame(true);
                startGame(lvl, setBtnActive, btnActive);
                sound.play();
              }}
              className="start-game__btn"
            >
              {hasStartedGame ? "Restart" : "Start"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
