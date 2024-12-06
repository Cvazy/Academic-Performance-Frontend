import { useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LoginForm, RegisterForm } from "features";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const { t } = useTranslation();
  const checkAuthPage = !!useMatch("/login");
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("user");

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div className={"flex items-center justify-center w-full h-full"}>
      <div
        className={
          "max-w-lg bg-white w-full border border-solid border-[#2B3034] border-opacity-10 rounded-xl shadow-[0_0_48px_-10px_#0000007a]"
        }
      >
        <div className={"w-full py-14 px-4 sm:px-6 md:px-9 lg:px-12 xl:px-16"}>
          <div className={"flex flex-col items-start gap-8 w-full"}>
            <h1
              data-testid={"auth-title"}
              className={"text-xl text-left text-[#2B3034] font-semibold"}
            >
              {t(checkAuthPage ? "Authorization" : "Registration")}
            </h1>

            {checkAuthPage ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
