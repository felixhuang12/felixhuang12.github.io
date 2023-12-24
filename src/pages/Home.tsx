import { Heading, Image, Link, Stack, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaStrava } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaJava } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaNode } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import { SiFlask } from "react-icons/si"
import { FaDocker } from "react-icons/fa"
import { FaAws } from "react-icons/fa"
import { FaGitAlt } from "react-icons/fa"

const Blurb = () => {
    return (
        <Stack mb={8} mx={16} maxWidth={{ base: '100%', lg: '40%' }}>
            <Heading>
                Hey! I'm Felix.
            </Heading>
            <Stack spacing={4}>
                <Text>
                    I'm currently a fourth-year undergraduate student at Case Western Reserve University where I'm studying computer science with a concentration in software engineering.
                </Text>
                <Text>
                    I'm an aspiring software engineer that seeks to contribute to efforts in building solutions to real-world problems that can help make people's
                    lives more convenient and enjoyable.
                    I love building and problem-solving, and I'm always curious and learning how to better both myself and others through what I create or contribute to.
                </Text>
            </Stack>
        </Stack>
    )
}

const Skills = () => {
    return (
        <Stack mb={16} mx={16} maxWidth={'100%'} justifyContent={'center'} alignItems={'center'} spacing={4}>
            <Heading>Skills</Heading>
            <Text fontSize={24}>Languages</Text>
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} mx={16} spacing={4}>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <SiTypescript size={32} />
                    <Text>
                        TypeScript
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <SiJavascript size={32} />
                    <Text>
                        JavaScript
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaJava size={32} />
                    <Text>
                        Java
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaPython size={32} />
                    <Text>
                        Python
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaDatabase size={32} />
                    <Text>
                        SQL
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaHtml5 size={32} />
                    <Text>
                        HTML
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaCss3Alt size={32} />
                    <Text>
                        CSS
                    </Text>
                </Stack>
            </Stack>
            <Text fontSize={24} mt={4}>Tools</Text>
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} mx={16} spacing={4}>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaReact size={32} />
                    <Text>
                        React.js
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaNode size={32} />
                    <Text>
                        Node.js
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <SiExpress size={32} />
                    <Text>
                        Express.js
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <SiFlask size={32} />
                    <Text>
                        Flask
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaDocker size={32} />
                    <Text>
                        Docker
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaAws size={32} />
                    <Text>
                        AWS
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaAws size={32} />
                    <Text>
                        AWS CDK
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <BiLogoPostgresql size={32} />
                    <Text>
                        PostgreSQL
                    </Text>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <FaGitAlt size={32} />
                    <Text>
                        Git
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
}

const Home = () => {
    return (
        <Stack maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'}>
            <Navbar />
            <Stack direction={{ base: 'column', lg: 'row' }} justifyContent={'center'} alignItems={'center'}>
                <Stack justifyContent={'center'} alignItems={'center'}>
                    <Image src="/assets/profile.png" borderRadius='full' boxSize={{ base: '300px', lg: '400px' }} mx={6} mb={6} />
                    <Stack direction={'row'} mb={6} spacing={3}>
                        <Link href="https://www.linkedin.com/in/felix-huang-1b9946190" isExternal={true}>
                            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                                <FaLinkedin size={32} />
                                <Text>
                                    LinkedIn
                                </Text>
                            </Stack>
                        </Link>
                        <Link href="https://github.com/felixhuang12" isExternal={true}>
                            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                                <FaGithub size={32} />
                                <Text>
                                    GitHub
                                </Text>
                            </Stack>
                        </Link>
                        <Link href="https://www.strava.com/athletes/121674283" isExternal={true}>
                            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                                <FaStrava size={32} />
                                <Text>
                                    Strava
                                </Text>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>
                <Blurb />
            </Stack>
            <Skills />
        </Stack>
    )
}

export default Home
