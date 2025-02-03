import { Button } from "@/components/ui/button";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import DesignIcon from "@/assets/icons/design-icon.svg";
import SalesIcon from "@/assets/icons/sales-icon.svg";
import MarketingIcon from "@/assets/icons/marketing-icon.svg";
import FinanceIcon from "@/assets/icons/finance-icon.svg";
import TechIcon from "@/assets/icons/tech-icon.svg";
import EngineeringIcon from "@/assets/icons/engineering-icon.svg";
import BusinessIcon from "@/assets/icons/business-icon.svg";
import HumanResourceIcon from "@/assets/icons/human-resource-icon.svg";
import ArrowLeftGrey from "@/assets/icons/arrow-left-grey.svg";
import DesignIconWhite from "@/assets/icons/design-icon white.svg";
import SalesIconWhite from "@/assets/icons/sales-icon white.svg";
import MarketingIconWhite from "@/assets/icons/marketing-icon white.svg";
import FinanceIconWhite from "@/assets/icons/finance-icon white.svg";
import TechIconWhite from "@/assets/icons/tech-icon white.svg";
import EngineeringIconWhite from "@/assets/icons/engineering-icon white.svg";
import BusinessIconWhite from "@/assets/icons/business-icon white.svg";
import HumanResourceIconWhite from "@/assets/icons/human-resource-icon white.svg";
import ArrowLeftWhite from "@/assets/icons/arrow-left white.svg";

export const ExploreCategories = () => {
  return (
    <div className="container py-[72px]">
      <div className="flex justify-between items-center mb-8 sm:mb-12">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[110%] text-neutrals100">
          Explore by <span className="text-acblue">category</span>
        </h2>
        <Button
          variant={"ghost"}
          className="group flex items-center gap-2 text-sm sm:text-base"
        >
          Show all jobs
          <img
            src={ArrowLeft}
            alt="arrow-left"
            className="opacity-100 group-hover:opacity-80 transition-opacity"
          />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="relative p-8 flex flex-row items-center gap-4 sm:items-start sm:gap-0 sm:flex-col cursor-pointer hover:scale-95 transition border border-neutrals20 group hover:bg-primary hover:text-white"
          >
            <img
              className="w-12 h-12 transition-opacity opacity-100 group-hover:opacity-0"
              src={icons[idx].default}
              alt={icons[idx].alt}
            />
            <img
              className="w-12 h-12 transition-opacity opacity-0 group-hover:opacity-100 absolute"
              src={icons[idx].white}
              alt={icons[idx].altWhite}
            />
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl leading-[120%] font-semibold text-neutrals100 mb-3 mt-0 sm:mt-8 group-hover:text-white transition">
                {category.name}
              </h4>
              <div className="flex items-center relative">
                <p className="font-normal text-sm sm:text-base md:text-lg leading-[160%] text-neutrals60 group-hover:text-white transition mr-8">
                  {category.jobs} jobs available
                </p>
                <img
                  src={ArrowLeftGrey}
                  className="absolute right-0 transition-opacity opacity-100 group-hover:opacity-0"
                  alt="arrow-left-grey"
                />
                <img
                  src={ArrowLeftWhite}
                  className="absolute right-0 transition-opacity opacity-0 group-hover:opacity-100"
                  alt="arrow-left-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const categories = [
  { name: "Design", jobs: 235 },
  { name: "Sales", jobs: 756 },
  { name: "Marketing", jobs: 140 },
  { name: "Finance", jobs: 325 },
  { name: "Technology", jobs: 436 },
  { name: "Engineering", jobs: 542 },
  { name: "Business", jobs: 211 },
  { name: "Human Resource", jobs: 346 },
];

const icons = [
  {
    default: DesignIcon,
    white: DesignIconWhite,
    alt: "design-icon",
    altWhite: "design-icon-white",
  },
  {
    default: SalesIcon,
    white: SalesIconWhite,
    alt: "sales-icon",
    altWhite: "sales-icon-white",
  },
  {
    default: MarketingIcon,
    white: MarketingIconWhite,
    alt: "marketing-icon",
    altWhite: "marketing-icon-white",
  },
  {
    default: FinanceIcon,
    white: FinanceIconWhite,
    alt: "finance-icon",
    altWhite: "finance-icon-white",
  },
  {
    default: TechIcon,
    white: TechIconWhite,
    alt: "tech-icon",
    altWhite: "tech-icon-white",
  },
  {
    default: EngineeringIcon,
    white: EngineeringIconWhite,
    alt: "engineering-icon",
    altWhite: "engineering-icon-white",
  },
  {
    default: BusinessIcon,
    white: BusinessIconWhite,
    alt: "business-icon",
    altWhite: "business-icon-white",
  },
  {
    default: HumanResourceIcon,
    white: HumanResourceIconWhite,
    alt: "human-resource-icon",
    altWhite: "human-resource-icon-white",
  },
];
