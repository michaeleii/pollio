import { useQuery } from "@tanstack/react-query";

export default function useFetchPolls() {
  const { data, error, isPending } = useQuery({
    queryKey: ["polls"],
    queryFn: async () => {
      const response = await fetch("/api/poll");
      return response.json();
    },
  });
  return { polls: data, error, isPending };
}
