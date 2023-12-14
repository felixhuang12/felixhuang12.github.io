import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const MenuLink = ({ text, link }: { text: string, link: string }) => {
    return (
        <Text display={'block'} maxWidth={'100%'} textAlign={'center'} m={2}
            fontSize={{ base: 'xl' }}>
            <Link to={link}>{text}</Link>
        </Text>
    )
}

const Navbar = () => {
    return (
        <Box display={{ md: 'flex' }} maxHeight={'10%'} maxWidth={'100%'} alignItems={'center'} justifyContent={'flex-end'} m={6}>
            <Stack direction={{ base: 'column', md: 'row' }}>
                <MenuLink text="About" link="/" />
                <MenuLink text="Experience" link="/experience" />
                <MenuLink text="Projects" link="projects" />
                <MenuLink text="Contact" link="contact" />
            </Stack>
        </Box>
    )
}

export default Navbar
