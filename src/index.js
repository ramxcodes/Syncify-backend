import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from "./lib/db.js";
import path from "path";
import cors from "cors";

// Routes
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import songRoutes from "./routes/songs.routes.js";
import albumRoutes from "./routes/album.routes.js";
import statsRoutes from "./routes/stats.routes.js";

// Socket
import { createServer } from "http";
import { initializeSocket } from "./lib/socket.js";

//cron
import cron from "node-cron";

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT;

const httpServer = createServer(app);

// Initialize Socket.IO with httpServer
initializeSocket(httpServer);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(clerkMiddleware());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB Limit
    },
  })
);

// cron jobs
const tempDir = path.join(process.cwd(), "tmp");
cron.schedule("0 * * * *", () => {
  if (fs.existsSync(tempDir)) {
    fs.readdir(tempDir, (err, files) => {
      if (err) {
        console.log("error", err);
        return;
      }
      for (const file of files) {
        fs.unlink(path.join(tempDir, file), (err) => {});
      }
    });
  }
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
