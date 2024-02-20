import { useQuery } from "@tanstack/react-query";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export default function useSignalR(url: string) {
  const { isPending, error, data } = useQuery({
    queryKey: ["signalR", url],
    queryFn: async () => {
      const connection = new HubConnectionBuilder()
        .withUrl(url)
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
      try {
        await connection.start();
        return connection;
      } catch (error) {
        console.error("Error starting SignalR connection:", error);
        throw error; // Re-throw for error handling in React Query
      }
    },
    enabled: !!url, // Enable based on url availability
    retry: 3, // Retry up to 3 times on errors
    retryDelay: (count) => Math.min(count * 2000, 10000), // Exponential backoff
    staleTime: Infinity, // Consider connection data always fresh
  });

  return { connection: data, isConnecting: isPending, error };
}
