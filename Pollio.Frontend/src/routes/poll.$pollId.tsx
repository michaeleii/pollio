import Loading from "@/components/loading";
import MainWrapper from "@/components/main-wrapper";
import { PollItem } from "@/components/poll";
import { useFetchPoll } from "@/hooks/useFetchPoll";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/poll/$pollId")({
  component: SinglePoll,
});

function SinglePoll() {
  const { pollId } = Route.useParams();
  const { poll, isPending, error } = useFetchPoll(pollId);
  return (
    <MainWrapper>
      {isPending ? (
        <Loading />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : poll ? (
        <PollItem poll={poll} />
      ) : (
        <h1>No poll found.</h1>
      )}
    </MainWrapper>
  );
}
