import { Flex } from '@mantine/core';
import Detail from '../Detail/Detail';
function ListOtDetails() {
    return (
        <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="md"
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
