import { Button } from "@/components/ui/button";
import { SelectInput } from "../select";
import SearchIcon from "@/assets/icons/search.svg";
import Location from "@/assets/icons/location.svg";

export const Search = () => {
  return (
    <div className="bg-white w-full md:w-fit py-4 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6 shadow-custom">
      <div className="flex items-center gap-2 sm:gap-4 w-full md:w-auto">
        <img src={SearchIcon} alt="search" />
        <input
          type="text"
          placeholder="Job title or keyword"
          className="outline-none border-b border-neutrals20 p-2 w-full md:w-auto"
        />
      </div>
      <div className="flex items-center gap-2 sm:gap-4 w-full md:w-auto">
        <img src={Location} alt="location" />
        <SelectInput />
      </div>
      <Button className="w-full md:w-auto">Search my job</Button>
    </div>
  );
};
