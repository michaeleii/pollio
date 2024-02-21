import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSignalR from "./useSignalR";

type CreateVoteSchema = {
  pollId: number;
  optionId: number | null;
  userId: string;
};

export default function useCreateVote() {
  const { connection } = useSignalR("/r/pollhub");
  const qc = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (vote: CreateVoteSchema) => {
      await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vote),
      });
    },
    onSuccess: () => {
      // Invalidate the poll query
      qc.invalidateQueries({
        queryKey: ["polls"],
      });
      connection?.invoke("SendVote");
    },
  });
  return { makeVote: mutate, isVoting: isPending, error };
}
