import MainWrapper from "@/components/main-wrapper";
import { PollItem } from "@/components/poll";
import { useFetchPoll } from "@/hooks/useFetchPoll";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/poll/$pollId")({
  component: () => SinglePoll,
});

function SinglePoll() {
  const { pollId } = Route.useParams();
  const { poll, isPending } = useFetchPoll(pollId);
  return (
    <MainWrapper>
      {isPending ? (
        "Loading..."
      ) : poll ? (
        <PollItem poll={poll} />
      ) : (
        <h1>No poll found.</h1>
      )}
    </MainWrapper>
  );
}
