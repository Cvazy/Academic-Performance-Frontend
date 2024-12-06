import { NavItem } from "./NavItem";

export const HeaderNavigation = () => {
  return (
    <div
      className={
        "flex flex-col items-start gap-4 flex-nowrap h-full lg:gap-8 lg:items-center lg:flex-row"
      }
    >
      <NavItem link={"/"} text={"Home"} />

      <NavItem link={"/tables"} text={"Tables"} />

      <NavItem link={"/graphs"} text={"Graphs"} />
    </div>
  );
};
