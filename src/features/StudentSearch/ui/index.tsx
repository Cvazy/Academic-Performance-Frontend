import { useTranslation } from "react-i18next";
import SearchIcon from "shared/assets/images/search.svg";
import { useState } from "react";

export const StudentSearch = () => {
  const { t } = useTranslation();
  const [focusState, setFocusState] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");

  const handleBlur = () => {
    if (!searchPrompt) {
      setFocusState(false);
    }
  };

  return (
    <div className={"flex items-center relative h-full"}>
      <div className={"absolute left-0 top-[1.675rem] z-20"}>
        <img
          className={"block min-w-4 max-w-4 min-h-4 max-h-4"}
          src={SearchIcon}
          alt={"Search"}
          loading={"lazy"}
          draggable={false}
        />
      </div>

      <label className={"relative ml-6"}>
        <p
          className={`absolute ${focusState ? "scale-[0.6] top-[-16px] left-[-8px]" : "left-0 top-0"} text-base font-medium text-[#2B3034] text-opacity-30`}
        >
          {t("find...")}
        </p>

        <input
          className={
            "text-base font-medium text-[#2B3034] text-opacity-30 bg-none outline-none border-none"
          }
          value={searchPrompt}
          onChange={({ target }) => setSearchPrompt(target.value)}
          onFocus={() => setFocusState(true)}
          onBlur={handleBlur}
          type={"text"}
        />
      </label>
    </div>
  );
};
