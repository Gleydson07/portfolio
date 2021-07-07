import React from 'react'
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Header } from './components/Header';

import { ChakraProvider } from '@chakra-ui/react';

import {theme} from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Home/>
      <About/>
    </ChakraProvider>
  );
}

export default App;
