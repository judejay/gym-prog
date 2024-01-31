import "./App.css";
import { ExerciseContextProvider } from "./ducks/exerciseContextProvider";
import Layout from "./components/Layout/Layout";
import SideMenu from "./components/SideMenu/SideMenu";
import cx from "clsx";
import {
  Container,
  MantineProvider,
  createTheme,
  localStorageColorSchemeManager,
} from "@mantine/core";
import { RoutineContext } from "./state/Routine_Context";
import { useReducer } from "react";
import { initialState, routineReducer } from "./ducks/routine_reducer";

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
  const [state, dispatch] = useReducer(routineReducer, initialState);
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
            <Layout children={<SideMenu />} />
          </Container>
        </MantineProvider>
      </RoutineContext.Provider>
    </ExerciseContextProvider>
  );
}

export default App;
