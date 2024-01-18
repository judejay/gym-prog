import "./App.css";
import { MyContextProvider } from "./hooks/useContext";
import Layout from "./components/Layout/Layout";
import SideMenu from "./components/SideMenu/SideMenu";
//import Router from "./components/router/Router";
import cx from 'clsx';
import { Container, MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
    components: {
        Container: Container.extend({
            classNames: (_, { size }) => ({
                root: cx({ ["responsiveContainer"]: size === 'responsive' }),
            }),
        }),
    },
});
function App() {
    return (
        <MyContextProvider >
            <MantineProvider theme={theme}>
                <Container size="responsive" bg="var(--mantine-color-blue-light)">
                    <Layout children={<SideMenu />} /></Container>
            </MantineProvider>
        </MyContextProvider>
    );
}

export default App;
