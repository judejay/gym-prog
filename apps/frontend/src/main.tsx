import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import Layout from './components/Layout/Layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Layout children={<App />} />
    </MantineProvider>
  </React.StrictMode>,
)
