import React from 'react'
import { useMyContext } from '../../hooks/useMyContext';
import { useRoutineReducer } from '../../ducks/routine_reducer';

type RoutineDialogProps = {
}

const RoutineDialog: React.FC<RoutineDialogProps> = () => {
    const { routine, dispatch } = useRoutineReducer();

    const { selectedExercise } = useMyContext();
    console.log("selected", selectedExercise);
    function onHandleAddExercise(event: React.MouseEvent<HTMLElement>): void {
        event.preventDefault();
        if (selectedExercise) {
            dispatch({ type: 'ADD_EXERCISE', payload: selectedExercise });
        } else {
            console.error('No exercise selected');
        }
    }

    return (
        <div>
            <button onClick={onHandleAddExercise}>Add to Routine  </button>
            <p>Current Routine:{routine.exercises.map(ex => <>{ex.name}</>)}</p>
        </div>
    )
}


export default RoutineDialog