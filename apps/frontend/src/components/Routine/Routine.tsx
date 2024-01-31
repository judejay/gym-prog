import React, { useContext } from "react";
import { RoutineContext } from "../../state/Routine_Context";

const Routine: React.FC = () => {
  const { state } = useContext(RoutineContext);
  console.log("state", state);
  return (
    <div>
      <h1>Routine</h1>
      <div>
        {state.exercises.map((exercise) => (
          <div key={exercise.exerciseId}>
            <h2>{exercise.name}</h2>
            <p>{exercise.reps}</p>
            <p>{exercise.sets}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine;
