import { LoaderTwister } from "./../../LoaderTwister";

export const Loader = () => {
  return (
    <div
      className={
        "absolute z-[999] top-0 bottom-0 left-0 right-0 bg-[#00000075]"
      }
    >
      <div className={"flex items-center justify-center w-full h-full"}>
        <LoaderTwister />
      </div>
    </div>
  );
};
