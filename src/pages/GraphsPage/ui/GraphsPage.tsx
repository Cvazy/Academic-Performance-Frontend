import { AcademicPerformanceChart, Sidebar } from "widgets";

const GraphsPage = () => {
  return (
    <div
      className={
        "grid gap-5 w-full lg:gap-0 lg:grid-cols-3 lg:shadow-[0_0_48px_-10px_#0000007a]"
      }
    >
      <Sidebar />

      <AcademicPerformanceChart />
    </div>
  );
};

export default GraphsPage;
