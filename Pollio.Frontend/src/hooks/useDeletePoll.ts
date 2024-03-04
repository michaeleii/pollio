import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export default function useDeletePoll() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (id: number) => {
      await fetch(`/api/poll/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
    },
    onSuccess: () => {
      // Invalidate the poll query
      qc.invalidateQueries({
        queryKey: ["polls"],
      });
      // Navigate to the home page
      navigate({ from: "/poll/$pollId", to: "/" });
    },
  });
  return { deletePoll: mutate, isDeleting: isPending, DeletePollError: error };
}
