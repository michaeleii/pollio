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
      <h1 className="text-4xl font-bold">All Polls</h1>
      {isPending ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : polls ? (
        <ul>
          {polls.map((poll) => (
            <li key={poll.id}>{poll.question}</li>
          ))}
        </ul>
      ) : null}
    </MainWrapper>
  );
}
