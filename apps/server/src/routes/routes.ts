import * as express from "express";
import { Express } from "express";
import {
  fetchExerciseData,
  weaklyValidateRoutine,
} from "../services/exercise_service";
import * as EXERCISE from "../data/exercises.json";

export function initializeRoutes(app: Express) {
  console.log("🏗️  Setting up routers...");

  addHealthCheck(app);

  addAPIRoutes(app);
}

function addHealthCheck(app: Express) {
  console.log("🛠️  Creating base router...");

  const baseRouter = express.Router();

  baseRouter.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET");
    console.log(`📨 ${req.url}`);
    next();
  });
  console.log("🏠❤️‍🩹  Adding health check route...");
  baseRouter.get("/health", (req, res) => {
    res.status(200).send("👍 Okay! The server is responding! 🙌");
  });

  console.log("🛠️  Applying base router to Express server...");
  app.use("/", baseRouter);
}

function addAPIRoutes(app: Express) {
  console.log("🛠️  Creating API router...");

  const apiRouter = express.Router();
  apiRouter.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });
  console.log("📨  Adding GET exercises route...");
  apiRouter.get("/exercises/", async (req, res) => {
    const exercises = await fetchExerciseData();
    const result = JSON.stringify({
      exercises: exercises,
    });
    res.status(200).send(result);
  });

  console.log("🛠️  Applying API router to Express server...");
  app.use("/api", apiRouter);
}
