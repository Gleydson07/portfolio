// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  fonts: {    
    fontFamily: 'Roboto, sans-serif',
  },

  colors: {
    dark: {
        900: "171923",
        50: "#17192340"
    },

    light: {
        900: "f2f2f2",
        50: "#d7d7d740"
    },
},

  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.200",
      }
    }
  }
})