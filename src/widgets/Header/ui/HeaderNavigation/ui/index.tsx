import { NavItem } from "./NavItem";

export const HeaderNavigation = () => {
  return (
    <div className={"flex items-center gap-8 flex-nowrap h-full"}>
      <NavItem link={"/"} text={"Home"} />

      <NavItem link={"/tables"} text={"Tables"} />

      <NavItem link={"/graphs"} text={"Graphs"} />
    </div>
  );
};
