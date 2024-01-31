import { createContext, useState, useEffect, useCallback } from "react";
import { Exercise } from "../types/types";

export interface ResponseData {
  exercises: Exercise[];
}
interface Props {
  children?: React.ReactNode;
}

export interface ExerciseContextProps {
  filteredData: Exercise[];
  selectedExercise: Exercise | null;
  fetchData: () => Promise<ResponseData>;
  exerciseData: Exercise[];
  setExerciseData: React.Dispatch<React.SetStateAction<Exercise[]>>;
  setFilteredData: React.Dispatch<React.SetStateAction<Exercise[]>>;
  setSelectedExercise: React.Dispatch<React.SetStateAction<Exercise | null>>;
}
export const ExerciseContext = createContext<ExerciseContextProps | undefined>(
  undefined
);

const serverUrl = "http://localhost:3000/api/exercises";

export const ExerciseContextProvider: React.FC<Props> = ({ children }) => {
  const [filteredData, setFilteredData] = useState<Exercise[]>([]);
  const [exerciseData, setExerciseData] = useState<Exercise[]>([]);
  const [selected, setSelected] = useState<Exercise | null>(null);
  const fetchData = useCallback(async (): Promise<ResponseData> => {
    const response = await fetch(serverUrl);
    const data = await response.json();
    return data;
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData();

        setExerciseData(data.exercises);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataFromApi();
  }, [fetchData, setExerciseData]);

  const contextValue: ExerciseContextProps = {
    filteredData,
    setFilteredData,
    fetchData,
    exerciseData,
    setExerciseData,
    selectedExercise: selected,
    setSelectedExercise: setSelected,
  };

  return (
    <ExerciseContext.Provider value={contextValue}>
      {children}
    </ExerciseContext.Provider>
  );
};
