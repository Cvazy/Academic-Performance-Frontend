import { FC } from "react";
import { SmallStatisticBar } from "widgets/Description/ui/SmallStatisticBar";

interface IStudentsByCourse {
  newStudentsPercent: string;
  newStudentsCount: number;
  secondCoursePercent: string;
  secondCourseCount: number;
  thirdCoursePercent: string;
  thirdCourseCount: number;
  fourthCoursePercent: string;
  fourthCourseCount: number;
  fifthCoursePercent: string;
  fifthCourseCount: number;
}

export const StudentsByCourse: FC<IStudentsByCourse> = ({
  newStudentsPercent,
  newStudentsCount,
  secondCoursePercent,
  secondCourseCount,
  thirdCoursePercent,
  thirdCourseCount,
  fourthCoursePercent,
  fourthCourseCount,
  fifthCoursePercent,
  fifthCourseCount,
}) => {
  return (
    <div className={"flex flex-wrap gap-1 w-full"}>
      {!!newStudentsCount && (
        <SmallStatisticBar
          course={1}
          percent={+newStudentsPercent / 100}
          qnt={newStudentsCount}
          bgColor={"#F9C0C0"}
        />
      )}

      {!!secondCourseCount && (
        <SmallStatisticBar
          course={2}
          percent={+secondCoursePercent / 100}
          qnt={secondCourseCount}
          bgColor={"#CABAE3"}
        />
      )}

      {!!thirdCourseCount && (
        <SmallStatisticBar
          course={3}
          percent={+thirdCoursePercent / 100}
          qnt={thirdCourseCount}
          bgColor={"#BBE6CE"}
        />
      )}

      {!!fourthCourseCount && (
        <SmallStatisticBar
          course={4}
          percent={+fourthCoursePercent / 100}
          qnt={fourthCourseCount}
          bgColor={"#A7B4FF"}
        />
      )}

      {!!fifthCourseCount && (
        <SmallStatisticBar
          course={5}
          percent={+fifthCoursePercent / 100}
          qnt={fifthCourseCount}
          bgColor={"#EAC8ED"}
        />
      )}
    </div>
  );
};
