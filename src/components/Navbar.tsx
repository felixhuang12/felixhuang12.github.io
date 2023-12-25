import { Box, Stack, Text } from "@chakra-ui/react"

const MenuLink = ({ text, anchorId }: { text: string, anchorId: string }) => {
    return (
        <Text display={'block'}
            maxWidth={'100%'}
            textAlign={'center'}
            m={2}
            fontSize={{ base: 'xl' }}
            fontWeight={'bold'}
            onClick={() => {
                if (anchorId === "top") {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                } else {
                    const anchor = document.getElementById(anchorId)
                    anchor?.scrollIntoView({ behavior: 'smooth' })
                }
            }}
            _hover={{
                textDecoration: "underline",
                cursor: "pointer"
            }}
            >
            {text}
        </Text>
    )
}

const Navbar = () => {
    return (
        <Box display={{ md: 'flex' }}
            maxHeight={'10%'}
            width={'100vw'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            alignSelf={{ base: 'center', md: 'flex-end' }}
            p={4}
            overflow={'hidden'}
            position={'sticky'}
            top={0}
            zIndex={'1'}
            bgColor={'#FBF9F2'}
            opacity={0.8}
            backdropFilter="saturate(180%) blur(5px)"
        >
            <Stack direction={{ base: 'column', md: 'row' }}>
                <MenuLink text="About" anchorId="top" />
                <MenuLink text="Experience" anchorId="experience" />
                <MenuLink text="Projects" anchorId="projects" />
                <MenuLink text="Contact" anchorId="contact-me" />
            </Stack>
        </Box>
    )
}

export default Navbar
