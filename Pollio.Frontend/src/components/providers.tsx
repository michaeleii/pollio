import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "./providers/theme-provider";

// Create a client
const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

type ProvidersProps = {
  children: React.ReactNode;
};
