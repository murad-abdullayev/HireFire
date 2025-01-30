import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FindDreamJob } from "./components/FindDreamJob";
import { JobList } from "@/components/job-list";

const FindJobs = () => {
  return (
    <>
      <Navbar />
      <FindDreamJob />
      <JobList />
      <Footer />
    </>
  );
};

export default FindJobs;
