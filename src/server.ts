// Load environment variables first
import "dotenv/config";

import express from "express";
import cors from "cors";

import { connectDB } from "./config/db.js";
import { createIndexes } from "./config/indexes.js";

const app = express();

const PORT = Number(process.env.PORT) || 5000;
const CLIENT_URL = process.env.CLIENT_URL;

if (!CLIENT_URL) {
  throw new Error("CLIENT_URL is missing in .env");
}

// CORS Configuration
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Health Check API
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "MentorLagbe API is running",
  });
});

// Start Server
const startServer = async () => {
  try {
    // Connect Database
    await connectDB();

    // Create Database Indexes
    await createIndexes();

    // Start Express Server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error);

    process.exit(1);
  }
};

void startServer();

