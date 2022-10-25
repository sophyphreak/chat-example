import { Server } from "socket.io";

const io = new Server(5000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

io.on("connection", (socket) => {
  socket.on("chat message client speaking", (message) => {
    io.emit("chat message", { message, timeString: new Date().toString() });
  });
});
