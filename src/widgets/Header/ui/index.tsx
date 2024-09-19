import { ChangeLanguage } from "./ChangeLanguage";
import { HeaderNavigation } from "./HeaderNavigation";
import { ProfileBlock } from "./ProfileBlock";
import { StudentSearch } from "features/index";

export const Header = () => {
  return (
    <header
      className={
        "bg-white border-b border-solid border-[#2B3034] border-opacity-10 w-full h-[68px]"
      }
    >
      <div className={"flex justify-center w-full h-full"}>
        <div className={"max-w-[1440px] w-full h-full"}>
          <div className={"flex items-center gap-8 w-full h-full px-4 md:px-7"}>
            <div
              className={
                "flex items-center justify-center border-r border-solid border-[#2B3034] border-opacity-10 h-full pr-4 md:pr-7"
              }
            >
              <ChangeLanguage />
            </div>

            <div
              className={
                "flex items-center justify-between gap-8 w-full h-full"
              }
            >
              <StudentSearch />

              <HeaderNavigation />

              <ProfileBlock />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
