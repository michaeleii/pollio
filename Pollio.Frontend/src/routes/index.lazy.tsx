import MainWrapper from "@/components/main-wrapper";
import useFetchPolls from "@/hooks/useFetchPolls";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { polls, isPending, error } = useFetchPolls();
  return (
    <MainWrapper>
      {isPending ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : polls ? (
        <PollList polls={polls} />
      ) : null}
    </MainWrapper>
  );
}

import { Poll } from "@/types/types";

function PollList({ polls }: { polls: Poll[] }) {
  return (
    <div className="grid gap-6 mb-10">
      {polls.map((poll) => (
        <PollItem poll={poll} />
      ))}
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fakeOptions = [
  { id: 1, text: "Option 1" },
  { id: 2, text: "Option 2" },
  { id: 3, text: "Option 3" },
];

function PollItem({ poll }: { poll: Poll }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{poll.question}</CardTitle>
        <CardDescription>John Doe • 1 min ago</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {fakeOptions.map((opt) => (
            <div
              key={opt.id}
              className="border p-5 hover:border-primary hover:border-2 transition-colors cursor-pointer"
            >
              {opt.text}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500 dark:text-gray-200">
          Total Votes: 12
        </p>
      </CardFooter>
    </Card>
  );
}
