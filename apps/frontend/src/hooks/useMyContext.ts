import { useContext } from "react";
import { ExerciseContext, ContextProps } from "./useContext";
export const useMyContext = (): ContextProps => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
