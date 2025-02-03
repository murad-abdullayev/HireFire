import { Search } from "@/components/search";
import Underline from "@/assets/images/underline.svg";

export const Hero = () => {
  return (
    <div className="bg-neutrals0">
      <div className="container py-8 sm:py-12 md:py-[82px]">
        <div className="w-full md:w-[533px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[110%] text-neutrals100">
            Discover more than <span className="text-acblue">5000+ Jobs</span>
          </h1>
          <img
            className="mt-[13px] w-full md:w-auto"
            src={Underline}
            alt="underline"
          />
          <p className="text-base sm:text-lg md:text-xl text-neutrals80 my-[23px]">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
        </div>
        <Search />
        <p className="mt-4 text-sm sm:text-base text-neutrals80 font-medium leading-[160%]">
          Popular :
          <span className="font-semibold">
            {" "}
            UI Designer, UX Researcher, Android, Admin
          </span>
        </p>
      </div>
    </div>
  );
};
