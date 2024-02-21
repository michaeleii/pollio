import { useQuery } from "@tanstack/react-query";
import { Poll } from "../types/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function useFetchPolls() {
  const { user } = useKindeAuth();
  const { data, error, isPending } = useQuery({
    queryKey: ["polls", user?.id],
    queryFn: async () => {
      const response = await fetch("/api/poll");
      const polls: Poll[] = await response.json();
      if (!polls || !polls.length) return [];
      return polls.map((poll) => {
        poll.options = poll.options.map((opt) => {
          if (!user || !user.id) return opt;
          return opt.allVotes.includes(user.id)
            ? { ...opt, selected: true }
            : opt;
        });
        return poll;
      });
    },
  });
  return { polls: data, error, isPending };
}
