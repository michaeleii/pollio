import { Poll } from "@/types/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useQuery } from "@tanstack/react-query";

export function useFetchPoll(pollId: string) {
  const { user } = useKindeAuth();
  const { data, error, isPending } = useQuery({
    queryKey: ["polls", pollId],
    queryFn: async () => {
      const response = await fetch(`/api/poll/${pollId}`);
      const poll: Poll = await response.json();
      poll.options = poll.options.map((opt) => {
        if (!user || !user.id) return opt;
        return opt.allVotes.includes(user.id)
          ? { ...opt, selected: true }
          : opt;
      });

      return poll;
    },
  });
  return { poll: data, error, isPending };
}
