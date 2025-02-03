import React, { useState } from "react";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import { Checkbox } from "@/components/ui/checkbox";

type FilterItem = { label: string; count: number };

type CompanyFilters = {
  Industry: FilterItem[];
  "Company Size": FilterItem[];
};

const companyFilters: CompanyFilters = {
  Industry: [
    { label: "Advertising", count: 43 },
    { label: "Business Service", count: 4 },
    { label: "Blockchain", count: 5 },
    { label: "Cloud", count: 15 },
    { label: "Consumer Tech", count: 5 },
    { label: "Education", count: 34 },
    { label: "Fintech", count: 45 },
    { label: "Gaming", count: 33 },
    { label: "Food & Beverage", count: 5 },
    { label: "Healthcare", count: 3 },
    { label: "Hosting", count: 5 },
    { label: "Media", count: 4 },
  ],
  "Company Size": [
    { label: "1-50", count: 25 },
    { label: "51-150", count: 57 },
    { label: "151-250", count: 45 },
    { label: "251-500", count: 4 },
    { label: "501-1000", count: 43 },
    { label: "1000+", count: 23 },
  ],
};

export const CompanyFilters: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {Object.keys(companyFilters).map((section) => (
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
              {companyFilters[section as keyof CompanyFilters].map(
                (item, index) => (
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
                )
              )}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};
