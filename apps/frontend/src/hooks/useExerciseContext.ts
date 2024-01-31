import { useContext } from "react";
import {
  ExerciseContext,
  ExerciseContextProps,
} from "../state/exerciseContextProvider";

export const useExerciseContext = (): ExerciseContextProps => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
