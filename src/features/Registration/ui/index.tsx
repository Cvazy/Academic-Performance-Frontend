import { Button, Input, Loader } from "shared";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { loginUser, userApi } from "../../../entities";
import { useNavigate } from "react-router";
import { useAppDispatch } from "app/providers";

export const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginValue, setLoginValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repeatPasswordValue, setRepeatPasswordValue] = useState("");
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isErrorPasswordRepeat, setIsErrorPasswordRepeat] = useState(false);

  const [triggerSearch, { isError, isLoading }] =
    userApi.useFetchUserRegisterMutation();

  const handleLogin = (value: string) => {
    setLoginValue(value);
  };

  const handleEmail = (value: string) => {
    setEmailValue(value);
  };

  const handlePassword = (value: string) => {
    setPasswordValue(value);
    setIsErrorPassword(false);
  };

  const handleRepeatPassword = (value: string) => {
    setRepeatPasswordValue(value);
    setIsErrorPasswordRepeat(false);
  };

  const handleSubmit = async () => {
    if (passwordValue !== repeatPasswordValue) {
      setIsErrorPassword(true);
      setIsErrorPasswordRepeat(true);
      return;
    }

    triggerSearch({
      username: loginValue,
      password: passwordValue,
      email: emailValue,
    }).then((response) => {
      if (response.data) {
        dispatch(
          loginUser({
            username: loginValue,
            email: emailValue,
          }),
        );
        navigate("/");
      }
    });
  };

  return (
    <div className={"flex flex-col gap-12 w-full"}>
      {isLoading && <Loader />}

      {isError && (
        <p
          className={
            "text-base text-[#e54747] font-bold text-left w-full my-[-20px]"
          }
        >
          {t("Such a user already exists or the data is incorrect")}
        </p>
      )}

      {(isErrorPassword || isErrorPasswordRepeat) && (
        <p
          className={
            "text-base text-[#e54747] font-bold text-left w-full my-[-20px]"
          }
        >
          {t("Passwords must match")}
        </p>
      )}

      <div className={"flex flex-col gap-6 w-full"}>
        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#2B3034]"
          }
        >
          {t("Enter your login")}

          <Input
            name={"login"}
            dataTestId={"login"}
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
          {t("Enter your email")}

          <Input
            dataTestId={"email"}
            name={"email"}
            type={"email"}
            value={emailValue}
            placeholder={"Email..."}
            onChange={handleEmail}
          />
        </label>

        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#2B3034]"
          }
        >
          {t("Enter your password")}

          <Input
            dataTestId={"password"}
            name={"password"}
            type={"password"}
            value={passwordValue}
            placeholder={"Password..."}
            isError={isErrorPassword}
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
            name={"password_repeat"}
            type={"password"}
            dataTestId={"password_repeat"}
            value={repeatPasswordValue}
            placeholder={"Repeat password..."}
            isError={isErrorPasswordRepeat}
            onChange={handleRepeatPassword}
          />
        </label>
      </div>

      <div className={"flex flex-col items-center gap-4 w-full"}>
        <Button
          dataTestId={"registerButton"}
          disabled={
            !(loginValue && passwordValue && repeatPasswordValue && emailValue)
          }
          paddings={"px-4 py-3"}
          onClick={handleSubmit}
        >
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
