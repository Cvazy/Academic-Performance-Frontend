import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ProfileBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={"flex items-center h-full"}>
      <Link to={"/login"}>
        <Button>
          <p className={"text-white text-lg text-bold"}>{t("Login")}</p>
        </Button>
      </Link>
    </div>
  );
};
