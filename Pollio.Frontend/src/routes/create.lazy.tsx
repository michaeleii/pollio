import MainWrapper from "@/components/main-wrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create")({
  component: Create,
});

function Create() {
  return (
    <MainWrapper className="mt-20">
      <CreatePollForm />
    </MainWrapper>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useOptionStore } from "@/stores/store";

function CreatePollForm() {
  const [question, setQuestion] = useState("");
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
                className="w-full text-2xl font-semibold leading-none tracking-tight border-0 rounded-none pl-1 focus-visible:ring-0 focus-visible:border-b focus-visible:border-primary transition-colors"
              />
            </div>
            <OptionInputList />
            <Button className="btn">Create Poll</Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}

function OptionInputList() {
  const options = useOptionStore((s) => s.options);
  const addOption = useOptionStore((s) => s.addOption);
  const enableDelete = options.length > 2;
  return (
    <div className="grid gap-2 mb-4">
      {options.map((opt) => (
        <OptionInput
          key={opt.id}
          id={opt.id}
          option={opt.text}
          enableDelete={enableDelete}
        />
      ))}
      <Button
        type="button"
        variant="secondary"
        className="flex items-center gap-1 mt-2"
        onClick={() => addOption("")}
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
}: {
  id: number;
  option: string;
  enableDelete: boolean;
}) {
  const updateOption = useOptionStore((s) => s.updateOption);
  const deleteOption = useOptionStore((s) => s.deleteOption);

  return (
    <div className="flex gap-2 items-center">
      <Input
        required
        type="text"
        placeholder="Enter an option..."
        value={option}
        onChange={(e) => updateOption(id, e.target.value)}
        className="w-full border rounded-none p-5 h-full focus-visible:ring-0 focus-visible:border-b focus-visible:border-primary transition-colors"
      />
      {enableDelete && (
        <Button
          onClick={() => deleteOption(id)}
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
