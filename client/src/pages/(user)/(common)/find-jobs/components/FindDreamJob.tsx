import Underline from "@/assets/images/underline.svg";
import { Search } from "@/components/search";

export const FindDreamJob = () => {
  return (
    <div className="bg-neutrals0">
      <div className="container py-8 sm:py-12 md:py-[82px] text-center">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[110%] text-neutrals100">
          Find your{" "}
          <span className="text-acblue relative">
            dream job
            <img
              src={Underline}
              alt="underline"
              className="absolute top-7 sm:top-8 md:top-9 lg:top-11 left-0"
            />
          </span>
        </h2>
        <p className="text-neutrals80 text-lg font-normal leading-[160%] mt-8 mb-10">
          Find your next career at companies like HubSpot, Nike, and Dropbox
        </p>
        <Search widthFull={true} />
        <p className="mt-4 text-sm sm:text-base text-neutrals80 font-medium leading-[160%] text-left">
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
