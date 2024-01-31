import React, { useContext } from "react";
import { useExerciseContext } from "../../hooks/useExerciseContext";
import { Box, Button, NumberInput, Table } from "@mantine/core";
import "./RoutineDialog.css";
import { isInRange, isNotEmpty, useForm } from "@mantine/form";
import { RoutineContext } from "../../state/Routine_Context";
import { ActionType } from "../../state/actions";

interface FormValues {
  name: string;
  reps: number;
  sets: number;
}

const RoutineDialog: React.FC = () => {
  const { state, dispatch } = useContext(RoutineContext);

  const { selectedExercise } = useExerciseContext();
  function onHandleAddExercise(): void {
    if (selectedExercise) {
      selectedExercise.reps = form.values.reps.toString();
      selectedExercise.sets = form.values.sets.toString();
      dispatch({ type: ActionType.ADD_EXERCISE, payload: selectedExercise });
    } else {
      console.error("No exercise selected");
    }
  }

  const form = useForm<FormValues>({
    initialValues: { name: selectedExercise?.name || "", reps: 1, sets: 1 },
    validate: {
      name: isNotEmpty("Name is required"),
      reps: isInRange({ min: 1 }, "You must do at least 1 rep"),
      sets: isInRange({ min: 1 }, "You must do at least 1 set"),
    },
  });
  const rows = state.exercises.map((exercise) => (
    <Table.Tr key={exercise.exerciseId}>
      <Table.Td>{exercise.name}</Table.Td>
      <Table.Td>{exercise.muscle}</Table.Td>
      <Table.Td>{exercise.difficulty}</Table.Td>
      <Table.Td>{exercise.equipment}</Table.Td>
      <Table.Td>{exercise.reps}</Table.Td>
      <Table.Td>{exercise.sets}</Table.Td>
      <Table.Td>
        <button
          onClick={() =>
            dispatch({ type: ActionType.REMOVE_EXERCISE, payload: exercise })
          }
        >
          Remove
        </button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <form onSubmit={form.onSubmit(onHandleAddExercise)}>
        <Box maw={340} mx="auto" mb="md">
          <NumberInput
            {...form.getInputProps("reps")}
            label="Reps"
            placeholder="Reps"
            mt="md"
          />
          <NumberInput
            {...form.getInputProps("sets")}
            label="Sets"
            placeholder="Sets"
            mt="md"
          />
        </Box>
        <Button type="submit">Add to Routine </Button>
      </form>{" "}
      <Table stickyHeader stickyHeaderOffset={60}>
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
  );
};

export default RoutineDialog;
