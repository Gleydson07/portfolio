import React from 'react'
import { PortFolio } from './components/Portfolio/Index';
import { Home } from "./Home";
import { Header } from './components/Header';

import { ChakraProvider } from '@chakra-ui/react';

import {theme} from './styles/theme';
import Particles from "react-tsparticles";
import 'animate.css';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      {/* <Home/> */}
      <PortFolio />
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
    </ChakraProvider>
  );
}

export default App;
