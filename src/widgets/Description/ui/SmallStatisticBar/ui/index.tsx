import { FC } from "react";
import { ICourseBar } from "widgets/Description/model";
import { useTranslation } from "react-i18next";

export const SmallStatisticBar: FC<ICourseBar> = ({
  course,
  qnt,
  percent,
  bgColor,
}) => {
  const { t } = useTranslation("mainPage");

  return (
    <div
      className={"h-10 rounded-3xl w-fit"}
      style={{ backgroundColor: bgColor }}
    >
      <div className={"flex items-center justify-center h-full px-4"}>
        <p className={"text-white text-xs font-bold whitespace-nowrap"}>
          {course} {t("course")}：{(percent * 100).toFixed(1)}%，{qnt}
        </p>
      </div>
    </div>
  );
};
