import { Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import './Detail.css'
import { useMyContext } from '../../hooks/useContext';

type DetailProps = {

}
const Detail: React.FC<DetailProps> = () => {
    const { selectedExercise } = useMyContext();
    console.log("selected", selectedExercise);
    return (
        selectedExercise &&
        <Paper withBorder radius="md" className="card">
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'pink', to: 'orange' }}
            >
                <IconColorSwatch style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
            </ThemeIcon>
            <Text size="xl" fw={500} mt="md">

                {selectedExercise.name}            </Text>
            <Text size="sm" mt="sm" c="dimmed">
                {selectedExercise.instructions}
            </Text>
        </Paper>


    );
}

export default Detail;