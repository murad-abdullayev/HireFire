import { Navbar } from "@/components/navbar";
import { Hero } from "./components/Hero";
import { Companies } from "./components/Companies";
import { ExploreCategories } from "./components/ExploreCategories";
import { StartPosting } from "./components/StartPosting";
import { FeaturedJobs } from "./components/FeaturedJobs";
import { LatestJobs } from "./components/LatestJobs";
import { Footer } from "@/components/footer";

const LandingPage = () => (
  <div>
    <Navbar />
    <Hero />
    <Companies />
    <ExploreCategories />
    <StartPosting />
    <FeaturedJobs />
    <LatestJobs />
    <Footer />
  </div>
);

export default LandingPage;
