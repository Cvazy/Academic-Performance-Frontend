import { FC } from "react";
import { useTranslation } from "react-i18next";
import { HeaderNavigation } from "widgets/Header/ui/HeaderNavigation";
import { StudentSearch } from "features";

interface MobileMenuProps {
  visible: boolean;
}

export const MobileMenu: FC<MobileMenuProps> = ({ visible }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`block absolute z-50 top-[68px] w-full duration-500 bg-white overflow-hidden ${visible ? "max-h-screen border-b border-solid border-[#2B3034] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]" : "max-h-0"} lg:hidden`}
    >
      <div className={"max-w-[1440px] w-full"}>
        <div className={"w-full px-4 py-6 sm:py-7 md:py-8 md:px-7"}>
          <div className={"flex flex-col items-start gap-7 w-full md:gap-8"}>
            <p className={"text-xl text-[#282D32] font-bold md:text-2xl"}>
              {t("Menu")}
            </p>

            <div className={"flex flex-col items-start gap-5 w-full"}>
              <StudentSearch />

              <HeaderNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
