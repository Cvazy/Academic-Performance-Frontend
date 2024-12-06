import ProfileIcon from "shared/assets/images/profile.svg";
import { IStudent } from "../../../../entities";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface IFoundStudentsList {
  students: IStudent[];
}

export const FoundStudentsList: FC<IFoundStudentsList> = ({ students }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        "w-full bg-white shadow-[0_16px_48px_-10px_#0000007a] border border-solid border-[#4A6078] border-t-0 rounded-b-md"
      }
    >
      <div className={"flex flex-col max-h-28 overflow-y-scroll w-full"}>
        {!!students.length ? (
          students.map(({ id, first_name, last_name, middle_name }) => (
            <div
              key={id}
              className={
                "flex items-center px-2.5 py-1.5 min-h-8 overflow-hidden gap-1.5 w-full hover:bg-[#8ccbff5e]"
              }
            >
              <img
                className={"block select-none min-w-5 max-w-5"}
                src={ProfileIcon}
                alt={"Profile"}
                loading={"lazy"}
                draggable={"false"}
              />

              <p
                className={
                  "text-[#4A6078] text-sm font-normal whitespace-nowrap text-ellipsis overflow-hidden"
                }
              >
                {last_name} {first_name} {middle_name}
              </p>
            </div>
          ))
        ) : (
          <div
            className={
              "flex justify-center items-center px-2.5 py-1.5 min-h-8 w-full"
            }
          >
            <p
              className={
                "text-[#4A6078] text-sm font-normal whitespace-nowrap text-ellipsis overflow-hidden"
              }
            >
              {t("Nothing was found")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
