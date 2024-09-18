import React, { FC } from "react";

interface ButtonProps {
  paddings: string;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ paddings, children }) => {
  return (
    <button
      className={`flex justify-center ${paddings} bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl w-full hover:from-violet-500 hover:to-fuchsia-500 hover:scale-105`}
    >
      {children}
    </button>
  );
};
