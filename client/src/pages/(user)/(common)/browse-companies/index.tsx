import { FindDreamCompany } from "./components/FindDreamCompany";
import { useLocation } from "react-router-dom";
import { CompaniesList } from "@/components/companies-list";
import { CompaniesLanding } from "@/components/companies-landing";

const BrowseCompanies = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isSearching = searchParams.has("search");

  return (
    <>
      <FindDreamCompany />
      {isSearching ? <CompaniesList /> : <CompaniesLanding />}
    </>
  );
};

export default BrowseCompanies;
