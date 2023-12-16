import React from 'react';
import './App.css';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
import "@fontsource/playfair-display"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Router>
        </ChakraProvider>
    )
}

export default App;
