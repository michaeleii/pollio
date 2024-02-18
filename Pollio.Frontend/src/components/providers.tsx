import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Create a client
const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

type ProvidersProps = {
  children: React.ReactNode;
};
