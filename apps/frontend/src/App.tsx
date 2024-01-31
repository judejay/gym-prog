import "./App.css";
import { ExerciseContextProvider } from "./hooks/useContext";
import Layout from "./components/Layout/Layout";
import SideMenu from "./components/SideMenu/SideMenu";
import cx from "clsx";
import {
  Container,
  MantineProvider,
  createTheme,
  localStorageColorSchemeManager,
} from "@mantine/core";

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
  return (
    <ExerciseContextProvider>
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
    </ExerciseContextProvider>
  );
}

export default App;
