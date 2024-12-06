import { useTranslation } from "react-i18next";
import { BigStatisticBar } from "widgets/Description/ui/BigStatisticBar";
import { studentApi } from "../../../entities";
import React, { useEffect, useState } from "react";
import { Loader } from "shared";
import { StudentsByCourse } from "widgets/StudentsByCourse";

export const Description = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const { t } = useTranslation("mainPage");

  const {
    data: allStudentsList,
    isLoading: studentsIsLoading,
    isError,
  } = studentApi.useFetchAllStudentsQuery(null);

  const students = allStudentsList?.filter(
    ({ year_of_ending }) => year_of_ending >= currentYear,
  );

  const [newStudentsPercent, setNewStudentsPercent] = useState<string>("0");
  const [newStudentsCount, setNewStudentsCount] = useState<number>(0);

  const [graduatingStudentsPercent, setGraduatingStudentsPercent] =
    useState<string>("0");
  const [graduatingStudentsCount, setGraduatingStudentsCount] =
    useState<number>(0);

  const [secondCoursePercent, setSecondCoursePercent] = useState<string>("0");
  const [secondCourseCount, setSecondCourseCount] = useState<number>(0);

  const [thirdCoursePercent, setThirdCoursePercent] = useState<string>("0");
  const [thirdCourseCount, setThirdCourseCount] = useState<number>(0);

  const [fourthCoursePercent, setFourthCoursePercent] = useState<string>("0");
  const [fourthCourseCount, setFourthCourseCount] = useState<number>(0);

  const [fifthCoursePercent, setFifthCoursePercent] = useState<string>("0");
  const [fifthCourseCount, setFifthCourseCount] = useState<number>(0);

  useEffect(() => {
    if (students) {
      const academicYearStart =
        currentMonth < 8 ? currentYear - 1 : currentYear;

      const newStudents = students.filter(
        (student) => student.year_of_entry === academicYearStart,
      );

      const newStudentsCount = newStudents.length;
      const newStudentsPercent = (newStudentsCount / students.length) * 100;

      setNewStudentsCount(newStudentsCount);
      setNewStudentsPercent(newStudentsPercent.toFixed(1));

      const graduatingStudents = students.filter((student) => {
        return (
          student.year_of_ending === currentYear ||
          (student.year_of_ending === currentYear + 1 && 5 <= currentMonth)
        );
      });

      const graduatingStudentsCount = graduatingStudents.length;
      const graduatingStudentsPercent =
        (graduatingStudentsCount / students.length) * 100;

      setGraduatingStudentsCount(graduatingStudentsCount);
      setGraduatingStudentsPercent(graduatingStudentsPercent.toFixed(1));

      const courseCounts = [0, 0, 0, 0, 0];

      students.forEach((student) => {
        const yearsSinceEntry = currentYear - student.year_of_entry;
        const isBeforeSeptember = currentMonth < 8;

        let course = yearsSinceEntry + (isBeforeSeptember ? 0 : 1);

        if (course >= 1 && course <= 5) {
          courseCounts[course - 1]++;
        }
      });

      const totalStudents = students.length;

      setSecondCourseCount(courseCounts[1]);
      setSecondCoursePercent(
        ((courseCounts[1] / totalStudents) * 100).toFixed(1),
      );

      setThirdCourseCount(courseCounts[2]);
      setThirdCoursePercent(
        ((courseCounts[2] / totalStudents) * 100).toFixed(1),
      );

      setFourthCourseCount(courseCounts[3]);
      setFourthCoursePercent(
        ((courseCounts[3] / totalStudents) * 100).toFixed(1),
      );

      setFifthCourseCount(courseCounts[4]);
      setFifthCoursePercent(
        ((courseCounts[4] / totalStudents) * 100).toFixed(1),
      );
    }
  }, [students, currentYear, currentMonth]);

  if (studentsIsLoading) {
    return <Loader />;
  }

  return (
    <div className={"bg-white w-full lg:max-w-[750px]"}>
      <div
        className={
          "py-6 px-5 w-full h-full sm:py-7 sm:px-6 md:p-8 lg:py-10 lg:px-11"
        }
      >
        {isError ? (
          <div className={"flex items-center justify-center w-full h-full"}>
            <p
              className={
                "text-xl text-[#e54747] font-bold text-center w-full md:text-2xl xl:text-3xl"
              }
            >
              {t("An error occurred while executing the request.")}
            </p>
          </div>
        ) : (
          <div
            className={
              "flex flex-col items-start gap-6 w-full md:gap-7 xl:gap-8"
            }
          >
            <div
              className={
                "flex flex-col items-start gap-7 w-full md:gap-8 xl:gap-10"
              }
            >
              <h2
                className={
                  "text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl"
                }
              >
                {t("Description")}
              </h2>

              <div className={"text-sm text-[#282D32]"}>
                <p>
                  {t("In")} {currentYear},
                </p>

                <p>
                  {t("Overall sub-Group count Enrolled")}: {students?.length}
                </p>

                <p>
                  {t("Total number of students graduating this year")}:{" "}
                  {newStudentsPercent}%， {newStudentsCount}
                </p>

                <p>
                  {t("The number of students enrolled")}:{" "}
                  {graduatingStudentsPercent}%， {graduatingStudentsCount}
                </p>
              </div>
            </div>

            <div className={"flex flex-col gap-8 w-full"}>
              <div className={"flex flex-col gap-6 w-full"}>
                <BigStatisticBar
                  title={"Freshmen"}
                  qnt={newStudentsCount}
                  percent={+newStudentsPercent / 100}
                />

                <BigStatisticBar
                  title={"Graduates"}
                  qnt={graduatingStudentsCount}
                  percent={+graduatingStudentsPercent / 100}
                />
              </div>

              <div className={"flex flex-col items-start gap-4 w-full"}>
                <p
                  className={"text-sm !leading-6 font-bold text-[#9497C0] pl-4"}
                >
                  {t("The number of students enrolled in the courses")}
                </p>

                <StudentsByCourse
                  newStudentsPercent={newStudentsPercent}
                  newStudentsCount={newStudentsCount}
                  secondCoursePercent={secondCoursePercent}
                  secondCourseCount={secondCourseCount}
                  thirdCoursePercent={thirdCoursePercent}
                  thirdCourseCount={thirdCourseCount}
                  fourthCoursePercent={fourthCoursePercent}
                  fourthCourseCount={fourthCourseCount}
                  fifthCoursePercent={fifthCoursePercent}
                  fifthCourseCount={fifthCourseCount}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
