import { createContext, useContext, useReducer } from "react";
import { Routine } from "../types/types";
import { useRoutineReducer } from "./routine_reducer";
import { Action } from "./routine_reducer";

interface Props {
  children?: React.ReactNode;
}

export interface RoutineContextProps {
  routine: Routine;
}

export interface RoutineDispatchContextProps {
  dispatch: React.Dispatch<React.Dispatch<Action>>;
}
export const RoutineDispatchContext = createContext<
  RoutineDispatchContextProps | undefined
>(undefined);
export const RoutineContext = createContext<RoutineContextProps | undefined>(
  undefined
);

export const RoutineContextProvider: React.FC<Props> = ({ children }) => {
  const [routine, dispatch] = useReducer(
    useRoutineReducer,
    {} as Routine,
    () => {
      const localData = localStorage.getItem("routine");
      return localData ? JSON.parse(localData) : {};
    }
  );

  return (
    <RoutineDispatchContext.Provider value={{ dispatch }}>
      <RoutineContext.Provider value={{ ...routine }}>
        {children}
      </RoutineContext.Provider>
    </RoutineDispatchContext.Provider>
  );
};
