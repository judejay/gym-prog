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
  sets?: number;
  reps?: number;
  rest?: number;
  order?: number;
};

export type Validation =
  | {
      valid: true;
    }
  | {
      valid: false;
      message: string;
    };
