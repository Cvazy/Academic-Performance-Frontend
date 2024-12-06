export enum FormOfEducationEnum {
  "Очная",
  "Заочная",
  "Очно-заочная",
}

export interface IFormOfEducation {
  id: number | string;
  form: FormOfEducationEnum;
}
