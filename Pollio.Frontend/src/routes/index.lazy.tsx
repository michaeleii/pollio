import Loading from "@/components/loading";
import MainWrapper from "@/components/main-wrapper";
import { PollList } from "@/components/poll";
import useFetchPolls from "@/hooks/useFetchPolls";
import useInvalidatePolls from "@/hooks/useInvalidatePolls";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { polls, isPending, error } = useFetchPolls();
  const { isAuthenticated } = useKindeAuth();
  useInvalidatePolls();
  return (
    <MainWrapper>
      {isPending ? (
        <Loading />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : isAuthenticated ? (
        polls && polls.length > 0 ? (
          <PollList polls={polls} />
        ) : (
          <p className="text-center text-xl">No polls were found.</p>
        )
      ) : (
        <p className="text-center text-xl">
          Please sign in to create and view polls
        </p>
      )}
    </MainWrapper>
  );
}
