import { useTranslation } from "react-i18next";
import { CustomPieChart } from "./CustomPieChart";
import { Loader } from "shared";
import {groupApi, specializationApi} from "../../../entities";

export const Distribution = () => {
  const { t } = useTranslation("mainPage");

  const { data: specialities, isLoading: specialitiesIsLoading } =
    specializationApi.useFetchAllSpecialitiesQuery(null);

  const { data: groups, isLoading: groupsIsLoading } =
    groupApi.useFetchAllGroupsQuery(null);

  if (!groups?.length || !specialities?.length) {
    return <div></div>;
  }

  if (specialitiesIsLoading || groupsIsLoading) {
    return <Loader />;
  }

  return (
    <div className={"bg-white w-full lg:max-w-[580px]"}>
      <div
        className={
          "py-6 px-5 w-full h-full sm:py-7 sm:px-6 md:p-8 lg:py-10 lg:px-11"
        }
      >
        <div className={"flex flex-col items-start gap-8 w-full h-full"}>
          <h2
              data-testid={'Distribution'}
            className={
              "text-xl text-[#282D32] font-bold md:text-2xl xl:text-3xl"
            }
          >
            {t("Distribution")}
          </h2>

          <CustomPieChart />
        </div>
      </div>
    </div>
  );
};
