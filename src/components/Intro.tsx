import { Heading, Image, Link, Stack, Text } from "@chakra-ui/react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Blurb = () => {
    return (
        <Stack mx={16} maxWidth={{ base: '100%', lg: '40%' }}>
            <Heading fontSize={48}>
                Hey! I'm Felix.
            </Heading>
            <Stack spacing={4}>
                <Text>
                    Software Engineer @ AWS AppStream 2.0
                </Text>
                <Text>
                    Exploring and learning. One day at a time.
                </Text>
            </Stack>
        </Stack>
    )
}

const Intro = () => {
    return (
        <Stack direction={{ base: 'column', lg: 'row' }} justifyContent={'center'} alignItems={'center'}>
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Image src="/assets/me.png"
                    objectFit={'cover'}
                    borderRadius='full'
                    boxSize={{ base: '300px', lg: '400px' }}
                    mx={6}
                    mb={6}
                    filter={"grayscale(100%)"}
                    transitionDuration='0.4s'
                    _hover={{
                        filter: "none"
                    }}
                />
                <Stack direction={'row'} mb={6} spacing={3}>
                    <Link href="https://www.linkedin.com/in/felix-huang-1b9946190" isExternal={true}>
                        <Stack direction={'row'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            bgImage={"linear(to-r, #FFEF8D 50%, transparent 50%)"}
                            bgSize="0 100%"
                            bgRepeat={"no-repeat"}
                            transitionDuration='0.4s'
                            _hover={{
                                bgSize: "200% 100%"
                            }}
                        >
                            <FaLinkedin size={32} />
                            <Text>
                                LinkedIn
                            </Text>
                        </Stack>
                    </Link>
                    <Link href="https://github.com/felixhuang12" isExternal={true}>
                        <Stack direction={'row'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            bgImage={"linear(to-r, #FFEF8D 50%, transparent 50%)"}
                            bgSize="0 100%"
                            bgRepeat={"no-repeat"}
                            transitionDuration='0.4s'
                            _hover={{
                                bgSize: "200% 100%"
                            }}
                        >
                            <FaGithub size={32} />
                            <Text>
                                GitHub
                            </Text>
                        </Stack>
                    </Link>
                </Stack>
            </Stack >
            <Blurb />
        </Stack >
    )
}

export default Intro