import { cn } from "@/lib/utils";
import { Poll } from "@/types/types";
import { useState } from "react";

type OptionListProps = {
  options: Poll["options"];
};

export function OptionList({ options }: OptionListProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="grid gap-2">
      {options.map((opt) => (
        <OptionItem
          selected={selected}
          onSelected={setSelected}
          key={opt.id}
          id={opt.id}
          option={opt.text}
        />
      ))}
    </div>
  );
}

type OptionItemProps = {
  id: number;
  option: string;
  hover?: boolean;
  selected: number | null;
  onSelected: (id: number | null) => void;
};

export function OptionItem({
  id,
  option,
  selected,
  hover = true,
  onSelected,
}: OptionItemProps) {
  if (selected === id) {
    return (
      <div
        onClick={() => onSelected(null)}
        className={cn(
          "border p-5 transition-colors cursor-pointer border-primary bg-primary",
          {
            "hover:border-primary hover:border-2": hover,
          }
        )}
      >
        {option}
      </div>
    );
  }
  if (selected) {
    return (
      <div
        onClick={() => onSelected(id)}
        className={cn(
          "border p-5 transition-colors cursor-pointer bg-secondary",
          {
            "hover:border-primary hover:border-2": hover,
          }
        )}
      >
        {option}
      </div>
    );
  }
  return (
    <div
      onClick={() => onSelected(id)}
      className={cn("border p-5 transition-colors cursor-pointer", {
        "hover:border-primary hover:border-2": hover,
      })}
    >
      {option}
    </div>
  );
}
