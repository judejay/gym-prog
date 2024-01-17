import "./App.css";
import { MyContextProvider } from "./hooks/useContext";
import Layout from "./components/Layout/Layout";
import SideMenu from "./components/SideMenu/SideMenu";
//import Router from "./components/router/Router";
function App() {
    return (
        <MyContextProvider>
            <Layout children={<SideMenu />} />
        </MyContextProvider>
    );
}

export default App;
