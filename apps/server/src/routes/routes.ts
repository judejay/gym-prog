import * as express from "express";
import { Express } from "express";

import { addHealthCheck } from "./middleware/addHealthCheck";
import { setContentJson } from "./middleware/setContentJson";
import * as exerciseController from "../controllers/exercise_controller";
export function initializeRoutes(app: Express) {
  console.log("🏗️  Setting up routers...");

  addHealthCheck(app);

  addAPIRoutes(app);
}

function addAPIRoutes(app: Express) {
  console.log("🛠️  Creating API router...");

  const apiRouter = express.Router();
  apiRouter.use(setContentJson);
  console.log("📨  Adding GET exercises route...");
  apiRouter.get("/exercises/", exerciseController.getExercises);

  console.log("🛠️  Applying API router to Express server...");
  app.use("/api", apiRouter);
}
