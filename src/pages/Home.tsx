import { Heading, Image, Link, Stack, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaStrava } from "react-icons/fa"

const Blurb = () => {
    return (
        <Stack mb={16} mx={16} maxWidth={{ base: '100%', lg: '40%' }}>
            <Heading>
                Hey! I'm Felix.
            </Heading>
            <Stack spacing={4}>
                <Text>
                    I'm currently a fourth-year undergraduate student at Case Western Reserve University where I'm studying computer science with a concentration in software engineering.
                </Text>
                <Text>
                    I'm an aspiring software engineer that seeks to contribute to efforts in building solutions to real-world problems that can help make people's
                    lives more convenient and enjoyable. There are so many ways to make a difference in people's lives, but, for me, technology and software are
                    some of the more comfortable mediums that I feel I can utilize to help others.
                    I love building and problem-solving, and I'm always curious and learning how to better both myself and others through what I create or contribute to.
                </Text>
                <Text>
                    In my free time, I also love to run, play any sport really (basketball is probably my main thing, but lowkey been kinda getting into volleyball), bake,
                    and take photos.
                </Text>
                <Text>
                    What I'm up to right now: laughing at TikToks with my friends, baking bread, late-night talks, and marathon training.
                </Text>
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
                    <Stack direction={'row'}>
                        <Link href="https://www.linkedin.com/in/felix-huang-1b9946190" isExternal={true}>
                            <FaLinkedin size={32} />
                        </Link>
                        <Link href="https://github.com/felixhuang12" isExternal={true}>
                            <FaGithub size={32} />
                        </Link>
                        <Link href="https://www.strava.com/athletes/121674283" isExternal={true}>
                            <FaStrava size={32} />
                        </Link>
                    </Stack>
                </Stack>
                <Blurb />
            </Stack>
        </Stack>
    )
}

export default Home
