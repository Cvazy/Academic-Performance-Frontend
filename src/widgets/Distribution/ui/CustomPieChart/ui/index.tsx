import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { COLORS, DataPoint } from "../model";

export const data: DataPoint[] = [
  { name: "Asian", value: 19 },
  { name: "Black", value: 21 },
  { name: "Hispanic", value: 19 },
  { name: "Unknown", value: 19 },
  { name: "2 and more", value: 40 },
];

export const CustomPieChart = () => {
  return (
    <div className={"flex items-center justify-center w-full"}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip
          formatter={(value: number, name: string) => [`${value}%`, name]}
        />

        <Legend wrapperStyle={{ width: "auto !important" }} />
      </PieChart>
    </div>
  );
};
