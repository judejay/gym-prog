import ReactDOM from 'react-dom/client'
import './index.css'
import { Container, MantineProvider, createTheme } from '@mantine/core';
import App from './App.tsx';
import { StrictMode } from 'react';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <StrictMode>
      <App /></StrictMode>
  </MantineProvider>
)
