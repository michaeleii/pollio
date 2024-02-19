import MainWrapper from "@/components/main-wrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create")({
  component: Create,
});

function Create() {
  return (
    <MainWrapper>
      <CreatePollForm />
    </MainWrapper>
  );
}

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Poll } from "@/types/types";
import { PlusIcon, Trash2Icon } from "lucide-react";

function CreatePollForm() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<Poll["options"]>([
    { id: 1, text: "" },
    { id: 2, text: "" },
  ]);

  const handleUpdateOption = (id: number, text: string) => {
    setOptions((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, text } : opt))
    );
  };

  const handleDeleteOption = (id: number) => {
    setOptions((prev) => prev.filter((opt) => opt.id !== id));
  };

  const handleAddNewOption = () => {
    setOptions((prev) => [
      ...prev,
      { id: prev[prev.length - 1].id + 1, text: "" },
    ]);
  };
  return (
    <Card>
      <form>
        <CardContent>
          <div className="flex flex-col gap-4 pt-6">
            <div>
              <Input
                required
                placeholder="Enter your question here..."
                type="text"
                id="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full text-xl font-bold border-0 rounded-none pl-1 focus-visible:ring-0 focus-visible:border-b focus-visible:border-primary transition-colors"
              />
            </div>
            <OptionInputList
              options={options}
              onAddNewOption={handleAddNewOption}
              onUpdateOption={handleUpdateOption}
              onDeleteOption={handleDeleteOption}
            />
            <Button className="btn">Create Poll</Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}

function OptionInputList({
  options,
  onAddNewOption,
  onUpdateOption,
  onDeleteOption,
}: {
  options: Poll["options"];
  onAddNewOption: () => void;
  onUpdateOption: (id: number, text: string) => void;
  onDeleteOption: (id: number) => void;
}) {
  const enableDelete = options.length > 2;
  return (
    <div className="grid gap-2 mb-4">
      {options.map((opt) => (
        <OptionInput
          key={opt.id}
          id={opt.id}
          option={opt.text}
          enableDelete={enableDelete}
          onUpdateOption={onUpdateOption}
          onDeleteOption={onDeleteOption}
        />
      ))}
      <Button
        type="button"
        variant="secondary"
        className="flex items-center gap-1 mt-2"
        onClick={onAddNewOption}
      >
        <PlusIcon size={16} />
        <span>Add Option</span>
      </Button>
    </div>
  );
}

function OptionInput({
  id,
  option,
  enableDelete,
  onUpdateOption,
  onDeleteOption,
}: {
  id: number;
  option: string;
  enableDelete: boolean;
  onUpdateOption: (id: number, text: string) => void;
  onDeleteOption: (id: number) => void;
}) {
  return (
    <div className="flex gap-2 items-center">
      <Input
        required
        type="text"
        placeholder="Enter an option..."
        value={option}
        onChange={(e) => onUpdateOption(id, e.target.value)}
        className="w-full border rounded-none p-5 h-full focus-visible:ring-0 focus-visible:border-b focus-visible:border-primary transition-colors"
      />
      {enableDelete && (
        <Button
          onClick={() => onDeleteOption(id)}
          type="button"
          variant="destructive"
          className="h-full"
        >
          <Trash2Icon size={16} />
        </Button>
      )}
    </div>
  );
}
