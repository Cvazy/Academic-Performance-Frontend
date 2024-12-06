import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { COLORS } from "../model";
import { useTranslation } from "react-i18next";
import {specializationApi, groupApi} from "../../../../../entities";

export const CustomPieChart = () => {
  const { t } = useTranslation();

  const { data: specialities, error: specialitiesError } =
    specializationApi.useFetchAllSpecialitiesQuery(null);

  const { data: groups, error: groupsError } =
    groupApi.useFetchAllGroupsQuery(null);

  const data = specialities?.map((speciality) => {
    const groupCount = groups?.filter(
      (group) => group.speciality === speciality.id,
    ).length;

    return {
      name: speciality.name,
      value: groupCount,
    };
  });

  return (
    <>
      {specialitiesError || groupsError ? (
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
        <div className={"flex items-center justify-center w-full"}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value: number, name: string) => [
                `${value} групп`,
                name,
              ]}
            />

            <Legend wrapperStyle={{ width: "auto !important" }} />
          </PieChart>
        </div>
      )}
    </>
  );
};
