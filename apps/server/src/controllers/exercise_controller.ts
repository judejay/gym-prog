import { Request, Response } from "express";
import { fetchExerciseData } from "../services/exercise_service";

export const getExercises = async (req: Request, res: Response) => {
  const exercises = await fetchExerciseData();
  const result = JSON.stringify({
    exercises: exercises,
  });
  res.status(200).send(result);
};
