import Loading from "@/components/loading";
import MainWrapper from "@/components/main-wrapper";
import { PollList } from "@/components/poll";
import useFetchPolls from "@/hooks/useFetchPolls";
import useInvalidatePolls from "@/hooks/useInvalidatePolls";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { polls, isPending, error } = useFetchPolls();
  useInvalidatePolls();
  return (
    <MainWrapper>
      {isPending ? (
        <Loading />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : polls && polls.length > 0 ? (
        <PollList polls={polls} />
      ) : (
        <p className="text-center text-xl">No Polls Found.</p>
      )}
    </MainWrapper>
  );
}
