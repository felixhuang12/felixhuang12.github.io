import React from 'react';
import './App.css';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
import "@fontsource/playfair-display"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ChakraProvider>
    )
}

export default App;
