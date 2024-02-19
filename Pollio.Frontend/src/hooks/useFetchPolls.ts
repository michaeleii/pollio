import { useQuery } from "@tanstack/react-query";
import { Poll } from "../types/types";

export default function useFetchPolls() {
  const { data, error, isPending } = useQuery({
    queryKey: ["polls"],
    queryFn: async () => {
      const response = await fetch("/api/poll");
      return response.json() as Promise<Poll[]>;
    },
  });
  return { polls: data, error, isPending };
}
