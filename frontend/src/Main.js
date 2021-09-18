import React from 'react';
import { ThemeProvider, StyleReset } from 'atomize';
import App from './App';
const theme = {
  colors: {
    fontFamily: {
      main: "Libre Baskerville, serif",
    },
    primary: '#f6e0c3',
    accent: '#ef837f',
  },grid: {
    colCount: 16,
    gutterWidth: 0
  }
};
export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  )}