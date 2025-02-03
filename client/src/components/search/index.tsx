import { Button } from "@/components/ui/button";
import { SelectInput } from "../select";
import SearchIcon from "@/assets/icons/search.svg";
import Location from "@/assets/icons/location.svg";
import { cn } from "@/lib/utils";

export const Search = ({ widthFull = false }: { widthFull?: boolean }) => {
  return (
    <div
      className={cn(
        "bg-white w-full py-4 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6 shadow-custom",
        widthFull ? "justify-between" : "md:w-fit"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 sm:gap-4 w-full",
          widthFull ? "" : "md:w-auto"
        )}
      >
        <img src={SearchIcon} alt="search" />
        <input
          type="text"
          placeholder="Job title or keyword"
          className={cn(
            "outline-none border-b border-neutrals20 p-2 w-full",
            widthFull ? "" : "md:w-auto"
          )}
        />
      </div>

      <div
        className={cn(
          "flex items-center gap-2 sm:gap-4 w-full",
          widthFull ? "" : "md:w-auto"
        )}
      >
        <img src={Location} alt="location" />
        <SelectInput widthFull={widthFull} />
      </div>

      <Button className="w-full md:w-auto">
        {widthFull ? "Search" : "Search my job"}
      </Button>
    </div>
  );
};
