import { Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import './Instructions.css'
import { useMyContext } from '../../hooks/useContext';
import CardHeading from '../CardHeading/CardHeading';
type InstructionsProps = {

}
const Instructions: React.FC<InstructionsProps> = () => {
    const { selectedExercise } = useMyContext();
    console.log("selected", selectedExercise);
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