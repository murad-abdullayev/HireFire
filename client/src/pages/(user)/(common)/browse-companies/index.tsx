import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const BrowseCompanies = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Browse Companies</h1>
          <p className="text-sm text-gray-500">
            Browse through our list of companies and find the perfect fit for
            you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseCompanies;
