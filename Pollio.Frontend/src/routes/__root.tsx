import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <Navbar />
      <Outlet />
    </Providers>
  ),
});
