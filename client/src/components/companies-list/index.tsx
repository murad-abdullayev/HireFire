import { Filters } from "../job-list/components/Filters";
import Companies from "./components/Companies";

export const CompaniesList = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[234px_1fr] container py-[20px] sm:py-[72px] gap-x-[40px]">
        <Filters pageType="company" />
        <Companies />
      </div>
    </>
  );
};
