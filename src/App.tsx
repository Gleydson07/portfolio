import React from 'react'
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Header } from './components/Header';

import { ChakraProvider } from '@chakra-ui/react';

import {theme} from './styles/theme';
import Particles from "react-tsparticles";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Particles
        options={{
          backgroundMode: {
            enable: true,
            zIndex: -1
          },
          background: {
            color: "#000"
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#B794F4" },
            move: {
              enable: true,
              speed: 0.5,
            },
            opacity: {
              random: true,
              value: 0.5
            },
            shape: {
              type: "triangle"
            },
            size: {
              random: true,
              value: 2
            }
          },
          detectRetina: true
        }}
      />
      <Home/>
      <About/>
    </ChakraProvider>
  );
}

export default App;
