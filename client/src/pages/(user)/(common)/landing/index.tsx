import { Hero } from "./components/Hero";
import { Companies } from "./components/Companies";
import { ExploreCategories } from "./components/ExploreCategories";
import { StartPosting } from "./components/StartPosting";
import { FeaturedJobs } from "./components/FeaturedJobs";
import { LatestJobs } from "./components/LatestJobs";

const LandingPage = () => (
  <>
    <Hero />
    <Companies />
    <ExploreCategories />
    <StartPosting />
    <FeaturedJobs />
    <LatestJobs />
  </>
);

export default LandingPage;
