export interface DataRow {
  year: number;
  percentage: number;
  count: number;
  change: string;
  changeType: "positive" | "negative";
}
