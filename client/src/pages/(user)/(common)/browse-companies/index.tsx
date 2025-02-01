import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
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
      <Navbar />
      <FindDreamCompany />
      {isSearching ? <CompaniesList /> : <CompaniesLanding />}
      <Footer />
    </>
  );
};

export default BrowseCompanies;
