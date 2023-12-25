import { Stack } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import Intro from "./Intro"
import Skills from "./Skills"

const Home = () => {
    return (
        <Stack maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'}>
            <Navbar />
            <Intro />
            <Stack maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'} m={8} spacing={16}>
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </Stack>
        </Stack>
    )
}

export default Home
