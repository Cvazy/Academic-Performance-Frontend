import { useTranslation } from "react-i18next";
import { StudentsTable } from "widgets";

const TablesPage = () => {
  const { t } = useTranslation("tablesPage");

  return (
    <div className={"flex flex-col items-start gap-4 w-full h-full md:gap-6"}>
      <h2
          data-testid={"StudentData"}
          className="text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl"
      >
        {t("Student data")}
      </h2>

      <StudentsTable />
    </div>
  );
};

export default TablesPage;
