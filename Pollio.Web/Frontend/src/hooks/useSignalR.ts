import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { useEffect, useState } from "react";

export default function useSignalR(url: string) {
  const [connection, setConnection] = useState<HubConnection | undefined>();
  useEffect(() => {
    let canceled = false;
    const connection = new HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    connection
      .start()
      .then(() => {
        if (!canceled) {
          setConnection(connection);
        }
      })
      .catch((error) => {
        console.log("signal error", error);
      });

    connection.onclose(() => {
      if (canceled) {
        return;
      }
      console.log("signal closed");
      setConnection(undefined);
    });

    connection.onreconnecting(() => {
      if (canceled) {
        return;
      }
      console.log("signal reconnecting");
      setConnection(undefined);
    });

    connection.onreconnected(() => {
      if (canceled) {
        return;
      }
      console.log("signal reconnected");
      setConnection(connection);
    });

    // Clean up the connection when the component unmounts
    return () => {
      canceled = true;
      connection.stop();
    };
  }, [url]);

  return { connection };
}
