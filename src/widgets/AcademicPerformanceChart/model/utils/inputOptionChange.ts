import { Dispatch, RefObject, SetStateAction } from "react";

export const inputOptionChange = (
  inputType: string,
  elementRef: RefObject<HTMLInputElement>,
  fn: Dispatch<SetStateAction<number>>,
) => {
  if (!elementRef?.current) {
    return;
  }

  const currentValue = Number(elementRef.current.value);

  if (inputType === "increment") {
    const newValue = currentValue + 1;
    elementRef.current.value = String(newValue);
    fn(newValue);
  } else {
    const newValue = currentValue - 1;
    elementRef.current.value = String(newValue);
    fn(newValue);
  }
};
