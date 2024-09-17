import { useTranslation } from "react-i18next";

const TablesPage = () => {
  const { t } = useTranslation();

  return <div className={"text-2xl"}>{t("Tables")}</div>;
};

export default TablesPage;
