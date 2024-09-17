import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return <div className={"text-2xl"}>{t("Home")}</div>;
};

export default MainPage;
