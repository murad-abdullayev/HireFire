import { CompaniesByCategory } from "./components/CompaniesByCategory";
import { RecommendedCompanies } from "./components/RecommendedCompanies";

export const CompaniesLanding = () => {
  return (
    <>
      <RecommendedCompanies />
      <CompaniesByCategory />
    </>
  );
};
