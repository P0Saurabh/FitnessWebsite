import * as React from 'react';
import {  ThemeProvider, createTheme } from '@mui/material';
import ChartsOverviewDemo from './Card';  // Make sure the path to your component is correct

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>hi</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <ChartsOverviewDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;