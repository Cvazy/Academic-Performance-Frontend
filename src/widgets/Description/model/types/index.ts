export interface IBar {
  title: string;
  qnt: number;
  percent: number;
}

export interface ICourseBar extends Omit<IBar, "title"> {
  course: number;
  bgColor: string;
}
