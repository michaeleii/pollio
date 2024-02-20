import { useMutation, useQueryClient } from "@tanstack/react-query";

type CreateVoteSchema = {
  pollId: number;
  optionId: number | null;
};

export default function useCreateVote() {
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
      qc.invalidateQueries({ queryKey: ["polls"] });
    },
  });
  return { makeVote: mutate, isVoting: isPending, error };
}
