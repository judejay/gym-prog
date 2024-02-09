import { useState } from "react";
import "./Menu.css";
import "@mantinex/mantine-logo/styles.css";
import "@mantine/core/styles.css";
import { useExerciseContext } from "../../hooks/useExerciseContext";
import { Container, NavLink } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";

function Menu() {
  const [errorMessage] = useState<string>();

  useExerciseContext();

  return (
    <nav className="navbar">
      <div className="aside">
        <div className="logo"></div>

        <Container className="container" size="xl" px="md">
          <div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>

          <NavLink
            href="/exercises"
            label="return to exercises"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
        </Container>
      </div>
    </nav>
  );
}

export default Menu;
