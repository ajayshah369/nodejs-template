/* eslint-disable no-console */
require("dotenv").config({
  path: `.env${process.env.NODE_ENV !== "production" ? ".local" : ""}`
});

const app = require("./app/app");

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNCAUGHT EXCEPTION!! Shutting down...");
  process.exit(1);
});

const server = app.listen(process.env.PORT, () => {
  console.log(process.env.NODE_ENV);
  console.log(
    `PID: ${process.pid}, Now browse to 'http://localhost:${process.env.PORT}'`
  );
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLED REJECTION!! Shutting down...");

  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("Process terminated");
  });
});
