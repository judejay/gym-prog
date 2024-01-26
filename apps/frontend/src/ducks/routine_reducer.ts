import { useReducer } from "react";
import { Exercise } from "../types/types";

export interface Routine {
  exercises: Exercise[];
  name: string;
  description: string;
  id: string;
  sets?: number;
  reps?: number;
  rest?: number;
  order?: string[];
}

export const useRoutineReducer = () => {
  return useReducer(routineReducer, initialState);
};
const initialState: Routine = {
  exercises: [],
  name: "initial",
  description: "test",
  id: "test1",
  sets: 1,
  reps: 12,
  rest: 60,
  order: [],
};

export const routineReducer = (state: Routine, action: any) => {
  switch (action.type) {
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case "REMOVE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.name !== action.payload.name
        ),
      };
    case "UPDATE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.map((exercise) => {
          if (exercise.name === action.payload.name) {
            return action.payload;
          } else {
            return exercise;
          }
        }),
      };
    case "UPDATE_ROUTINE":
      return {
        ...state,
        ...action.payload,
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
