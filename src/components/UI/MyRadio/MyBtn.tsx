import React, { forwardRef } from "react";

interface BtnProps {
  className: string;
}

const MyBtn: React.FC<BtnProps> = ({ className }) => {
  return <button className={className}></button>;
};

export default MyBtn;
