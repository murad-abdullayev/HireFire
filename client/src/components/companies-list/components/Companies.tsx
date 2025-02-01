import { SelectInput } from "@/components/select";
import CompanyLogo from "@/assets/images/CompanyLogo.png";
import CircleIcon from "@/assets/icons/circle-icon.svg";
import TableViewGrey from "@/assets/icons/tab-view-grey.svg";
import TableViewPrimary from "@/assets/icons/tab-view-primary.svg";
import SquareViewGrey from "@/assets/icons/square-view-grey.svg";
import SquareViewPrimary from "@/assets/icons/square-view-primary.svg";
import { cn } from "@/lib/utils";
import { useListStore } from "@/store/useJobListStore";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { companies } from "./CompaniesArray";
import { Button } from "@/components/ui/button";

const industryColors: Record<string, string> = {
  Business: "border-acblue text-acblue",
  Blockchain: "border-acpurple text-acpurple",
  Hosting: "border-acgreen text-acgreen",
  Fintech: "border-acred text-acred",
  Education: "border-acyellow text-acyellow",
};

const predefinedColors = [
  "border-acyellow text-acyellow",
  "border-acpurple text-acpurple",
  "border-acred text-acred",
  "border-acgreen text-acgreen",
  "border-acblue text-acblue",
];

const getIndustryColor = (industry: string): string => {
  if (industryColors[industry]) {
    return industryColors[industry];
  }
  const randomIndex = Math.floor(Math.random() * predefinedColors.length);
  return predefinedColors[randomIndex];
};

const Companies = () => {
  const { companyViewMode, setCompanyViewMode } = useListStore();
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMdScreen && companyViewMode !== "square") {
      setCompanyViewMode("square");
    }
  }, [isMdScreen, companyViewMode, setCompanyViewMode]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold leading-[120%] text-neutrals100">
            All Companies
          </h3>
          <p className="text-base text-neutrals60 font-normal leading-[160%]">
            Showing {companies.length} results
          </p>
        </div>
        <div className="flex items-center gap-[22px]">
          <div className="flex items-center gap-3">
            <p className="md:inline hidden text-neutrals60 text-base font-normal leading-[160%]">
              Sort by:
            </p>
            <SelectInput sortVariant />
          </div>
          <div className="w-[1px] h-[32px] bg-neutrals100/10 hidden lg:block" />
          <div className="hidden lg:flex items-center gap-4">
            <button
              className={cn(
                "p-2 rounded-sm transition-all duration-300",
                companyViewMode === "table" ? "bg-primary/10" : ""
              )}
              onClick={() => setCompanyViewMode("table")}
            >
              <img
                src={
                  companyViewMode === "table" ? TableViewPrimary : TableViewGrey
                }
                alt="table-view"
              />
            </button>
            <button
              className={cn(
                "p-2 rounded-sm transition-all duration-300",
                companyViewMode === "square" ? "bg-primary/10" : ""
              )}
              onClick={() => setCompanyViewMode("square")}
            >
              <img
                src={
                  companyViewMode === "square"
                    ? SquareViewPrimary
                    : SquareViewGrey
                }
                alt="square-view"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {companyViewMode === "table" ? (
          companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col md:flex-row items-start gap-6 py-6 px-6 sm:px-10 justify-between bg-white border border-neutrals20"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  className="w-16 h-16"
                  src={CompanyLogo}
                  alt={`${company.name}-logo`}
                />
                <div>
                  <p className="text-neutrals100 text-lg font-semibold leading-[160%] mb-2">
                    {company.name}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-base font-normal text-neutrals60 leading-[160%]">
                      {company.location}
                    </p>
                    <img src={CircleIcon} alt="circle-icon" />
                    <p className="text-base font-normal text-neutrals60 leading-[160%]">
                      {company.size}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {company.industries.map((industry, index) => (
                      <div
                        key={index}
                        className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 py-1 border ${getIndustryColor(
                          industry
                        )}`}
                      >
                        {industry}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-normal text-neutrals80 leading-[160%]">
                  {company.description}
                </p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="p-6 bg-white border border-neutrals20 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between w-full">
                  <img
                    className="w-16 h-16"
                    src={CompanyLogo}
                    alt={`${company.name}-logo`}
                  />
                  <p className="text-base font-semibold text-neutrals100">
                    {company.size}
                  </p>
                </div>
                <p className="text-lg font-semibold text-neutrals100">
                  {company.name}
                </p>
                <p className="text-sm text-neutrals60">{company.location}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {company.industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 py-1 border ${getIndustryColor(
                        industry
                      )}`}
                    >
                      {industry}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-neutrals80">{company.description}</p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">33</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Companies;
