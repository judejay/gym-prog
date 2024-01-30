import React from 'react'
import { useMyContext } from '../../hooks/useMyContext';
import { useRoutineReducer } from '../../ducks/routine_reducer';
import { Box, Button, NumberInput, Table } from '@mantine/core';
import './RoutineDialog.css';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';


interface FormValues {
    name: string;
    reps: number | string;
    sets: number | string;
}
const RoutineDialog: React.FC = () => {
    const { routine, dispatch } = useRoutineReducer();

    const { selectedExercise } = useMyContext();
    function onHandleAddExercise(): void {
        if (selectedExercise) {
            selectedExercise.reps = form.values.reps;
            selectedExercise.sets = form.values.sets;
            dispatch({ type: 'ADD_EXERCISE', payload: selectedExercise });
        } else {
            console.error('No exercise selected');
        }
    }


    const form = useForm<FormValues>({
        initialValues: { name: selectedExercise?.name, reps: 1, sets: 1 },
        validate: {
            name: isNotEmpty('Name is required'),
            reps: isInRange({ min: 1 }, 'You must do at least 1 rep'),
            sets: isInRange({ min: 1 }, 'You must do at least 1 set'),
        },
    });
    const rows = routine.exercises.map((element) => (
        <Table.Tr key={element.exerciseId}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.muscle}</Table.Td>
            <Table.Td>{element.difficulty}</Table.Td>
            <Table.Td>{element.equipment}</Table.Td>
            <Table.Td>{element.reps}</Table.Td>
            <Table.Td>{element.sets}</Table.Td>
            <Table.Td><button onClick={() => dispatch({ type: 'REMOVE_EXERCISE', payload: element })}>Remove</button></Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <form onSubmit={form.onSubmit(onHandleAddExercise)}>
                <Box maw={340} mx="auto" mb="md">
                    <NumberInput {...form.getInputProps('reps')} label="Reps" placeholder="Reps" mt="md" />
                    <NumberInput {...form.getInputProps('sets')} label="Sets" placeholder="Sets" mt="md" />
                </Box >
                <Button type="submit" >Add to Routine  </Button>
            </form> <Table stickyHeader stickyHeaderOffset={60}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Exercise name</Table.Th>
                        <Table.Th>Muscle</Table.Th>
                        <Table.Th>Difficulty</Table.Th>
                        <Table.Th>Equipment</Table.Th>
                        <Table.Th>Reps</Table.Th>
                        <Table.Th>Sets</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
                <Table.Caption>Scroll page to see sticky table head</Table.Caption>
            </Table>
        </div>
    )
}


export default RoutineDialog