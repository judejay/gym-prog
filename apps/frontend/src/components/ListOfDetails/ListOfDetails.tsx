import { Flex } from "@mantine/core";
import "./ListOfDetails.css";
import { useExerciseContext } from "../../hooks/useExerciseContext";
import TabsContainer from "../TabsContainer/TabsContainer";

function ListOfDetails() {
  const { selectedExercise } = useExerciseContext();
  if (!selectedExercise) {
    return <h1>no exercise selected</h1>;
  }
  return (
    <Flex
      className="listOfDetails"
      mih={50}
      bg="rgba(0, 0, 0, 0)"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <TabsContainer />
    </Flex>
  );
}

export default ListOfDetails;
