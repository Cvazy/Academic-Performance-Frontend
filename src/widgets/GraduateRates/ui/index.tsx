import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { customLegend } from "./customLegend";
import { studentApi } from "../../../entities";
import React from "react";
import { useTranslation } from "react-i18next";
import { transformStudentsToDataPoints } from "../model";

export const GraduateRates = () => {
  const { t } = useTranslation();

  const { data: students, isError } = studentApi.useFetchAllStudentsQuery(null);

  const dataPoints = transformStudentsToDataPoints(students || []);

  const xAxisPadding = { left: 20, right: 20 };
  const yAxisPadding = { top: 20, bottom: 20 };

  return (
    <div className={"bg-white w-full"}>
      {isError ? (
        <div className={"flex items-center justify-center w-full h-full"}>
          <p
            className={
              "text-xl text-[#e54747] font-bold text-center w-full md:text-2xl xl:text-3xl"
            }
          >
            {t("An error occurred while executing the request.")}
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={dataPoints}
            className={
              "mx-4 my-5 !max-w-fit sm:mx-7 sm:my-6 md:mx-8 lg:mx-10 lg:my-8 xl:mx-16 xl:my-12"
            }
          >
            <defs>
              <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5E77FF" stopOpacity={1} />
                <stop offset="95%" stopColor="#5E77FF" stopOpacity={0.4} />
              </linearGradient>

              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C887EB" stopOpacity={1} />
                <stop offset="95%" stopColor="#C887EB" stopOpacity={0.4} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              padding={xAxisPadding}
            />

            <YAxis axisLine={false} tickLine={false} padding={yAxisPadding} />

            <Tooltip />

            <Legend
              content={customLegend}
              verticalAlign="top"
              wrapperStyle={{ width: "auto !important" }}
            />

            <Area
              type="monotone"
              name={t("The number of students enrolled")}
              dataKey="value1"
              stroke="#5E77FF"
              fillOpacity={1}
              fill="url(#colorValue1)"
            />

            <Area
              type="monotone"
              name={t("The number of students who graduated")}
              dataKey="value2"
              stroke="#C887EB"
              fillOpacity={1}
              fill="url(#colorValue2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
