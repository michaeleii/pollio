import useCreateVote from "@/hooks/useCreateVote";
import { cn } from "@/lib/utils";
import { Poll } from "@/types/types";
import { useState } from "react";

type OptionListProps = {
  pollId: Poll["id"];
  options: Poll["options"];
  totalVotes: number;
};

export function OptionList({ pollId, options, totalVotes }: OptionListProps) {
  const [selected, setSelected] = useState<number | null>(() => {
    const selected = options.find((opt) => opt.selected);
    return selected ? selected.id : null;
  });

  const { makeVote } = useCreateVote();

  function handleSelected(id: number | null) {
    setSelected(id);
    makeVote({ pollId, optionId: id });
  }

  return (
    <div className="grid gap-2">
      {options.map((opt) => (
        <OptionItem
          totalVotes={totalVotes}
          selected={selected}
          onSelected={handleSelected}
          key={opt.id}
          option={opt}
        />
      ))}
    </div>
  );
}

type OptionItemProps = {
  totalVotes: number;
  option: Poll["options"][0];
  hover?: boolean;
  selected: number | null;
  onSelected: (id: number | null) => void;
};

export function OptionItem({
  option,
  totalVotes,
  selected,
  hover = true,
  onSelected,
}: OptionItemProps) {
  const width = option.votes === 0 ? 0 : (option.votes / totalVotes) * 100;
  if (selected === option.id) {
    return (
      <div
        onClick={() => onSelected(null)}
        className={cn(
          "border p-5 transition-colors cursor-pointer border-primary bg-transparent relative z-10",
          {
            "hover:border-primary hover:border-2": hover,
          }
        )}
      >
        <div className="z-10 relative flex items-center justify-between">
          <span>{option.text}</span>
          <span>{width}%</span>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-primary/20 z-0"
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
    );
  }
  if (selected) {
    return (
      <div
        onClick={() => onSelected(option.id)}
        className={cn(
          "border p-5 transition-colors cursor-pointer bg-transparent relative",
          {
            "hover:border-primary hover:border-2": hover,
          }
        )}
      >
        <div className="z-10 relative flex items-center justify-between">
          <span>{option.text}</span>
          <span>{width}%</span>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-secondary z-0"
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
    );
  }
  return (
    <div
      onClick={() => onSelected(option.id)}
      className={cn("border p-5 transition-colors cursor-pointer", {
        "hover:border-primary hover:border-2": hover,
      })}
    >
      {option.text}
    </div>
  );
}
