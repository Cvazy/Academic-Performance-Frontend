import { useTranslation } from "react-i18next";
import SearchIcon from "shared/assets/images/search.svg";
import { useEffect, useState } from "react";
import { FoundStudentsList } from "./FoundStudentsList";
import { studentApi } from "../../../entities";

export const StudentSearch = () => {
  const { t } = useTranslation();
  const [focusState, setFocusState] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");

  const [isQueryComplete, setIsQueryComplete] = useState(false);

  const [triggerSearch, { data: foundStudents }] =
    studentApi.useLazyFetchSearchedStudentsQuery();

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchPrompt.trim()) {
        triggerSearch(searchPrompt).then(() => {
          setIsQueryComplete(true);
        });
      }
    }, 800);

    return () => {
      clearTimeout(handler);
      setIsQueryComplete(false);
    };
  }, [searchPrompt, triggerSearch]);

  const handleBlur = () => {
    if (!searchPrompt) {
      setFocusState(false);
      setIsQueryComplete(false);
    }
  };

  return (
    <div
      className={
        "flex items-center relative h-[40px] w-full lg:w-auto lg:h-full"
      }
    >
      <div className={"absolute left-0 top-3 z-20 lg:top-[1.675rem]"}>
        <img
          className={"block min-w-4 max-w-4 min-h-4 max-h-4 select-none"}
          src={SearchIcon}
          alt={"Search"}
          loading={"lazy"}
          draggable={false}
        />
      </div>

      <label className={"relative ml-6 w-full lg:w-auto"}>
        <p
          className={`absolute ${focusState ? "scale-[0.6] top-[-16px] left-[-8px]" : "left-0 top-0"} text-base font-medium text-[#2B3034] text-opacity-30`}
        >
          {t("find...")}
        </p>

        <input
          className={
            "text-base font-medium text-[#2B3034] text-opacity-30 bg-none outline-none border-b border-solid w-full pb-1 lg:pb-0 lg:border-none lg:w-auto"
          }
          value={searchPrompt}
          onChange={({ target }) => {
            setSearchPrompt(target.value);
            setIsQueryComplete(false);
          }}
          onFocus={() => setFocusState(true)}
          onBlur={handleBlur}
          type={"text"}
        />
      </label>

      {isQueryComplete && searchPrompt.trim() && (
        <div className={"absolute left-0 right-0 top-[50px]"}>
          <FoundStudentsList students={foundStudents || []} />
        </div>
      )}
    </div>
  );
};
