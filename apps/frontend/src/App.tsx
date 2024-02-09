import "./App.css";
import { ExerciseContextProvider } from "./state/exerciseContextProvider";

import cx from "clsx";
import {
  Container,
  MantineProvider,
  createTheme,
  localStorageColorSchemeManager,
} from "@mantine/core";
import { RoutineContext } from "./state/Routine_Context";
import { useReducer } from "react";
import { initialState, RoutineReducer } from "./state/routine_reducer";
import Router from "./components/Router/Router";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ ["responsiveContainer"]: size === "responsive" }),
      }),
    }),
  },
});
function App() {
  const [state, dispatch] = useReducer(RoutineReducer, initialState);
  return (
    <ExerciseContextProvider>
      <RoutineContext.Provider value={{ state, dispatch }}>
        <MantineProvider
          theme={theme}
          defaultColorScheme="auto"
          colorSchemeManager={localStorageColorSchemeManager({
            key: "mantine-ui-color-scheme",
          })}
        >
          <Container size="responsive" bg="var(--mantine-color-blue-light)">
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Container>
        </MantineProvider>
      </RoutineContext.Provider>
    </ExerciseContextProvider>
  );
}

export default App;
