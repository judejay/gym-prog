import { Flex } from '@mantine/core';
import Detail from '../Detail/Detail';
import './ListOfDetails.css';
import { useMyContext } from '../../hooks/useContext';
import TabsContainer from '../TabsContainer/TabsContainer';
function ListOtDetails() {
    const { selectedExercise } = useMyContext();
    console.log("selected", selectedExercise);
    if (!selectedExercise) {
        return (<h1>no exercise selected</h1>);
    }
    return (
        <Flex className="listOfDetails"
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
        >
            <TabsContainer />

        </Flex>
    );
}

export default ListOtDetails;
