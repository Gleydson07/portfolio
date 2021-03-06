import { Home } from "./pages/Home";
import { About } from './pages/About';
import { PortFolio } from './pages/Portfolio';
import { NavigateProvider } from "./hooks/useNavigate";
import { Header } from './components/Header/Index';

import { ChakraProvider } from '@chakra-ui/react';

import {theme} from './styles/theme';
import Particles from "react-tsparticles";
import 'animate.css';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavigateProvider>
        <Header/>
        <Home/>
        <About />
        <PortFolio />
      </NavigateProvider>
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
