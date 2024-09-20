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
import { DataPoint } from "../model";

const data: DataPoint[] = [
  { year: "2014", value1: 2400, value2: 1000 },
  { year: "2015", value1: 1398, value2: 1800 },
  { year: "2016", value1: 9800, value2: 6500 },
  { year: "2017", value1: 3908, value2: 3000 },
  { year: "2018", value1: 4800, value2: 4000 },
];

export const GraduateRates = () => {
  const xAxisPadding = { left: 20, right: 20 };
  const yAxisPadding = { top: 20, bottom: 20 };

  return (
    <div className={"bg-white w-full"}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
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
            name="Overall Gap Rate"
            dataKey="value1"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorValue1)"
          />

          <Area
            type="monotone"
            name="Overall system-wide student Grad. Rate"
            dataKey="value2"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorValue2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
