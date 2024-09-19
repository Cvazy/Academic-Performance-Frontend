import { useTranslation } from "react-i18next";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <button
      onClick={onToggleLanguage}
      className={
        "bg-none border-none text-lg font-semibold text-[#8B7EF6] text-center select-none"
      }
    >
      {i18n.language === "en" ? "EN" : "RU"}
    </button>
  );
};
