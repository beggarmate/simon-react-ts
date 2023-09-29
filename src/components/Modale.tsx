import React from "react";

interface ModaleProps {
  score: number;
  onClick: any;
}

const Modale: React.FC<ModaleProps> = ({ score, onClick }) => {
  return (
    <div className="modale">
      <div className="modale__message">
        <h1>Game Over</h1>
        <p>Your score: {score}</p>
        <button onClick={onClick} className="modale__btn">
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modale;
