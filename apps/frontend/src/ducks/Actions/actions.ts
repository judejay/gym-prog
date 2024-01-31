import { Exercise } from "../../types/types";

export enum ActionType {
  ADD_EXERCISE = "ADD_EXERCISE",
  REMOVE_EXERCISE = "REMOVE_EXERCISE",
  UPDATE_EXERCISE = "UPDATE_EXERCISE",
  UPDATE_ROUTINE = "UPDATE_ROUTINE",
  UPDATE_ORDER = "UPDATE_ORDER",
  DELETE_ROUTINE = "DELETE_ROUTINE",
}

export interface AddToRoutine {
  type: ActionType.ADD_EXERCISE;
  payload: Exercise;
}

export interface RemoveFromRoutine {
  type: ActionType.REMOVE_EXERCISE;
  payload: Exercise;
}

export type RoutineAction = AddToRoutine | RemoveFromRoutine;
