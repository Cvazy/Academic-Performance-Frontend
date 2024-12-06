import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { DayOfWeek, MonthOfYear } from "../model";

export const RelevantTimeBlock = () => {
  const { t } = useTranslation("");

  const [time, setTime] = useState<string>(() => {
    const date = new Date();
    return date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");
  });

  const date = new Date();
  const numDayOfWeek = date.getDay();
  const numMonthOfYear = date.getMonth();
  const today = date.getDate();
  const year = date.getFullYear();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setTime(
        currentDate.getHours() +
          ":" +
          String(currentDate.getMinutes()).padStart(2, "0"),
      );
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p
      data-testid={"time-block"}
      className={"text-base font-medium text-[#A3A5A8]"}
    >
      {time}, {t(DayOfWeek[numDayOfWeek])}, {t(MonthOfYear[numMonthOfYear])}{" "}
      {today},{year}
    </p>
  );
};
