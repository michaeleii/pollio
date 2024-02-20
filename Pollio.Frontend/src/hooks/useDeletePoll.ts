import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeletePoll() {
  const qc = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/poll/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      return response.json();
    },
    onSuccess: () => {
      // Invalidate the poll query
      qc.invalidateQueries({
        queryKey: ["polls"],
      });
    },
  });
  return { deletePoll: mutate, isDeleting: isPending, DeletePollError: error };
}
