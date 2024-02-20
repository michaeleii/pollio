import { Poll } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export function useFetchPoll(pollId: string) {
  const { data, error, isPending } = useQuery({
    queryKey: ["polls", pollId],
    queryFn: async () => {
      const response = await fetch(`/api/poll/${pollId}`);
      return response.json() as Promise<Poll>;
    },
  });
  return { poll: data, error, isPending };
}
