import React, { useState } from "react";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import FiltersBurger from "@/assets/icons/filters-burger.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

type FilterItem = {
  label: string;
  count: number;
};

type FiltersData = {
  [key: string]: FilterItem[];
};

const filters: FiltersData = {
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

export const Filters: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <div className="sm:hidden flex w-full items-center py-3 mb-10 cursor-pointer gap-x-2 justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-x-2">
              <img src={FiltersBurger} alt="filters-burger" />
              <p className="text-base leading-[160%] font-medium text-neutrals100">
                More Filters
              </p>
            </Button>
          </DialogTrigger>

          <DialogContent className="p-6 max-w-lg mx-auto">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-neutrals100">
                More Filters
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                Select filters to refine your job search.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-y-6">
              {Object.keys(filters).map((section) => (
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
                      {filters[section].map((item, index) => (
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
            </div>

            <div className="mt-6 flex justify-end">
              <DialogClose asChild>
                <Button variant="secondary">Close</Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="sm:flex hidden flex-col gap-y-6">
        {Object.keys(filters).map((section) => (
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
                {filters[section].map((item, index) => (
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
      </div>
    </>
  );
};
