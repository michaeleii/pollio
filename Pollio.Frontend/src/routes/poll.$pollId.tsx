import Loading from "@/components/loading";
import MainWrapper from "@/components/main-wrapper";
import { PollItem } from "@/components/poll";
import { Button } from "@/components/ui/button";
import { useFetchPoll } from "@/hooks/useFetchPoll";
import { createFileRoute } from "@tanstack/react-router";
import { Trash2Icon } from "lucide-react";

export const Route = createFileRoute("/poll/$pollId")({
  component: SinglePoll,
});

function SinglePoll() {
  const { pollId } = Route.useParams();
  const { poll, isPending, error } = useFetchPoll(pollId);
  const isOwner = poll?.user.id === 5;

  const handleDeletePoll = () => {
    if (confirm("Are you sure you want to delete this poll?")) {
      // delete poll
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
                onClick={handleDeletePoll}
                variant="destructive"
                className="flex items-center gap-2"
              >
                <Trash2Icon size={18} />
                <span>Delete Poll</span>
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
