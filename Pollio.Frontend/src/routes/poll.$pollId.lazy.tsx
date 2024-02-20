import Loading from "@/components/loading";
import MainWrapper from "@/components/main-wrapper";
import { PollItem } from "@/components/poll";
import { Button } from "@/components/ui/button";
import useDeletePoll from "@/hooks/useDeletePoll";
import { useFetchPoll } from "@/hooks/useFetchPoll";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2Icon, Trash2Icon } from "lucide-react";

export const Route = createLazyFileRoute("/poll/$pollId")({
  component: SinglePoll,
});

function SinglePoll() {
  const { pollId } = Route.useParams();
  const { poll, isPending, error } = useFetchPoll(pollId);
  const { deletePoll, isDeleting } = useDeletePoll();
  const navigate = useNavigate();
  const isOwner = poll?.user.id === 5;

  const handleDeletePoll = () => {
    if (confirm("Are you sure you want to delete this poll?")) {
      deletePoll(+pollId);
      navigate({ from: "/poll/$pollId", to: "/" });
    }
  };
  return (
    <MainWrapper>
      {isPending ? (
        <Loading />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : poll ? (
        <>
          <PollItem poll={poll} />
          {isOwner && (
            <div className="mt-6 flex justify-end">
              <Button
                disabled={isDeleting}
                onClick={handleDeletePoll}
                variant="destructive"
                className="flex items-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <Loader2Icon className="animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <>
                    <Trash2Icon size={18} />
                    <span>Delete Poll</span>
                  </>
                )}
              </Button>
            </div>
          )}
        </>
      ) : (
        <h1>No poll found.</h1>
      )}
    </MainWrapper>
  );
}
