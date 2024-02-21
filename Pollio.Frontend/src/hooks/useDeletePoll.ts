import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSignalR from "./useSignalR";
import { useNavigate } from "@tanstack/react-router";

export default function useDeletePoll() {
  const { connection } = useSignalR("/r/pollhub");
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
      connection?.invoke("SendPoll");
      // Navigate to the home page
      navigate({ from: "/poll/$pollId", to: "/" });
    },
  });
  return { deletePoll: mutate, isDeleting: isPending, DeletePollError: error };
}
