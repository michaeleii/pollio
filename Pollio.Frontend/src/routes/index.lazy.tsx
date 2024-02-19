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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

function PollItem({ poll }: { poll: Poll }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{poll.question}</CardTitle>
        <CardDescription>
          {poll.user.username} • {formatDate(poll.createdAt)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {poll.options.map((opt) => (
            <div
              key={opt.id}
              className="border p-5 hover:border-primary hover:border-2 transition-colors cursor-pointer"
            >
              {opt.text}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
