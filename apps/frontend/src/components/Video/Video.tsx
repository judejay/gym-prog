import React from 'react'
import { useMyContext } from '../../hooks/useContext';
import { AspectRatio } from '@mantine/core';



const Video: React.FC = () => {
    const { selectedExercise } = useMyContext();
    return (

        <AspectRatio ratio={16 / 9}>
            <iframe
                src={selectedExercise?.videoUrl}
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </AspectRatio>
    )
}


export default Video