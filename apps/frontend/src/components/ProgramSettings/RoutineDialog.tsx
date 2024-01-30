import React from 'react'
import { useMyContext } from '../../hooks/useMyContext';

type RoutineDialogProps = {
}

const RoutineDialog: React.FC<RoutineDialogProps> = () => {
    const { selectedExercise } = useMyContext();
    console.log("selected", selectedExercise);
    return (
        <div>
            <button>Add to Routine  </button>
        </div>
    )
}


export default RoutineDialog