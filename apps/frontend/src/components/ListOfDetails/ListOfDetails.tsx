import { Flex } from '@mantine/core';
import Detail from '../Detail/Detail';
import './ListOfDetails.css';
import { useMyContext } from '../../hooks/useContext';
function ListOtDetails() {
    const { selectedExercise } = useMyContext();
    console.log("selected", selectedExercise);
    return (
        <Flex className="listOfDetails"
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
        >
            <Detail name={selectedExercise?.name} />
            <Detail />
            <Detail />

        </Flex>
    );
}

export default ListOtDetails;
