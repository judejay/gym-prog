import { Exercise, Routine } from "../types/types";
import uuid4 from "uuid4";
import { ActionType, RoutineAction } from "./actions";

export interface Action {
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

export const RoutineReducer = (
  state: Routine,
  action: RoutineAction
): Routine => {
  switch (action.type) {
    case ActionType.ADD_EXERCISE: {
      const id = uuid4();
      const exercise = { ...action.payload };
      exercise.exerciseId = id;
      return {
        ...state,
        exercises: [...state.exercises, exercise],
      };
    }

    case ActionType.REMOVE_EXERCISE:
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

    default:
      return state;
  }
};
