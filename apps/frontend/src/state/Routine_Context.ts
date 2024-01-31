import { createContext } from "react";
import { Routine } from "../types/types";
import { RoutineAction } from "../ducks/Actions/actions";

export const RoutineContext = createContext<{
  state: Routine;
  dispatch: React.Dispatch<RoutineAction>;
}>({
  state: { exercises: [], order: "" },
  dispatch: () => null,
});
