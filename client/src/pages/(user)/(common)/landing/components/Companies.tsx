import AMD from "@/assets/images/amd.svg";
import Intel from "@/assets/images/intel.svg";
import Talkit from "@/assets/images/talkit.svg";
import Tesla from "@/assets/images/tesla.svg";
import Vodafone from "@/assets/images/vodafone.svg";

export const Companies = () => {
  return (
    <div className="container py-[40px] sm:py-12 flex flex-col gap-8">
      <p className="text-base sm:text-lg font-normal leading-[160%] text-neutrals60">
        Companies we helped grow
      </p>
      <div className="flex flex-wrap gap-4 md:gap-8 lg:justify-between items-center justify-center">
        <img className="h-10 w-auto" src={Vodafone} alt="vodafone" />
        <img className="h-8 w-auto" src={Intel} alt="intel" />
        <img className="h-6 w-auto" src={Tesla} alt="tesla" />
        <img className="h-7 w-auto" src={AMD} alt="amd" />
        <img className="h-8 w-auto" src={Talkit} alt="talkit" />
      </div>
    </div>
  );
};
