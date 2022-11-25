import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import ServerToClientEvents from "../../../types/ServerToClient/ServerToClientEvents";
import ClientToServerEvents from "../../../types/ClientToServer/ClientToServerEvents";
import { Button } from "@mui/material";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3000"
);

function NewGame() {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [lastPong, setLastPong] = useState<string | null>(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  return (
    <>
      <p>you are currently {isConnected ? "connected" : "disconnected"}</p>
      <Button variant="contained" onClick={sendPing}>
        Send Ping
      </Button>

      <h3>Last Ping: {lastPong}</h3>
    </>
  );
}

export default NewGame;
