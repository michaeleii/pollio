import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./providers/theme-provider";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import React, { Suspense } from "react";

// Create a client
const queryClient = new QueryClient();

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

const KindeAuthProvider = ({ children }: ProvidersProps) => {
  if (process.env.NODE_ENV === "production") {
    return (
      <KindeProvider
        clientId="5b88e740d3ec47ccaf2bd331d5923f3f"
        domain="https://pollio.kinde.com"
        redirectUri="https://pollio.fly.dev"
        logoutUri="https://pollio.fly.dev"
        onRedirectCallback={async (user) => {
          console.log({ user });
          const newUser = {
            id: user.id,
            avatar:
              user.picture ??
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
            email: user.email,
            name: user.given_name,
            lastName: user.family_name,
          };
          await fetch("/api/auth", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          });
        }}
      >
        {children}
      </KindeProvider>
    );
  }
  return (
    <KindeProvider
      clientId="8877ae653ef445e5802665e218a30f98"
      domain="https://pollio-dev.us.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
      onRedirectCallback={async (user) => {
        console.log({ user });
        const newUser = {
          id: user.id,
          avatar:
            user.picture ??
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
          email: user.email,
          name: user.given_name,
          lastName: user.family_name,
        };
        await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      }}
    >
      {children}
    </KindeProvider>
  );
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <KindeAuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </KindeAuthProvider>
  );
}

type ProvidersProps = {
  children: React.ReactNode;
};
