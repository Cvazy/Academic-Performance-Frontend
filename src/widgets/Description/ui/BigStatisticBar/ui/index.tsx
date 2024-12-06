import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IBar } from "../../../model";

export const BigStatisticBar: FC<IBar> = ({ title, qnt, percent }) => {
  const { t } = useTranslation("mainPage");

  return (
    <div className={"flex flex-col items-start w-full"}>
      <p className={"text-sm !leading-6 font-bold text-[#9497C0] pl-4"}>
        {t(title)}
      </p>

      <div
        className={"flex justify-start bg-[#d3d3d369] rounded-3xl w-full h-10"}
      >
        <div
          className={`bg-[#A7B4FF] h-10 rounded-3xl`}
          style={{ width: percent * 100 + "%" }}
        >
          <div
            className={
              "flex items-center justify-start h-full px-6 sm:px-7 md:px-8"
            }
          >
            <p className={"text-white text-base font-bold whitespace-nowrap"}>
              {(percent * 100).toFixed(1)}%，{qnt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
