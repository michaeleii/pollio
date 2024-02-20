import { useMutation } from "@tanstack/react-query";

export default function useDeletePoll() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/poll/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      return response.json();
    },
  });
  return { deletePoll: mutate, isDeleting: isPending, DeletePollError: error };
}
