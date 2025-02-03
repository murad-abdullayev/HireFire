import React from "react";
import FiltersBurger from "@/assets/icons/filters-burger.svg";
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
import { JobFilters } from "@/components/JobFilters";
import { CompanyFilters } from "@/components/CompanyFilters";

type FiltersProps = {
  pageType: "job" | "company";
};

export const Filters: React.FC<FiltersProps> = ({ pageType }) => {
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
              {pageType === "job" ? <JobFilters /> : <CompanyFilters />}
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
        {pageType === "job" ? <JobFilters /> : <CompanyFilters />}
      </div>
    </>
  );
};
