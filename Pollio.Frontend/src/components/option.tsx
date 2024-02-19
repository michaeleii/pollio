import { cn } from "@/lib/utils";
import { Poll } from "@/types/types";

type OptionListProps = {
  options: Poll["options"];
};

export function OptionList({ options }: OptionListProps) {
  return (
    <div className="grid gap-2">
      {options.map((opt) => (
        <OptionItem key={opt.id} option={opt.text} />
      ))}
    </div>
  );
}

type OptionItemProps = {
  option: string;
  hover?: boolean;
};

export function OptionItem({ option, hover = true }: OptionItemProps) {
  return (
    <div
      className={cn("border p-5 transition-colors cursor-pointer", {
        "hover:border-primary hover:border-2": hover,
      })}
    >
      {option}
    </div>
  );
}
