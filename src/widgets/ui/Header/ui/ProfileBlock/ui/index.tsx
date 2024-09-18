import { Button } from "shared";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ProfileBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={"flex items-center h-full"}>
      <Link to={"/login"}>
        <Button paddings={"px-4 py-0.5"}>
          <p className={"text-white text-lg text-bold"}>{t("Login")}</p>
        </Button>
      </Link>
    </div>
  );
};
