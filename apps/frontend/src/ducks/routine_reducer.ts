import { useReducer } from "react";
import { Exercise } from "../types/types";
import uuid4 from "uuid4";

export interface Routine {
  exercises: Exercise[];
  order: string;
}

interface Action {
  //TODO: add Routine for payload
  payload: Exercise;
  type: string;
  text?: string;
  routine?: Routine;
  routineId?: number;
}
export const initialState: Routine = {
  exercises: [],
  order: "",
};

export const useRoutineReducer = () => {
  const [routine, dispatch] = useReducer<React.Reducer<Routine, Action>>(
    routineReducer,
    initialState
  );
  return { routine, dispatch };
};

export const routineReducer = (state: Routine, action: Action): Routine => {
  switch (action.type) {
    case "ADD_EXERCISE": {
      const id = uuid4();
      const exercise = { ...action.payload };
      exercise.exerciseId = id;
      return {
        ...state,
        exercises: [...state.exercises, exercise],
      };
    }

    case "REMOVE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter((exercise) => {
          if (
            typeof action.payload === "object" &&
            "exerciseId" in action.payload
          ) {
            return exercise.exerciseId !== action.payload.exerciseId;
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
        order: action.routine?.order || "",
      };
    case "DELETE_ROUTINE":
      return initialState;
    default:
      return state;
  }
};
