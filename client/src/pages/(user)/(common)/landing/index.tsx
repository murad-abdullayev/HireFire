import { Navbar } from "@/components/navbar";
import { Hero } from "./components/Hero";
import { Companies } from "./components/Companies";
import { ExploreCategories } from "./components/ExploreCategories";

const LandingPage = () => (
  <div>
    <Navbar />
    <Hero />
    <Companies />
    <ExploreCategories />
  </div>
);

export default LandingPage;
