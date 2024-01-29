import { useReducer } from "react";
import { Exercise } from "../types/types";

export interface Routine {
  exercises: Exercise[];
}

interface Action {
  payload: Exercise;
  type: string;
  text?: string;
  routine?: Routine;
  taskId?: number;
}
export const initialState: Routine = {
  exercises: [],
};

export const useRoutineReducer = () => {
  const [routine, dispatch] = useReducer<React.Reducer<Routine, Action>>(
    routineReducer,
    initialState
  );
  return { routine, dispatch };
};

export const routineReducer = (state: Routine, action: Action) => {
  switch (action.type) {
    case "ADD_ROUTINE":
      return {
        ...state,
        ...(action.payload as object),
      };

    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case "REMOVE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter((exercise) => {
          if (typeof action.payload === "object" && "name" in action.payload) {
            return exercise.name !== action.payload.name;
          }
          return true;
        }),
      };
    case "UPDATE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.map((exercise) => {
          if (
            action.payload &&
            typeof action.payload === "object" &&
            "name" in action.payload &&
            exercise.name === action.payload.name
          ) {
            return action.payload;
          } else {
            return exercise;
          }
        }),
      };
    case "UPDATE_ROUTINE":
      return {
        ...state,
        ...(action.payload as object),
      };
    case "UPDATE_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
