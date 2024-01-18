import ReactDOM from 'react-dom/client'
import './index.css'
import { Container, MantineProvider, createTheme } from '@mantine/core';
import App from './App.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <App />
  </MantineProvider>
)
