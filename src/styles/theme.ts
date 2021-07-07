// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  fonts: {    
    fontFamily: 'Roboto, sans-serif',
  },

  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "gray.200",
      }
    }
  }
})