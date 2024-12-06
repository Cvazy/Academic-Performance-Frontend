import { NavLink } from "react-router-dom";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface NavItemProps {
  link: string;
  text: string;
}

export const NavItem: FC<NavItemProps> = ({ link, text }) => {
  const { t } = useTranslation();

  return (
    <NavLink
      to={link}
      data-testid={text}
      className={({ isActive }) =>
        [
          "flex items-center justify-center text-[#2B3034] text-base h-full",
          isActive
            ? "border-b border-solid border-[#2B3034] pb-3 lg:pb-0"
            : "text-opacity-30 hover:text-opacity-100",
        ].join(" ")
      }
    >
      {t(text)}
    </NavLink>
  );
};
