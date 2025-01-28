import { Button } from "@/components/ui/button";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import NomadLogo from "@/assets/images/Company Logo.png";
import CircleIcon from "@/assets/icons/circle-icon.svg";

type Job = {
  id: number;
  company: string;
  title: string;
  location: string;
  type: string;
  categories: string[];
};

const jobs: Job[] = [
  {
    id: 1,
    company: "Nomad",
    title: "Social Media Assistant",
    location: "Paris, France",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 2,
    company: "Dropbox",
    title: "Brand Designer",
    location: "San Francisco, USA",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 3,
    company: "Terraform",
    title: "Interactive Developer",
    location: "Hamburg, Germany",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 4,
    company: "Packer",
    title: "HR Manager",
    location: "Lucerne, Switzerland",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 5,
    company: "Netlify",
    title: "Social Media Assistant",
    location: "Paris, France",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 6,
    company: "Maze",
    title: "Brand Designer",
    location: "San Francisco, USA",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 7,
    company: "Udacity",
    title: "Interactive Developer",
    location: "Hamburg, Germany",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 8,
    company: "Webflow",
    title: "HR Manager",
    location: "Lucerne, Switzerland",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
];

const categoryColors: Record<string, string> = {
  Marketing: "border-acyellow text-acyellow",
  Design: "border-primary text-primary",
};

const predefinedColors = [
  "text-red-500 bg-red-100",
  "text-blue-500 bg-blue-100",
  "text-green-500 bg-green-100",
  "text-purple-500 bg-purple-100",
];

export const LatestJobs = () => {
  const getRandomColor = (): string => {
    const randomIndex = Math.floor(Math.random() * predefinedColors.length);
    return predefinedColors[randomIndex];
  };

  return (
    <div className="bg-neutrals0">
      <div className="container py-[72px]">
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[110%] text-neutrals100">
            Latest <span className="text-acblue">jobs open</span>
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
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row items-start gap-6 py-6 px-6 sm:px-10 bg-white rounded-lg shadow-md"
            >
              <img className="w-16 h-16" src={NomadLogo} alt="nomad-logo" />
              <div>
                <p className="text-neutrals100 text-lg font-semibold leading-[160%] mb-2">
                  {job.title}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-base font-normal text-neutrals80 leading-[160%]">
                    {job.company}
                  </p>
                  <img src={CircleIcon} alt="circle-icon" />
                  <p className="text-base font-normal text-neutrals80 leading-[160%]">
                    {job.location}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div
                    className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 py-1 ${getRandomColor()}`}
                  >
                    {job.type}
                  </div>
                  <div className="w-[1px] h-[34px] bg-neutrals20" />
                  {job.categories.map((category, index) => (
                    <div
                      key={index}
                      className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 py-1 border ${categoryColors[category]}`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
