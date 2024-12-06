export interface DataRow {
  year: number;
  percentage: number;
  count: number;
  change: string;
  changeType: "positive" | "negative";
}

export interface SignificantChangesProps {
  maxIncrease: DataRow | null;
  maxDecrease: DataRow | null;
}
