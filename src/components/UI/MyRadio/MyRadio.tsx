import React, { Dispatch, DispatchWithoutAction } from "react";

interface MyRadioProps {
  className: string;
  value: string;
  hidden?: boolean;
  name: string;
  children?: string;
  setDifficultyChoice: any;
}

// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   };

const MyRadio: React.FC<MyRadioProps> = ({
  className,
  value,
  name,
  children,
  hidden,
  setDifficultyChoice,
}) => {
  return (
    <div className="label-container">
      <label className={className}>
        <input
          onChange={(e) => {
            setDifficultyChoice(e.target.value);
          }}
          hidden={hidden}
          value={value}
          name={name}
          type="radio"
        />
      </label>
      <span className="label-span">{children}</span>
    </div>
  );
};

export default MyRadio;
