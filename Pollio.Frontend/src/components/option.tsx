import useCreateVote from "@/hooks/useCreateVote";
import { cn } from "@/lib/utils";
import { Poll } from "@/types/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect, useState } from "react";

type OptionListProps = {
  pollId: Poll["id"];
  options: Poll["options"];
  totalVotes: number;
};

export function OptionList({ pollId, options, totalVotes }: OptionListProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const { user, login } = useKindeAuth();
  const { makeVote } = useCreateVote();

  useEffect(() => {
    const selected = options.find((opt) => opt.selected);
    setSelected(selected ? selected.id : null);
  }, [options]);

  async function handleSelected(id: number | null) {
    if (!user || !user.id) {
      login();
      return;
    }
    setSelected(id);
    makeVote({ pollId, optionId: id, userId: user.id });
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
          <span>{width.toFixed(1)}%</span>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-primary/20 z-0 transition-all"
          style={{
            width: `${width}%`,
            transform: `translateX(${selected === option.id ? 0 : 100}%)`,
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
          className="absolute top-0 left-0 w-full h-full bg-secondary z-0 transition-all"
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
