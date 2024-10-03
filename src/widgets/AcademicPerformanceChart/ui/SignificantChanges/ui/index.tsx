import { useTranslation } from "react-i18next";
import { SignificantChangesProps } from "widgets/AcademicPerformanceChart/model";
import { SignificantItem } from "./SignificantItem";

export const SignificantChanges = ({
  maxIncrease,
  maxDecrease,
}: SignificantChangesProps) => {
  const { t } = useTranslation("graphsPage");

  return (
    <div className={"bg-[#EFF3FC] w-full"}>
      <div
        className={
          "flex flex-col items-start gap-5 px-4 py-5 w-full sm:px-7 sm:py-6 lg:px-10 xl:px-14"
        }
      >
        <p
          className={"text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl"}
        >
          {t("Significant Changes")}
        </p>

        <div className={"flex items-start gap-5 flex-wrap w-full"}>
          <SignificantItem maxDecrease={maxDecrease} maxIncrease={null} />

          <SignificantItem maxIncrease={maxIncrease} maxDecrease={null} />
        </div>
      </div>
    </div>
  );
};
