import { SignificantChangesProps } from "widgets/AcademicPerformanceChart/model";
import { FC } from "react";
import PositiveGraph from "shared/assets/images/positive.svg";
import NegativeGraph from "shared/assets/images/negative.svg";
import PositiveArrowIcon from "shared/assets/images/positiveArrow.svg";
import NegativeArrowIcon from "shared/assets/images/negativeArrow.svg";

export const SignificantItem: FC<SignificantChangesProps> = ({
  maxIncrease,
  maxDecrease,
}) => {
  const data = maxIncrease || maxDecrease;

  if (!data) {
    return null;
  }

  const { year, change, changeType } = data;

  return (
    <div className={"flex flex-col items-center gap-3"}>
      <p
        className={
          "text-[#4666AE] text-base font-normal text-center sm:text-lg"
        }
      >
        {year}
      </p>

      <div className={"flex flex-col items-center"}>
        <div className={"flex items-center gap-4 flex-nowrap"}>
          <p
            className={`${changeType === "positive" ? "text-[#24A71E]" : "text-[#FC297D]"} text-5xl font-extralight text-center`}
          >
            {change}
          </p>

          <img
            className={`select-none block ${changeType === "positive" ? "" : "rotate-180"}`}
            src={
              changeType === "positive" ? PositiveArrowIcon : NegativeArrowIcon
            }
            alt={"Arrow"}
            loading={"lazy"}
            draggable={"false"}
          />
        </div>

        <img
          className={"select-none block w-full"}
          src={changeType === "positive" ? PositiveGraph : NegativeGraph}
          alt={"Graph"}
          loading={"lazy"}
          draggable={"false"}
        />
      </div>
    </div>
  );
};
