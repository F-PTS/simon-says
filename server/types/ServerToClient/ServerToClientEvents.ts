interface ServerToClientEvents {
    noArg: () => void;
    test: (msg: string) => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}
