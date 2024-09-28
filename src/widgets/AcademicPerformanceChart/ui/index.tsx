import { useEffect, useState } from "react";
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

const initialData: DataRow[] = [
  {
    year: 2014,
    percentage: 57,
    count: 2671,
    change: "+3%",
    changeType: "positive",
  },
  {
    year: 2015,
    percentage: 47,
    count: 2171,
    change: "-8%",
    changeType: "negative",
  },
  {
    year: 2016,
    percentage: 44,
    count: 1971,
    change: "-3%",
    changeType: "negative",
  },
  {
    year: 2017,
    percentage: 45,
    count: 1981,
    change: "+1%",
    changeType: "positive",
  },
  {
    year: 2020,
    percentage: 78,
    count: 4271,
    change: "+38%",
    changeType: "positive",
  },
];

export const AcademicPerformanceChart = () => {
  const [filteredData, setFilteredData] = useState<DataRow[]>(initialData);
  const [startDate, setStartDate] = useState<number>(2014);
  const [endDate, setEndDate] = useState<number>(2020);

  useEffect(() => {
    const filtered = initialData.filter(
      (data) => data.year >= startDate && data.year <= endDate,
    );
    setFilteredData(filtered);
  }, [startDate, endDate]);

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
            className={
              "text-lg text-[#282D32] font-bold md:text-xl xl:text-2xl"
            }
          >
            Yearly Gap Rate
          </h2>

          <div>
            <label>
              Start Year:
              <input
                type="number"
                value={startDate}
                onChange={(e) => setStartDate(parseInt(e.target.value))}
                min="2014"
                max="2020"
              />
            </label>

            <label style={{ marginLeft: "20px" }}>
              End Year:
              <input
                type="number"
                value={endDate}
                onChange={(e) => setEndDate(parseInt(e.target.value))}
                min="2014"
                max="2020"
              />
            </label>
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

      <SignificantChanges />
    </div>
  );
};
