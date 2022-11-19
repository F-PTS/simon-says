import express, { Express } from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(cors());

const port = process.env.PORT;
const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    socket.broadcast.emit("a user connected");
});

app.listen(port, () => {
    console.log("listening on *:3000");
});
