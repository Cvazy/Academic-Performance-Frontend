import { IStudent } from "../../../../entities";
import { DataPoint } from "widgets/GraduateRates/model";

export const transformStudentsToDataPoints = (
  students: IStudent[],
): DataPoint[] => {
  const yearOfEntryCount: Record<string, number> = {};
  const yearOfEndingCount: Record<string, number> = {};

  students.forEach((student) => {
    yearOfEntryCount[student.year_of_entry] =
      (yearOfEntryCount[student.year_of_entry] || 0) + 1;

    yearOfEndingCount[student.year_of_ending] =
      (yearOfEndingCount[student.year_of_ending] || 0) + 1;
  });

  const allYears = Array.from(
    new Set([
      ...Object.keys(yearOfEntryCount),
      ...Object.keys(yearOfEndingCount),
    ]),
  ).sort();

  return allYears.map((year) => ({
    year,
    value1: yearOfEntryCount[year] || 0,
    value2: yearOfEndingCount[year] || 0,
  }));
};
