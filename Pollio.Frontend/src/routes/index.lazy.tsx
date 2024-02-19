import MainWrapper from "@/components/main-wrapper";
import useFetchPolls from "@/hooks/useFetchPolls";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Poll } from "@/types/types";

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

function PollList({ polls }: { polls: Poll[] }) {
  return (
    <div>
      {polls.map((poll) => (
        <PollItem poll={poll} />
      ))}
    </div>
  );
}

function PollItem({ poll }: { poll: Poll }) {
  return <div>{poll.question}</div>;
}
