import { SelectInput } from "@/components/select";
import NomadLogo from "@/assets/images/Company Logo.png";
import CircleIcon from "@/assets/icons/circle-icon.svg";
import TableViewGrey from "@/assets/icons/tab-view-grey.svg";
import TableViewPrimary from "@/assets/icons/tab-view-primary.svg";
import SquareViewGrey from "@/assets/icons/square-view-grey.svg";
import SquareViewPrimary from "@/assets/icons/square-view-primary.svg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useJobListStore } from "@/store/useJobListStore";
import { useEffect, useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    type: "Full-time",
    categories: ["Marketing", "Design"],
    applied: 5,
    capacity: 10,
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    type: "Full-time",
    categories: ["Marketing", "Design"],
    applied: 2,
    capacity: 10,
  },
  {
    id: 3,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    type: "Full-time",
    categories: ["Marketinge", "Design"],
    applied: 8,
    capacity: 12,
  },
  {
    id: 4,
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    type: "Internship",
    categories: ["Marketing", "Design"],
    applied: 0,
    capacity: 10,
  },
  {
    id: 5,
    title: "Lead Engineer",
    company: "Canva",
    location: "Ankara, Turkey",
    type: "Full-time",
    categories: ["Engineering"],
    applied: 5,
    capacity: 12,
  },
  {
    id: 6,
    title: "Product Designer",
    company: "ClassPass",
    location: "Berlin, Germany",
    type: "Full-time",
    categories: ["Marketing", "Design"],
    applied: 5,
    capacity: 10,
  },
  {
    id: 7,
    title: "Customer Manager",
    company: "Pitch",
    location: "Rome, Italy",
    type: "Full-time",
    categories: ["Business"],
    applied: 5,
    capacity: 10,
  },
  {
    id: 8,
    title: "Java Developer",
    company: "GoDaddy",
    location: "Oslo, Sweden",
    type: "Part-time",
    categories: ["Technology"],
    applied: 5,
    capacity: 10,
  },
];

const categoryColors: Record<string, string> = {
  Marketing: "border-acyellow text-acyellow",
  Design: "border-acpurple text-acpurple",
  Engineering: "border-acgreen text-acgreen",
  Business: "border-acblue text-acblue",
  Technology: "border-acpurple text-acpurple",
};

const predefinedColors = [
  "border-acyellow text-acyellow",
  "border-acpurple text-acpurple",
  "border-acred text-acred",
  "border-acgreen text-acgreen",
  "border-acblue text-acblue",
];

const jobTypeColors: Record<string, string> = {
  "Full-time": "text-acgreen bg-acgreen/10",
  Internship: "text-acred bg-acred/10",
  "Part-time": "text-acyellow bg-acyellow/10",
};

const getCategoryColor = (category: string): string => {
  if (categoryColors[category]) {
    return categoryColors[category];
  }
  const randomIndex = Math.floor(Math.random() * predefinedColors.length);
  return predefinedColors[randomIndex];
};

const Jobs = () => {
  const { viewMode, setViewMode } = useJobListStore();
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
    if (isMdScreen && viewMode !== "square") {
      setViewMode("square");
    }
  }, [isMdScreen, viewMode, setViewMode]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold leading-[120%] text-neutrals100">
            All Jobs
          </h3>
          <p className="text-base text-neutrals60 font-normal leading-[160%]">
            Showing {jobs.length} results
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
                viewMode === "table" ? "bg-primary/10" : ""
              )}
              onClick={() => setViewMode("table")}
            >
              <img
                src={viewMode === "table" ? TableViewPrimary : TableViewGrey}
                alt="table-view"
              />
            </button>
            <button
              className={cn(
                "p-2 rounded-sm transition-all duration-300",
                viewMode === "square" ? "bg-primary/10" : ""
              )}
              onClick={() => setViewMode("square")}
            >
              <img
                src={viewMode === "square" ? SquareViewPrimary : SquareViewGrey}
                alt="square-view"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {viewMode === "table" ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row items-start gap-6 py-6 px-6 sm:px-10 justify-between bg-white border border-neutrals20"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <img className="w-16 h-16" src={NomadLogo} alt="nomad-logo" />
                <div>
                  <p className="text-neutrals100 text-lg font-semibold leading-[160%] mb-2">
                    {job.title}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-base font-normal text-neutrals60 leading-[160%]">
                      {job.company}
                    </p>
                    <img src={CircleIcon} alt="circle-icon" />
                    <p className="text-base font-normal text-neutrals60 leading-[160%]">
                      {job.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div
                      className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 py-1 ${
                        jobTypeColors[job.type]
                      }`}
                    >
                      {job.type}
                    </div>
                    <div className="w-[1px] h-[34px] mr-32 xl:mr-0 bg-neutrals20" />
                    {job.categories.map((category, index) => (
                      <div
                        key={index}
                        className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 py-1 border ${getCategoryColor(
                          category
                        )}`}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button className="w-full">Apply</Button>
                <div className="flex flex-col gap-2">
                  <Progress value={(job.applied / job.capacity) * 100} />
                  <p className="text-sm font-semibold text-neutrals100 leading-[160%]">
                    {job.applied} applied{" "}
                    <span className="font-normal text-neutrals60">
                      of {job.capacity} capacity
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white border border-neutrals20 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between w-full">
                  <img className="w-16 h-16" src={NomadLogo} alt="nomad-logo" />
                  <div
                    className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 py-1 ${
                      jobTypeColors[job.type]
                    }`}
                  >
                    {job.type}
                  </div>
                </div>
                <div>
                  <p className="text-neutrals100 text-lg font-semibold leading-[160%] mb-0.5">
                    {job.title}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-base font-normal text-neutrals60 leading-[160%]">
                      {job.company}
                    </p>
                    <img src={CircleIcon} alt="circle-icon" />
                    <p className="text-base font-normal text-neutrals60 leading-[160%]">
                      {job.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {job.categories.map((category, index) => (
                    <div
                      key={index}
                      className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 py-1 border ${getCategoryColor(
                        category
                      )}`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Progress value={(job.applied / job.capacity) * 100} />
                  <p className="text-sm font-semibold text-neutrals100 leading-[160%]">
                    {job.applied} applied{" "}
                    <span className="font-normal text-neutrals60">
                      of {job.capacity} capacity
                    </span>
                  </p>
                </div>
                <Button className="w-full">Apply</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
