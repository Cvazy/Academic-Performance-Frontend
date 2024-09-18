import { Button, Input } from "shared";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";

export const RegisterForm = () => {
  const { t } = useTranslation();

  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repeatPasswordValue, setRepeatPasswordValue] = useState("");

  const handleLogin = (value: string) => {
    setLoginValue(value);
  };

  const handlePassword = (value: string) => {
    setPasswordValue(value);
  };

  const handleRepeatPassword = (value: string) => {
    setRepeatPasswordValue(value);
  };

  return (
    <div className={"flex flex-col gap-12 w-full"}>
      <div className={"flex flex-col gap-6 w-full"}>
        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#2B3034]"
          }
        >
          {t("Enter your login")}

          <Input
            name={"login"}
            type={"text"}
            value={loginValue}
            placeholder={"Login..."}
            onChange={handleLogin}
          />
        </label>

        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#2B3034]"
          }
        >
          {t("Enter your password")}

          <Input
            name={"password"}
            type={"password"}
            value={passwordValue}
            placeholder={"Password..."}
            onChange={handlePassword}
          />
        </label>

        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#2B3034]"
          }
        >
          {t("Repeat your password")}

          <Input
            name={"password"}
            type={"password"}
            value={repeatPasswordValue}
            placeholder={"Repeat password..."}
            onChange={handleRepeatPassword}
          />
        </label>
      </div>

      <div className={"flex flex-col items-center gap-4 w-full"}>
        <Button paddings={"px-4 py-3"}>
          <p className={"text-white text-lg text-bold"}>{t("Register")}</p>
        </Button>

        <p
          className={
            "flex justify-center text-[#2B3034] font-normal text-sm text-center w-full"
          }
        >
          {t("Already have an account")}?&nbsp;
          <Link to={"/login"} className={"font-medium hover:scale-105"}>
            {t("Authorization")}
          </Link>
        </p>
      </div>
    </div>
  );
};
