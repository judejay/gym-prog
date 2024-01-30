import React from 'react'
import { useMyContext } from '../../hooks/useMyContext';
import { useRoutineReducer } from '../../ducks/routine_reducer';
import { Table } from '@mantine/core';
import './RoutineDialog.css';

const RoutineDialog: React.FC = () => {
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

    const rows = routine.exercises.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.muscle}</Table.Td>
            <Table.Td>{element.difficulty}</Table.Td>
            <Table.Td>{element.equipment}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <button onClick={onHandleAddExercise}>Add to Routine  </button>
            <Table stickyHeader stickyHeaderOffset={60}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Exercise name</Table.Th>
                        <Table.Th>Muscle</Table.Th>
                        <Table.Th>Difficulty</Table.Th>
                        <Table.Th>Equipment</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
                <Table.Caption>Scroll page to see sticky thead</Table.Caption>
            </Table>
        </div>
    )
}


export default RoutineDialog