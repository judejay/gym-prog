import React from "react";
import { useRoutineReducer } from "../../ducks/routine_reducer";

const Routine: React.FC = () => {
  const { routine } = useRoutineReducer();
  console.log("state", routine);
  return (
    <div>
      <h1>Routine</h1>
    </div>
  );
};

export default Routine;
