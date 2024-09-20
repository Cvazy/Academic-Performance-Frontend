import { useTranslation } from "react-i18next";
import { BigStatisticBar } from "widgets/Description/ui/BigStatisticBar";
import { SmallStatisticBar } from "widgets/Description/ui/SmallStatisticBar";

export const Description = () => {
  const { t } = useTranslation("mainPage");

  const currentYear = new Date().getFullYear();

  return (
    <div className={"bg-white w-full lg:max-w-[750px]"}>
      <div
        className={"py-6 px-5 w-full sm:py-7 sm:px-6 md:p-8 lg:py-10 lg:px-11"}
      >
        <div
          className={"flex flex-col items-start gap-6 w-full md:gap-7 xl:gap-8"}
        >
          <div
            className={
              "flex flex-col items-start gap-7 w-full md:gap-8 xl:gap-10"
            }
          >
            <h2
              className={
                "text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl"
              }
            >
              {t("Description")}
            </h2>

            <div className={"text-sm text-[#282D32]"}>
              <p>
                {t("In")} {currentYear},
              </p>

              <p>{t("Overall sub-Group count Enrolled")}: 1178</p>

              <p>
                {t("Total number of students graduating this year")}: 2%， 20100
              </p>

              <p>{t("Total deduction rate")}: 2%， 2200</p>
            </div>
          </div>

          <div className={"flex flex-col gap-8 w-full"}>
            <div className={"flex flex-col gap-6 w-full"}>
              <BigStatisticBar title={"Pell"} qnt={21401} percent={0.45} />

              <BigStatisticBar
                title={"1st Gen Status"}
                qnt={201421}
                percent={0.68}
              />
            </div>

            <div className={"flex flex-col items-start gap-4 w-full"}>
              <p className={"text-sm !leading-6 font-bold text-[#9497C0] pl-4"}>
                {t("The number of students enrolled in the courses")}
              </p>

              <div className={"flex flex-wrap gap-1 w-full"}>
                <SmallStatisticBar
                  course={1}
                  percent={0.3}
                  qnt={20158}
                  bgColor={"#F9C0C0"}
                />

                <SmallStatisticBar
                  course={2}
                  percent={0.25}
                  qnt={17031}
                  bgColor={"#CABAE3"}
                />

                <SmallStatisticBar
                  course={3}
                  percent={0.2}
                  qnt={11524}
                  bgColor={"#BBE6CE"}
                />

                <SmallStatisticBar
                  course={4}
                  percent={0.1}
                  qnt={6021}
                  bgColor={"#A7B4FF"}
                />

                <SmallStatisticBar
                  course={5}
                  percent={0.05}
                  qnt={1729}
                  bgColor={"#EAC8ED"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
