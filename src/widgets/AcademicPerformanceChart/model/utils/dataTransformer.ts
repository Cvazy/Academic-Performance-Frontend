import { DataRow } from "../types";
import { IAcademicPerformance } from "../../../..//entities";

export function dataTransformer(data: IAcademicPerformance[]): DataRow[] {
  const groupedByYear = data.reduce(
    (acc, record) => {
      if (!acc[record.year]) {
        acc[record.year] = [];
      }
      acc[record.year].push(record.mark);
      return acc;
    },
    {} as Record<number, number[]>,
  );

  const result = Object.entries(groupedByYear)
    .map(([year, marks]): DataRow => {
      const yearNum = parseInt(year, 10);
      const count = marks.length;
      const percentage = marks.reduce((sum, mark) => sum + mark, 0) / count;
      return {
        year: yearNum,
        percentage: +percentage.toFixed(1),
        count,
        change: "0",
        changeType: "positive",
      };
    })
    .sort((a, b) => a.year - b.year);

  for (let i = 1; i < result.length; i++) {
    const prev = result[i - 1];
    const curr = result[i];
    const changeValue =
      ((curr.percentage - prev.percentage) / prev.percentage) * 100;
    curr.change = `${changeValue > 0 ? "+" : ""}${changeValue.toFixed(1)}%`;
    curr.changeType = changeValue >= 0 ? "positive" : "negative";
  }

  return result;
}
