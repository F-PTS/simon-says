import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import ServerToClientEvents from "../../../types/ServerToClient/ServerToClientEvents";
import ClientToServerEvents from "../../../types/ClientToServer/ClientToServerEvents";
import { Button } from "@mui/material";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3000"
);

const genRoomID = () => {
  const code = (
    Math.floor(Math.random() * (1_000_000 - 100_000)) + 100_000
  ).toString();

  return code;
};

function NewGame() {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [roomID, setRoomID] = useState<string | null>(null);
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

  return (
    <>
      <p>you are currently {isConnected ? "connected" : "disconnected"}</p>
      <Button variant="contained" onClick={() => setRoomID(genRoomID())}>
        Generate New Room
      </Button>

      {roomID && <h1>Room Code: {roomID}</h1>}
    </>
  );
}

export default NewGame;
