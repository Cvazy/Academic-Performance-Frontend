import { FC, HTMLAttributes, useState } from "react";

import eyeOpenIcon from "shared/assets/images/eye_open.svg";
import eyeCloseIcon from "shared/assets/images/eye_close.svg";
import { useTranslation } from "react-i18next";

interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  type: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder: string;
  isError?: boolean;
  dataTestId?: string;
}

export const Input: FC<InputProps> = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  isError,
  dataTestId,
}) => {
  const { t } = useTranslation();

  const [inputType, setInputType] = useState("password");

  const handleChangeInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className={"w-full relative"}>
      <input
        data-testid={dataTestId}
        className={`rounded-lg text-sm text-[#2B3034] border border-solid ${isError ? "border-red-500" : ""} bg-white py-4 pl-3 ${type === "password" ? "pr-12" : "pr-3"} focus:border-[#bd75e6] h-14 w-full`}
        name={name}
        type={type === "password" ? inputType : type}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        placeholder={t(placeholder)}
      />

      {type === "password" && (
        <img
          onClick={handleChangeInputType}
          className={
            "block cursor-pointer w-6 h-6 absolute select-none right-4 top-4"
          }
          src={inputType === "password" ? eyeOpenIcon : eyeCloseIcon}
          alt={"Password visibility toggle"}
          loading={"lazy"}
          draggable={"false"}
        />
      )}
    </div>
  );
};
