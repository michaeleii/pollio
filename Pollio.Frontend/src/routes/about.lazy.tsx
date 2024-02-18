import MainWrapper from "@/components/main-wrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return <MainWrapper>Hello from About!</MainWrapper>;
}
