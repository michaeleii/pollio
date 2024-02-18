import MainWrapper from "@/components/main-wrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <MainWrapper>
      <h1 className="text-4xl font-bold">All Polls</h1>
    </MainWrapper>
  );
}
