import { Button } from "shared";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppDispatch } from "app/providers";
import { logoutUser } from "../../../../../entities";
import { useNavigate } from "react-router";

export const ProfileBlock = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("user");

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className={"flex items-center h-full"}>
      {isAuth ? (
        <Button paddings={"px-4 py-0.5"} onClick={handleLogout}>
          <p className={"text-white text-lg text-bold"}>{t("Logout")}</p>
        </Button>
      ) : (
        <Link to={"/login"}>
          <Button paddings={"px-4 py-0.5"}>
            <p className={"text-white text-lg text-bold"}>{t("Login")}</p>
          </Button>
        </Link>
      )}
    </div>
  );
};
