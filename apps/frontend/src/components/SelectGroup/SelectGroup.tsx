import { Button, ComboboxItem, OptionsFilter, Popover, Select } from '@mantine/core';
import './SelectGroup.css';
import { useMyContext } from '../../hooks/useContext';
import { useState } from 'react';
function SelectGroup() {
    const { exerciseData } = useMyContext();
    const [value, setValue] = useState<ComboboxItem | null>(null);
    const filteredEquipment = exerciseData.map((exercise) => exercise.equipment);
    const uniqueEquipment = [...new Set(filteredEquipment)];
    const filteredExerciseData = exerciseData.filter(exercise => exercise.equipment.toLocaleLowerCase().includes(value?.value.toLocaleLowerCase() || ''));
    console.log("filteredExerciseData", filteredExerciseData);

    return (

        <Select className='select'
            value={value ? value.value : null}
            onChange={(_value, option) => setValue(option)}
            checkIconPosition="right"
            mt="md"
            allowDeselect
            clearable
            label="Equipment"
            placeholder="Pick value"
            data={uniqueEquipment}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
        />

    );
}

export default SelectGroup;