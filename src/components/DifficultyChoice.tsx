import React, { useState } from "react";
import MyRadio from "./UI/MyRadio/MyRadio";
interface DifficultyChoice {
  difficultyChoice: any;
  setDifficultyChoice: any;
}

const DifficultyChoice: React.FC<DifficultyChoice> = ({
  difficultyChoice,
  setDifficultyChoice,
}) => {
  return (
    <div className="difficulty__choice">
      <MyRadio
        setDifficultyChoice={setDifficultyChoice}
        hidden
        className={
          difficultyChoice === "1"
            ? "easy-radio radio radio-active"
            : "easy-radio radio"
        }
        name="difficulty"
        value="1"
      >
        EASY
      </MyRadio>
      <MyRadio
        setDifficultyChoice={setDifficultyChoice}
        hidden
        className={
          difficultyChoice === "2"
            ? "normal-radio radio radio-active"
            : "normal-radio radio"
        }
        name="difficulty"
        value="2"
      >
        NORMAL
      </MyRadio>
      <MyRadio
        setDifficultyChoice={setDifficultyChoice}
        hidden
        className={
          difficultyChoice === "3"
            ? "hard-radio radio radio-active"
            : "hard-radio radio"
        }
        name="difficulty"
        value="3"
      >
        HARD
      </MyRadio>
    </div>
  );
};

export default DifficultyChoice;
