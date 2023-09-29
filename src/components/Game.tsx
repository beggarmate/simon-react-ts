import React, { useState } from "react";
import MyBtn from "./UI/MyRadio/MyBtn";
import DifficultyChoice from "./DifficultyChoice";
import { startGame, startNextRound, systemSteps } from "../scripts/startGame";
import Modale from "./Modale";

const Game = () => {
  const [score, setScore] = useState(0);
  const [maxScoreRender, setMaxScoreRender] = useState(0);
  const [maxScoreEasy, setMaxScoreEasy] = useState(0);
  const [maxScoreNormal, setMaxScoreNormal] = useState(0);
  const [maxScoreHard, setMaxScoreHard] = useState(0);
  const [hasStartedGame, setHasStartedGame] = useState(false);
  const [difficultyChoice, setDifficultyChoice] = useState<string | null>(null);
  const [hasUserStep, setHasUserStep] = useState(false);
  const [hasLose, setHasLose] = useState(false);
  const playerSteps: number[] = [];

  const [btnActive, setBtnActive] = useState({
    firstBtn: false,
    secondBtn: false,
    thirdBtn: false,
    fourthBtn: false,
  });

  const checkLengthSteps = (playerSteps: number[], systemSteps: number[]) => {
    return playerSteps.length === systemSteps.length ? true : false;
  };

  const checkEveryStep = (
    playerSteps: number[],
    systemSteps: number[]
  ): boolean => {
    let x = 0;
    playerSteps.forEach((step, index) => {
      if (step === systemSteps[index]) {
        x++;
      }
    });
    if (x === playerSteps.length) {
      return true;
    }
    return false;
  };

  const setMaxScore = () => {
    switch (difficultyChoice) {
      case "1":
        setMaxScoreEasy(score);
        break;
      case "2":
        setMaxScoreNormal(score);
        break;
      case "3":
        setMaxScoreHard(score);
        break;
    }
  };

  const lose = () => {
    setHasLose(true);
    if (score > maxScoreRender) {
      setMaxScore();
    }
  };

  const checkSteps = (playerSteps: number[]) => {
    if (!checkEveryStep(playerSteps, systemSteps)) {
      lose();
    }
    if (checkEveryStep(playerSteps, systemSteps)) {
      if (checkLengthSteps(playerSteps, systemSteps)) {
        setScore(score + 1);

        startNextRound(
          difficultyChoice,
          setBtnActive,
          btnActive,
          playSounds,
          setHasUserStep,
          playerSteps,
          setHasUserStep,
          systemSteps
        );
      }
    }
  };

  const soundDo = new Audio(
    "https://zvukogram.com//mp3/cats/861/zvuk-notyi-do.mp3"
  );
  const soundRe = new Audio(
    "https://voicebot.su/uploads/sounds/07/06670/6670.mp3"
  );
  const soundMi = new Audio(
    "https://voicebot.su/uploads/sounds/07/06672/6672.mp3"
  );
  const soundFa = new Audio(
    "https://zvukogram.com//mp3/cats/861/zvuk-notyi-fa.mp3"
  );

  const playSounds = {
    do() {
      soundDo.play();
    },
    re() {
      soundRe.play();
    },
    mi() {
      soundMi.play();
    },
    fa() {
      soundFa.play();
    },
  };

  return (
    <>
      {hasLose ? (
        <Modale
          onClick={() => {
            setHasLose(false);
            setScore(0);
          }}
          score={score}
        />
      ) : null}
      <div className="game">
        <h3 className="game__title">Simon Game</h3>
        <div className="game__board">
          <div className="game__board-place">
            <div className="btns">
              <MyBtn
                onClick={() => {
                  playSounds.do();
                  playerSteps.push(1);
                  checkSteps(playerSteps);
                }}
                disabled={hasUserStep ? false : true}
                className={
                  btnActive.firstBtn
                    ? "game_btn btn1 game__btn-active"
                    : "game_btn btn1"
                }
              />
              <MyBtn
                onClick={() => {
                  playSounds.re();
                  playerSteps.push(2);
                  checkSteps(playerSteps);
                }}
                disabled={hasUserStep ? false : true}
                className={
                  btnActive.secondBtn
                    ? "game_btn btn2 game__btn-active"
                    : "game_btn btn2"
                }
              />
              <MyBtn
                onClick={() => {
                  playSounds.mi();
                  playerSteps.push(3);
                  checkSteps(playerSteps);
                }}
                disabled={hasUserStep ? false : true}
                className={
                  btnActive.thirdBtn
                    ? "game_btn btn3 game__btn-active"
                    : "game_btn btn3"
                }
              />
              <MyBtn
                onClick={() => {
                  playSounds.fa();
                  playerSteps.push(4);
                  console.log(playerSteps);
                  checkSteps(playerSteps);
                }}
                disabled={hasUserStep ? false : true}
                className={
                  btnActive.fourthBtn
                    ? "game_btn btn4 game__btn-active"
                    : "game_btn btn4"
                }
              />
            </div>
          </div>
          <div className="game__board-info">
            <h3 className="score">
              Score: {score}
              <br />
              Max score:{" "}
              {difficultyChoice === "1"
                ? maxScoreEasy
                : difficultyChoice === "2"
                ? maxScoreNormal
                : difficultyChoice === "3"
                ? maxScoreHard
                : 0}
            </h3>
            <div className="difficulty__container">
              <h3 className="diffuculty__title">
                difficulty level{systemSteps}
              </h3>
              <DifficultyChoice
                difficultyChoice={difficultyChoice}
                setDifficultyChoice={setDifficultyChoice}
              />
              <button
                onClick={() => {
                  setHasUserStep(false);
                  playerSteps.length = 0;
                  systemSteps.length = 0;
                  difficultyChoice
                    ? setHasStartedGame(true)
                    : setHasStartedGame(false);
                  startGame(
                    difficultyChoice,
                    setBtnActive,
                    btnActive,
                    playSounds,
                    setHasUserStep,
                    playerSteps,
                    systemSteps
                  );
                }}
                className="start-game__btn"
              >
                {hasStartedGame ? "Restart" : "Start"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
