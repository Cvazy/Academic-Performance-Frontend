import { useTranslation } from "react-i18next";
import { GraduateRates } from "widgets";
import { RelevantTimeBlock } from "features";

const MainPage = () => {
  const { t } = useTranslation("mainPage");

  return (
    <div className={"flex flex-col gap-12 w-full"}>
      <div className={"flex flex-col gap-7 w-full"}>
        <div className={"flex items-center justify-between gap-5 w-full"}>
          <h1
            className={"text-xl text-black font-bold sm:text-2xl lg:text-3xl"}
          >
            {t("Student graduate rates")}
          </h1>

          <RelevantTimeBlock />
        </div>

        <GraduateRates />
      </div>
    </div>
  );
};

export default MainPage;
