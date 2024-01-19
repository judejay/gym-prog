import { ComboboxItem, OptionsFilter, Select } from '@mantine/core';
import './SelectGroup.css';
import { useMyContext } from '../../hooks/useContext';
function SelectGroup() {
    const { exerciseData } = useMyContext();

    const optionsFilter: OptionsFilter = ({ options, search }) => {
        const splittedSearch = search.toLowerCase().trim().split(' ');
        return (options as ComboboxItem[]).filter((option) => {
            const words = option.label.toLowerCase().trim().split(' ');
            return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
        });
    };

    return (
        <Select className='select'
            filter={optionsFilter}
            checkIconPosition="right"
            mt="md"
            allowDeselect
            clearable
            label="Equipment"
            placeholder="Pick value"
            data={['Dumbbells', 'Barbell', 'Atlas Stone', 'Machine', 'Body Only', 'Other']}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
        />

    );
}

export default SelectGroup;