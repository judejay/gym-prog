import { ThemeIcon, Text, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import React from 'react';
import { useMyContext } from '../../hooks/useMyContext';
const CardHeading: React.FC = () => {
    const { selectedExercise } = useMyContext();
    return (
        <div>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'pink', to: 'orange' }}
            >
                <IconColorSwatch style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
            </ThemeIcon>
            <Text size="xl" fw={500} mt="md">
                {selectedExercise?.name}
            </Text>
        </div>
    );
};



export default CardHeading;
