import { Filters } from "./components/Filters";
import Jobs from "./components/Jobs";

export const JobList = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[234px_1fr] container py-[20px] sm:py-[72px] gap-x-[40px]">
        <Filters />
        <Jobs />
      </div>
    </>
  );
};
