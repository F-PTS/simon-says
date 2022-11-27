interface ServerToClientEvents {
    pong: () => void;
    connected: () => void;
    disconnected: () => void;
    roomJoined: (msg: string) => void;
    hello: () => void;
}

export default ServerToClientEvents