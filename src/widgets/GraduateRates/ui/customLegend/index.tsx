export const customLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul
      className={
        "flex flex-col gap-1.5 items-start mb-6 list-none p-0 lg:mb-8 lg:gap-4 lg:flex-row lg:items-center"
      }
    >
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className={"flex items-center gap-1.5"}>
          <div
            className={
              "min-w-3 max-w-3 min-h-3 max-h-3 rounded-full lg:min-w-4 lg:max-w-4 lg:min-h-4 lg:max-h-4"
            }
            style={{
              backgroundColor: entry.color,
            }}
          />
          <span
            className={"block text-base text-[#282D32] font-bold lg:text-xl"}
          >
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};
