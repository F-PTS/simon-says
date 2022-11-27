interface ClientToServerEvents {
    ping: () => void
    roomCreation: (code: string) => void;
}

export default ClientToServerEvents