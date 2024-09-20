import { useTranslation } from "react-i18next";

export const Distribution = () => {
  const { t } = useTranslation("mainPage");

  return (
    <div className={"bg-white w-full lg:max-w-[580px]"}>
      <div
        className={"py-6 px-5 w-full sm:py-7 sm:px-6 md:p-8 lg:py-10 lg:px-11"}
      >
        <div className={"flex flex-col items-start gap-8 w-full"}>
          <h2
            className={
              "text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl"
            }
          >
            {t("Distribution")}
          </h2>
        </div>
      </div>
    </div>
  );
};
