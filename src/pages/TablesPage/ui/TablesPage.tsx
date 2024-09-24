import { useTranslation } from "react-i18next";
import { EmployeesTable, StudentsTable } from "widgets";

const TablesPage = () => {
  const { t } = useTranslation("tablesPage");

  return (
    <div className={"flex flex-col gap-6 w-full md:gap-8 xl:gap-10"}>
      <div className={"flex flex-col items-start gap-4 w-full md:gap-6"}>
        <h2 className="text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl">
          {t("Employee data")}
        </h2>

        <EmployeesTable />
      </div>

      <div className={"flex flex-col items-start gap-4 w-full md:gap-6"}>
        <h2 className="text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl">
          {t("Student data")}
        </h2>

        <StudentsTable />
      </div>
    </div>
  );
};

export default TablesPage;
