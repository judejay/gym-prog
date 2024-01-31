import { ComboboxItem, Select } from "@mantine/core";
import "./SelectGroup.css";
import { useExerciseContext } from "../../hooks/useExerciseContext";
import { useState } from "react";

function SelectGroup() {
  const { exerciseData, setFilteredData } = useExerciseContext();
  const [value, setValue] = useState<ComboboxItem | null>(null);
  const filteredEquipment = exerciseData.map((exercise) => exercise.equipment);
  const uniqueEquipment = [...new Set(filteredEquipment)];

  const handleChange = (_value: string | null, option: ComboboxItem) => {
    setValue(option);
    if (_value === null) {
      setFilteredData(exerciseData);
      console.log("exerciseData value is null", exerciseData);
    } else {
      const filteredExerciseData = exerciseData.filter((exercise) =>
        exercise.equipment
          .toLocaleLowerCase()
          .includes(option.value.toLocaleLowerCase() || "")
      );
      setFilteredData(filteredExerciseData);
      console.log("exerciseData", exerciseData);
    }
  };

  return (
    <Select
      className="select"
      value={value ? value.value : null}
      onChange={handleChange}
      checkIconPosition="right"
      mt="md"
      allowDeselect
      clearable
      label="Equipment"
      placeholder="Pick value"
      data={uniqueEquipment}
      comboboxProps={{ transitionProps: { transition: "pop", duration: 200 } }}
    />
  );
}

export default SelectGroup;
