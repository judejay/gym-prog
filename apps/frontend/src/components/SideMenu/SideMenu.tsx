import { useState } from "react";
import "./SideMenu.css";
import "@mantinex/mantine-logo/styles.css";
import "@mantine/core/styles.css";
import { useExerciseContext } from "../../hooks/useExerciseContext";
import SelectGroup from "../SelectGroup/SelectGroup";
import { Container } from "@mantine/core";

function SideMenu() {
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
    <nav className="navbar">
      <div className="aside">
        <div className="logo">
          <SelectGroup />
        </div>

        <Container className="container" size="xl" px="md">
          <div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>

          {exercises &&
            exercises.map((link) => (
              <a
                className="link"
                data-active={activeLink === link.name || undefined}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setActiveExercise(link.name);
                }}
                key={link.name}
              >
                {link.name}
              </a>
            ))}
        </Container>
      </div>
    </nav>
  );
}

export default SideMenu;