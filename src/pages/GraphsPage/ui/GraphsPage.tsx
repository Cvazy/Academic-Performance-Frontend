import { useTranslation } from "react-i18next";

const GraphsPage = () => {
  const { t } = useTranslation();

  return <div className={"text-2xl"}>{t("Graphs")}</div>;
};

export default GraphsPage;
