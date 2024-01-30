import { Paper, Text } from '@mantine/core';
import './Instructions.css'
import { useMyContext } from '../../hooks/useMyContext';
import CardHeading from '../CardHeading/CardHeading';

const Instructions: React.FC = () => {
    const { selectedExercise } = useMyContext();
    return (
        selectedExercise &&
        <Paper withBorder radius="md" className="card">
            <CardHeading />
            <Text size="sm" mt="sm" c="dimmed">
                {selectedExercise.instructions}
            </Text>
        </Paper>


    );
}

export default Instructions;