import { useContext } from "react";
import {
  ExerciseContext,
  ContextProps,
} from "../ducks/exerciseContextProvider";

export const useExerciseContext = (): ContextProps => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
