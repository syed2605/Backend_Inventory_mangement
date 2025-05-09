import { Server } from "socket.io";

let ioInstance: Server;

export const initSocket = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // for dev, restrict in prod
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("chat-message", (msg) => {
      console.log("Message received:", msg);
      io.emit("chat-message", msg);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });

  ioInstance = io;
};

export const getIO = (): Server => {
  if (!ioInstance) {
    throw new Error("Socket.io not initialized");
  }
  return ioInstance;
};
