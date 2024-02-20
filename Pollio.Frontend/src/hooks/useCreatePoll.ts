import { useMutation } from "@tanstack/react-query";

type CreatePollSchema = {
  question: string;
  options: string[];
};

export default function useCreatePoll() {
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
  });
  return { createPoll: mutate, isPending, error };
}
