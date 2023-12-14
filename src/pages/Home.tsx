import { HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Blurb = () => {
    return (
        <Stack ml={16} maxWidth={'40%'}>
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
                    Enough about tech though--I also love to run, play any sport really (basketball is probably my main thing, but lowkey been kinda getting into volleyball), bake, 
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
        <Stack maxHeight={'100%'} maxWidth={'100%'} display={'flex'} justifyContent={'center'}>
            <Navbar />
            <HStack display={'flex'} justifyContent={'flex-start'}>
                <Blurb />
            </HStack>
        </Stack>
    )
}

export default Home
