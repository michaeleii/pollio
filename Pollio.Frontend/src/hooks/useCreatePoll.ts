import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import useSignalR from "./useSignalR";

type CreatePollSchema = {
  question: string;
  options: string[];
};

export default function useCreatePoll() {
  const navigate = useNavigate();
  const { connection } = useSignalR("/r/pollhub");
  const qc = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (poll: CreatePollSchema) => {
      const response = await fetch("/api/poll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(poll),
      });
      return response.json();
    },
    onSuccess: () => {
      // Invalidate the poll query
      qc.invalidateQueries({
        queryKey: ["polls"],
      });
      connection?.invoke("SendPoll");
      // Navigate to the home page
      navigate({ to: "/" });
    },
  });
  return { createPoll: mutate, isPending, error };
}
