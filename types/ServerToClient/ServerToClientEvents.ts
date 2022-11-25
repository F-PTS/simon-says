interface ServerToClientEvents {
    pong: () => void;
    connected: () => void;
    disconnected: () => void;
}

export default ServerToClientEvents