import { createContext } from "react";
import { Routine } from "../types/types";
import { RoutineAction } from "./actions";

interface RoutineContextProps {
  state: Routine;
  dispatch: React.Dispatch<RoutineAction>;
}

export const RoutineContext = createContext<RoutineContextProps>({
  state: { exercises: [], order: "" },
  dispatch: () => null,
});
