import { useTranslation } from "react-i18next";

const StudentPage = () => {
  const { t } = useTranslation("studentPage");

  return (
    <div className={"flex items-start justify-center w-full h-full"}>
      <div className={"flex flex-col gap-8 w-full md:gap-10 xl:gap-14"}>
        <div
          className={
            "flex flex-col items-start gap-5 flex-nowrap w-full md:flex-row"
          }
        >
          <div
            className={
              "flex items-center justify-center min-w-16 min-h-16 rounded-full bg-[#8B7EF6] min-[480px]:min-w-20 min-[480px]:min-h-20 sm:min-w-24 sm:min-h-24 md:min-w-32 md:min-h-32 lg:min-w-48 lg:min-h-48 xl:80 xl:80"
            }
          >
            <p
              className={
                "text-white text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              }
            >
              ПМ
            </p>
          </div>

          <div className={"flex flex-col items-start gap-5 w-full"}>
            <h1
              className={
                "text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl"
              }
            >
              Мурахтанов Павел Игоревич
            </h1>

            <div className={"grid gap-3 w-full md:grid-cols-2"}>
              <div className={"flex flex-col items-start gap-1 w-full"}>
                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>{t("Status")}:</span>{" "}
                  {t("Studying")}
                </p>

                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>{t("Gender")}:</span>{" "}
                  {t("Male")}
                </p>

                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>{t("Course")}:</span> 3
                </p>
              </div>

              <div className={"flex flex-col items-start gap-1 w-full"}>
                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>{t("Group")}:</span> 221-331
                </p>

                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>{t("Date of birth")}:</span>{" "}
                  24.02.2004
                </p>

                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>{t("Faculty")}:</span> Факультет
                  информационных технологий
                </p>
              </div>

              <div className={"flex flex-col items-start gap-1 w-full"}>
                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>{t("Specialization")}:</span>{" "}
                  10.05.03 Информационная безопасность автоматизированных систем
                </p>

                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>
                    {t("The form of education")}:
                  </span>{" "}
                  {t("Full-time")}
                </p>

                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>{t("Type of financing")}:</span>{" "}
                  {t("Budget")}
                </p>
              </div>

              <div className={"flex flex-col items-start gap-1 w-full"}>
                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>
                    {t("The level of education")}:
                  </span>{" "}
                  {t("Specialty")}
                </p>

                <p className={"text-sm text-[#282D32] sm:text-base"}>
                  <span className={"font-bold"}>
                    {t("Year of recruitment")}:
                  </span>{" "}
                  2022/2023
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>{/*Успеваемость студента под вопросом*/}</div>
      </div>
    </div>
  );
};

export default StudentPage;
