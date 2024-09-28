import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const { t } = useTranslation("graphsPage");

  return (
    <div
      className={
        "bg-[#E6EDFC] shadow-[0_0_48px_-10px_#0000007a] w-full lg:shadow-none"
      }
    >
      <div className={"px-4 py-7 w-full sm:px-5 sm:py-8 xl:px-6 xl:py-12"}>
        <div
          className={"flex flex-col items-start gap-6 w-full sm:gap-7 md:gap-8"}
        >
          <h2 className="text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl">
            {t("Description")}
          </h2>
        </div>
      </div>
    </div>
  );
};
