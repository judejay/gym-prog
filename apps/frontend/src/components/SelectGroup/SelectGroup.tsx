import { Select } from '@mantine/core';
import './SelectGroup.css';
function SelectGroup() {
    return (
        <Select className='select'
            label="Equipment"
            placeholder="Pick value"
            data={['Dumbbells', 'Barbell', 'Atlas Stone', 'Machine', 'Body Only', 'Other']}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
        />

    );
}

export default SelectGroup;