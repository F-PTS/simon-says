import express, { Express } from 'express';
const app: Express = express();

import ClientToServerEvents from '../types/ClientToServer/ClientToServerEvents';
import ServerToClientEvents from '../types/ServerToClient/ServerToClientEvents';
import InterServerEvents from '../types/InterServer/InterServer';
import SocketData from '../types/SocketData/SocketData';
import { Server } from 'socket.io';
import cors from 'cors';

app.use(cors());

const http = require('http');
const server = http.createServer(app).listen(3000);

const PORT = 5173;
const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>(server, {
    cors: {
        origin: "*"
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    socket.emit('connected');

    socket.on("disconnect", () => {
        socket.emit("disconnected");
    });

    socket.on("ping", () => {
        socket.emit('pong');
    });
})