import { AcademicPerformanceChart, Sidebar } from "widgets";
import { academicPerformanceApi } from "../../../entities";
import { Loader } from "shared";
import React from "react";
import { useTranslation } from "react-i18next";
import { dataTransformer } from "widgets";

const GraphsPage = () => {
  const { t } = useTranslation();

  const { data, isLoading, isError } =
    academicPerformanceApi.useFetchAllDisciplinesQuery(null);

  const initialData = dataTransformer(data || []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
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
            "grid gap-5 w-full lg:gap-0 lg:grid-cols-3 lg:shadow-[0_0_48px_-10px_#0000007a]"
          }
        >
          <Sidebar initialData={initialData} />

          <AcademicPerformanceChart initialData={initialData} />
        </div>
      )}
    </>
  );
};

export default GraphsPage;
