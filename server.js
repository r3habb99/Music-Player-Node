const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const logger = require("./utils/logger");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database and start the server only if the connection is successful
const startServer = async () => {
  try {
    await connectDB(); // Connect to the database
    // Use routes after successful database connection
    app.use("/api/auth", authRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  } catch (error) {
    logger.error(
      "Failed to start server due to database connection error",
      error
    );
  }
};

// Start the server
startServer();
