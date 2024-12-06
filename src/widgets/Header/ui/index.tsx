import { useState } from "react";

import { ChangeLanguage } from "./ChangeLanguage";
import { HeaderNavigation } from "./HeaderNavigation";
import { ProfileBlock } from "./ProfileBlock";
import { MobileMenu, StudentSearch } from "features";
import { Button } from "shared/ui";

import MenuIcon from "shared/assets/images/menu.svg";
import CloseIcon from "shared/assets/images/close.svg";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header
      data-testid="header"
      className={
        "bg-white border-b border-solid border-[#2B3034] sticky top-0 z-50 border-opacity-10 w-full h-[68px]"
      }
    >
      <div className={"flex justify-center relative w-full h-full"}>
        <MobileMenu visible={menuVisible} />

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
                "flex items-center justify-end gap-8 w-full h-full lg:justify-between"
              }
            >
              <div className={"hidden items-center h-full lg:flex"}>
                <StudentSearch />
              </div>

              <div className={"hidden items-center h-full lg:flex"}>
                <HeaderNavigation />
              </div>

              <div className={"flex items-center gap-1 h-full"}>
                <Button
                  paddings={"px-4 py-1 lg:hidden"}
                  onClick={() => setMenuVisible(!menuVisible)}
                >
                  <img
                    className={"w-6 h-6 select-none"}
                    src={menuVisible ? CloseIcon : MenuIcon}
                    alt={"menu"}
                    loading={"lazy"}
                    draggable={"false"}
                  />
                </Button>

                <ProfileBlock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
