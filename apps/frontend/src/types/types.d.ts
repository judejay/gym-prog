export type Exercise = {
  name: string;
  type: string;
  description: string;
  difficulty: string;
  instructions: string;
  muscle: string;
  equipment: string;
  exerciseId?: string;
  videoUrl?: string;
  reps?: string;
  sets?: string;
};

export interface Routine {
  exercises: Exercise[];
  order: string;
}

export type Validation =
  | {
      valid: true;
    }
  | {
      valid: false;
      message: string;
    };
