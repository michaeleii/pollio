import MainWrapper from "@/components/main-wrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <MainWrapper>
      <h3>Welcome Home!</h3>
    </MainWrapper>
  );
}
