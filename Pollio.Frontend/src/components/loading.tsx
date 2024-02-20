import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex w-full justify-center gap-2">
      <Loader2 className="animate-spin" size={24} />
      <span>Loading...</span>
    </div>
  );
}
