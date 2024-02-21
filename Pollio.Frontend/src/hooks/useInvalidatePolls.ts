import { useQueryClient } from "@tanstack/react-query";
import useSignalR from "./useSignalR";
import { useEffect } from "react";

export default function useInvalidatePolls() {
  const { connection } = useSignalR("/r/pollhub");
  const qc = useQueryClient();
  useEffect(() => {
    if (!connection) {
      return;
    }
    connection.on("InvalidatePolls", async () => {
      await qc.invalidateQueries({
        queryKey: ["polls"],
      });
    });
    return () => {
      connection.off("InvalidatePolls");
    };
  }, [connection, qc]);
}
