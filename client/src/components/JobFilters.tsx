import React, { useState } from "react";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import { Checkbox } from "@/components/ui/checkbox";

type FilterItem = { label: string; count: number };

type JobFilters = {
  "Type of Employment": FilterItem[];
  Categories: FilterItem[];
  "Job Level": FilterItem[];
  "Salary Range": FilterItem[];
};

const jobFilters: JobFilters = {
  "Type of Employment": [
    { label: "Full-time", count: 3 },
    { label: "Part-time", count: 5 },
    { label: "Remote", count: 2 },
    { label: "Internship", count: 24 },
    { label: "Contract", count: 3 },
  ],
  Categories: [
    { label: "Design", count: 24 },
    { label: "Sales", count: 3 },
    { label: "Marketing", count: 3 },
    { label: "Business", count: 3 },
    { label: "Human Resource", count: 6 },
    { label: "Finance", count: 4 },
    { label: "Engineering", count: 4 },
    { label: "Technology", count: 5 },
  ],
  "Job Level": [
    { label: "Entry Level", count: 57 },
    { label: "Mid Level", count: 3 },
    { label: "Senior Level", count: 5 },
    { label: "Director", count: 12 },
    { label: "VP or Above", count: 8 },
  ],
  "Salary Range": [
    { label: "$700 - $1000", count: 4 },
    { label: "$1000 - $1500", count: 6 },
    { label: "$1500 - $2000", count: 10 },
    { label: "$3000 or above", count: 4 },
  ],
};

export const JobFilters: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {Object.keys(jobFilters).map((section) => (
        <div key={section} className="flex flex-col gap-y-2 w-full">
          <div
            onClick={() => toggleSection(section)}
            className="flex items-center justify-between cursor-pointer"
          >
            <p className="text-base text-neutrals100 font-bold leading-[150%]">
              {section}
            </p>
            <img
              src={ChevronDown}
              alt="chevron-down"
              className={`transform transition-transform ${
                expanded[section] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expanded[section] && (
            <ul className="flex flex-col gap-y-5 pl-4 mt-3">
              {jobFilters[section as keyof JobFilters].map((item, index) => (
                <li key={index} className="flex items-center gap-x-1">
                  <div className="flex items-center gap-x-2">
                    <Checkbox className="w-5 h-5" />
                    <p className="text-base font-normal leading-[160%] text-neutrals80">
                      {item.label}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-500">
                    ({item.count})
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};
