import React from 'react'
import { useMyContext } from '../../hooks/useContext';

type Props = {
}

const Video: React.FC<Props> = () => {
    const { selectedExercise } = useMyContext();

    return (
        <iframe width="420" height="315"
            src={selectedExercise?.videoUrl}>
        </iframe>

    )
}


export default Video