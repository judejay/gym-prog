import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Exercise } from "../types/types";

export interface ResponseData {
  exercises: Exercise[];
}
interface Props {
  children?: React.ReactNode;
}

interface ContextProps {
  selectedExercise: Exercise | null;
  fetchData: () => Promise<ResponseData>;
  exerciseData: Exercise[];
  setExerciseData: React.Dispatch<React.SetStateAction<Exercise[]>>;
  setSelectedExercise: React.Dispatch<React.SetStateAction<Exercise | null>>;
}
export const ExerciseContext = createContext<ContextProps | undefined>(
  undefined
);

const serverUrl = "http://localhost:3000/api/exercises";


export const useMyContext = (): ContextProps => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

export const MyContextProvider: React.FC<Props> = ({ children }) => {
  const [exerciseData, setExerciseData] = useState<Exercise[]>([]);
  const [selected, setSelected] = useState<Exercise | null>(null);
  const fetchData = useCallback(async (): Promise<ResponseData> => {
    const response = await fetch(serverUrl);
    const data = await response.json();
    console.log("data from context", data);
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

  const contextValue: ContextProps = {
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
