import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />

    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
