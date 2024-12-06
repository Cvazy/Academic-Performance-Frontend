import React, { FC, useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import { SignificantChanges } from "./SignificantChanges";
import { CustomDot } from "./CustomDot";
import { DataRow } from "./../model";
import { inputOptionChange } from "./../model";
import { useTranslation } from "react-i18next";

interface IAcademicPerformanceChart {
  initialData: DataRow[];
}

export const AcademicPerformanceChart: FC<IAcademicPerformanceChart> = ({
  initialData,
}) => {
  const { t } = useTranslation("graphsPage");

  const [filteredData, setFilteredData] = useState<DataRow[]>(initialData);
  const [startDate, setStartDate] = useState<number>(initialData[0].year);
  const [endDate, setEndDate] = useState<number>(
    initialData[initialData.length - 1].year,
  );
  const [maxIncrease, setMaxIncrease] = useState<DataRow | null>(null);
  const [maxDecrease, setMaxDecrease] = useState<DataRow | null>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const filtered = initialData.filter(
      (data) => data.year >= startDate && data.year <= endDate,
    );
    setFilteredData(filtered);

    const parseChange = (change: string) => {
      return parseFloat(change.replace("%", ""));
    };

    let maxIncrease: DataRow | null = null;
    let maxDecrease: DataRow | null = null;

    filtered.forEach((data) => {
      const changeValue = parseChange(data.change);

      if (changeValue > 0) {
        if (!maxIncrease || changeValue > parseChange(maxIncrease.change)) {
          maxIncrease = data;
        }
      } else if (changeValue < 0) {
        if (!maxDecrease || changeValue < parseChange(maxDecrease.change)) {
          maxDecrease = data;
        }
      }
    });

    setMaxIncrease(maxIncrease);
    setMaxDecrease(maxDecrease);
  }, [initialData, startDate, endDate]);

  const inputDateChange = (optionType: string, inputType: string) => {
    if (optionType === "startDate" && startDateRef.current) {
      inputOptionChange(inputType, startDateRef, setStartDate);
    } else if (optionType !== "startDate" && endDateRef.current) {
      inputOptionChange(inputType, endDateRef, setEndDate);
    }
  };

  return (
    <div
      className={
        "flex flex-col justify-between gap-5 bg-white shadow-[0_0_48px_-10px_#0000007a] w-full lg:col-span-2 lg:shadow-none"
      }
    >
      <div
        className={
          "px-4 py-7 w-full sm:px-8 sm:py-8 md:px-10 lg:px-14 xl:px-16 xl:py-10"
        }
      >
        <div className={"flex flex-col items-start gap-5 w-full"}>
          <h2
              data-testid={"Dynamics"}
            className={
              "text-lg text-[#282D32] font-bold md:text-xl xl:text-2xl"
            }
          >
            {t("The dynamics of student performance (average grade)")}
          </h2>

          <div
            className={
              "flex flex-col items-center gap-4 w-full min-[480px]:flex-row"
            }
          >
            <div
              className={
                "flex items-center gap-2 flex-nowrap max-[480px]:w-full"
              }
            >
              <p className={"text-base text-[#8494A5] font-bold"}>
                {t("FROM")}
              </p>

              <div className="input-number">
                <input
                  ref={startDateRef}
                  className="input-number__input"
                  type="number"
                  value={startDate}
                  onChange={(e) => setStartDate(parseInt(e.target.value))}
                  min="2014"
                  max="2020"
                />

                <div
                  className="input-number__top"
                  onClick={() => inputDateChange("startDate", "increment")}
                ></div>

                <div
                  className="input-number__bottom"
                  onClick={() => inputDateChange("startDate", "decrement")}
                ></div>
              </div>
            </div>

            <div
              className={
                "flex items-center gap-2 flex-nowrap max-[480px]:w-full"
              }
            >
              <p className={"text-base text-[#8494A5] font-bold"}>{t("TO")}</p>

              <div className="input-number w-fit">
                <input
                  ref={endDateRef}
                  className="input-number__input"
                  type="number"
                  value={endDate}
                  onChange={(e) => setEndDate(parseInt(e.target.value))}
                  min="2014"
                  max="2020"
                />

                <div
                  className="input-number__top"
                  onClick={() => inputDateChange("endDate", "increment")}
                ></div>

                <div
                  className="input-number__bottom"
                  onClick={() => inputDateChange("endDate", "decrement")}
                ></div>
              </div>
            </div>
          </div>

          <div className={"h-[480px] w-full"}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={filteredData}
                margin={{ top: 50, right: 20, left: 20, bottom: 50 }}
              >
                <CartesianGrid stroke="#f5f5f5" />

                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: "#ccc" }}
                  tickLine={false}
                  dy={-10}
                  padding={{ left: 20, right: 20 }}
                />

                <Tooltip
                  formatter={(value: any) => `${value}%`}
                  labelFormatter={(label: any) => `Year: ${label}`}
                  cursor={false}
                />

                <Line
                  type="monotone"
                  dataKey="percentage"
                  stroke="#8884d8"
                  strokeWidth={3}
                  dot={<CustomDot />}
                  activeDot={{ r: 8 }}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <SignificantChanges maxIncrease={maxIncrease} maxDecrease={maxDecrease} />
    </div>
  );
};
