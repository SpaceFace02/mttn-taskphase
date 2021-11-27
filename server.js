const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const db_string = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// Change if deploying
const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋🏻❌SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    // No need to close it as SIGTERM automatically shuts down the server. SIGTERM is a polite way to terminate a program.
    console.log("💥 Process Terminated");
  });
});
