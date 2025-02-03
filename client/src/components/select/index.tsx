import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function SelectInput({
  widthFull,
  sortVariant,
}: {
  widthFull?: boolean;
  sortVariant?: boolean;
}) {
  return (
    <Select>
      <SelectTrigger
        sortVariant={sortVariant}
        className={cn(
          widthFull
            ? "w-full"
            : sortVariant
            ? "w-full md:w-[135px]"
            : "w-full md:w-[180px]"
        )}
      >
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Location</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
