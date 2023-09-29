import React, { forwardRef } from "react";

interface BtnProps {
  className: string;
  disabled: boolean;
  onClick: any;
}

const MyBtn: React.FC<BtnProps> = ({ onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
    ></button>
  );
};

export default MyBtn;
