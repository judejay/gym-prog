import { useState } from "react";
import "./Exercises.css";
import "@mantinex/mantine-logo/styles.css";
import "@mantine/core/styles.css";
import { useExerciseContext } from "../../hooks/useExerciseContext";
import SelectGroup from "../SelectGroup/SelectGroup";
import { Container } from "@mantine/core";
import { Link } from "react-router-dom";

function Exercises() {
  const [errorMessage] = useState<string>();
  const [activeLink, setActiveLink] = useState("Settings");
  const { exerciseData, setSelectedExercise, filteredData } =
    useExerciseContext();

  function setActiveExercise(name: string) {
    setActiveLink(name);
    const exercise = exercises.find((exercise) => exercise.name === name);
    if (exercise) {
      setSelectedExercise(exercise);
    }
  }

  const exercises = filteredData.length === 0 ? exerciseData : filteredData;
  return (
    <>
      <SelectGroup />

      <Container className="container" size="xl" px="md">
        <div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
        {exercises &&
          exercises.map((link) => (
            <Link
              to="/exercise"
              onClick={() => setActiveExercise(link.name)}
              className="link"
              data-active={activeLink === link.name || undefined}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
      </Container>
    </>
  );
}

export default Exercises;
