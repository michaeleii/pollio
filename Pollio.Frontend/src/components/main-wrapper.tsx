import { cn } from "@/lib/utils";

export default function MainWrapper({ className, children }: MainWrapperProps) {
  return (
    <main className={cn("p-5 max-w-7xl mx-auto", className)}>{children}</main>
  );
}

type MainWrapperProps = {
  children: React.ReactNode;
  className?: string;
};
