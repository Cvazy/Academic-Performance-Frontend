import React, { FC } from "react";

interface ButtonProps {
  paddings: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  dataTestId?: string;
}

export const Button: FC<ButtonProps> = ({
  paddings,
  children,
  onClick,
  disabled,
  dataTestId,
}) => {
  return (
    <button
      data-testid={dataTestId}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center ${paddings} bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl w-full hover:from-violet-500 hover:to-fuchsia-500 ${!disabled ? "hover:scale-105" : ""} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};
