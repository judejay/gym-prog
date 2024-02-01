import ReactDOM from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";
import { StrictMode } from "react";
import "@mantine/carousel/styles.css";
//import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
