import { Flex } from '@mantine/core';
import Detail from '../Detail/Detail';
import './ListOfDetails.css';
function ListOtDetails() {
    return (
        <Flex className="listOfDetails"
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
        >
            <Detail />
            <Detail />
            <Detail />

        </Flex>
    );
}

export default ListOtDetails;
