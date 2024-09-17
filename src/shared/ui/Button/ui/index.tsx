import React, { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className={`flex justify-center px-4 py-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl hover:from-violet-500 hover:to-fuchsia-500 hover:scale-105`}
    >
      {children}
    </button>
  );
};
