import { Button, ComboboxItem, OptionsFilter, Popover, Select } from '@mantine/core';
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
        <Popover width={300} position="bottom" withArrow shadow="md">
            <Popover.Target>
                <Button>Filter by Equipment</Button>
            </Popover.Target>
            <Popover.Dropdown>
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
                /></Popover.Dropdown>
        </Popover>

    );
}

export default SelectGroup;