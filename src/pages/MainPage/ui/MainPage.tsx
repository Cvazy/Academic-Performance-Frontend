import { Description, Distribution, GraduateRates } from "widgets";

const MainPage = () => {
  return (
    <div className={"flex flex-col gap-12 w-full h-full"}>
      <div className={"flex flex-col gap-7 w-full"}>
        <GraduateRates />
      </div>

      <div className={"flex flex-col gap-5 w-full justify-between lg:flex-row"}>
        <Description />

        <Distribution />
      </div>
    </div>
  );
};

export default MainPage;
