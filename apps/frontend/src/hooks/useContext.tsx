import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Exercise } from "../types/types";

export interface ResponseData {
  exercises: Exercise[];
}
interface Props {
  children?: React.ReactNode;
}

interface ContextProps {
  fetchData: () => Promise<ResponseData>;
  data: Exercise[];
  setData: React.Dispatch<React.SetStateAction<Exercise[]>>;
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
  const [data, setData] = useState<Exercise[]>([]);

  const fetchData = useCallback(async (): Promise<ResponseData> => {
    const response = await fetch(serverUrl);
    const data = await response.json();
    return data.exercises;
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData();

        setData(data.exercises);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataFromApi();
  }, [fetchData, setData]);

  const contextValue: ContextProps = {
    fetchData,
    data,
    setData,
  };

  return (
    <ExerciseContext.Provider value={contextValue}>
      {children}
    </ExerciseContext.Provider>
  );
};
