import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme'
import "@fontsource/playfair-display"
import Home from './components/Home'

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Home />
        </ChakraProvider>
    )
}

export default App
