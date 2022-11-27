import express, { Express } from "express";
import { Server } from "socket.io";
import cors from "cors";

const app: Express = express();

import ClientToServerEvents from '../types/ClientToServer/ClientToServerEvents';
import ServerToClientEvents from '../types/ServerToClient/ServerToClientEvents';
import InterServerEvents from '../types/InterServer/InterServerEvents';
import SocketData from '../types/SocketData/SocketData';


app.use(cors());

const port = process.env.PORT;
const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>();

io.on("connection", (socket) => {
    socket.emit('connected')

    socket.on("disconnect", () => {
        socket.emit("disconnected");
    });

    socket.on("ping", () => {
        socket.emit('pong');
    });

    socket.on('roomCreation', (roomID) => {
        socket.join(roomID);
        socket.emit('roomJoined', `I have joined ${roomID} room.`)
        io.to(roomID).emit("hello")
    })

});