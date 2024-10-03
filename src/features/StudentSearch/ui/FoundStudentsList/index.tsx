import ProfileIcon from "shared/assets/images/profile.svg";
import { Link } from "react-router-dom";

export const FoundStudentsList = () => {
  return (
    <div
      className={
        "w-full bg-white shadow-[0_16px_48px_-10px_#0000007a] border border-solid border-[#4A6078] border-t-0 rounded-b-md"
      }
    >
      <div className={"flex flex-col max-h-28 overflow-y-scroll w-full"}>
        <Link
          to={"/student"}
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
            Мурахтанов Павел Игоревич
          </p>
        </Link>

        <Link
          to={"/student"}
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
            Нечаев Роман Игоревич
          </p>
        </Link>
      </div>
    </div>
  );
};
