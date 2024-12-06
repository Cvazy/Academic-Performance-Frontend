import { useTranslation } from "react-i18next";

import ArrowIcon from "shared/assets/images/arrow.svg";
import { FC, useState } from "react";
import { DataRow } from "widgets/AcademicPerformanceChart";

interface ISidebar {
  initialData: DataRow[];
}

export const Sidebar: FC<ISidebar> = ({ initialData }) => {
  const { t } = useTranslation("graphsPage");

  const [descriptionVisible, setDescriptionVisible] = useState(false);

  return (
    <div
      className={
        "bg-[#E6EDFC] shadow-[0_0_48px_-10px_#0000007a] w-full lg:shadow-none"
      }
    >
      <div
        className={`flex flex-col items-start ${descriptionVisible ? "gap-6 sm:gap-7 md:gap-8" : ""} w-full px-4 py-7 sm:px-5 sm:py-8 lg:gap-10 xl:px-6 xl:py-12`}
      >
        <div
          className={
            "flex items-center justify-between gap-4 cursor-pointer w-full lg:justify-start"
          }
          onClick={() => setDescriptionVisible(!descriptionVisible)}
        >
          <h2 className="text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl">
            {t("Description")}
          </h2>

          <img
            className={`block select-none min-w-4 max-w-4 ${descriptionVisible ? "rotate-180" : ""} lg:hidden`}
            src={ArrowIcon}
            alt={"Arrow"}
            loading={"lazy"}
            draggable={"false"}
          />
        </div>

        <div
          className={`flex flex-col items-start gap-6 w-full overflow-hidden ${descriptionVisible ? "max-h-96" : "max-h-0"} lg:!max-h-full lg:gap-8`}
        >
          <p
            className={
              "text-black text-left text-sm font-bold border-b border-solid border-[#B8BACA] pb-3.5 w-full lg:text-base"
            }
          >
            {t("Number of grades by year")}
          </p>

          <div className={"flex flex-col items-start gap-4 w-full"}>
            {initialData.map(({ year, count }) => (
              <div
                key={year}
                className={
                  "flex items-center gap-3 justify-between border-b border-solid border-[#B8BACA] pb-3.5 w-full"
                }
              >
                <p
                  className={
                    "text-black text-left text-xs font-bold lg:text-sm"
                  }
                >
                  {year} {t("year")}
                </p>

                <p
                  className={
                    "text-[#4A6078] text-right text-xs font-bold lg:text-sm"
                  }
                >
                  {count} {count === 1 ? t("rating") : t("ratings")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
