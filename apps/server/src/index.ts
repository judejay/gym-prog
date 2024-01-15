import express, { Express, Request, Response } from "express";
//import * as cors from 'cors';
import { printNewLine } from "./helpers/helpers";
import { initializeRoutes } from "./routes/routes";
import { Server } from "http";
import cors from "cors";
import { CONFIG } from "./config";

const app = express();
const port = CONFIG.port || 3000;
const environment = CONFIG.nodeEnv;

const corsOptions = {
  origin: "*",
  credentials: false, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

try {
  printNewLine();

  console.log("💫 Initializing Server...");
  const app = express();

  console.log("👉 Enabling JSON middleware...");
  app.use(express.json());

  console.log("👉 Enabling URL-Encoded middleware...");
  app.use(express.urlencoded({ extended: true }));

  console.log("👉 Enabling CORS...");
  app.use(cors(corsOptions));

  initializeRoutes(app);

  const server = app
    .listen(port, () => {
      console.log(`⭐ Server is now listening on port: ⚓ ${port} ⭐`);
      printNewLine();
      console.log(
        `⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐`
      );
      console.log(`⭐    🌍 Running in ${environment} environment      		⭐`);
      console.log(
        `⭐    Health check at "http://localhost:${port}/health"            ⭐`
      );
      console.log(
        `⭐    Or try "http://localhost:${port}/api/exercises"        ⭐`
      );
      console.log(
        `⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐`
      );
    })
    .on("error", (error) => {
      console.error("🚨 Express Error Handler 🚨 ");
      console.error(error);
    });

  process.on("SIGINT", () => handleShutdown(server));
  process.on("SIGTERM", () => handleShutdown(server));
  process.on("SIGHUP", () => handleShutdown(server));
} catch (e: unknown) {
  console.error("🚨 Top level Error caught 🚨 ");
  console.error((e as Error).message);
}

function handleShutdown(server: Server) {
  console.log("🚪 Closing Server...");
  server.close(() => {
    console.log("🏥 Express server closed ✅");
    process.exit(0);
  });
}
