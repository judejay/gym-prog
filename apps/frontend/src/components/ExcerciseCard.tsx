import React from 'react';

type ExerciseCardProps = {
    name: string;
    duration: number;
};

const ExerciseCard: React.FC<ExerciseCardProps> = ({ name, duration }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Duration: {duration} minutes</p>
        </div>
    );
};

export default ExerciseCard;
