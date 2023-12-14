import { Flex, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const MenuLink = ({ text, link }: { text: string, link: string }) => {
    return (
        <Text maxWidth={'100%'} textAlign={'center'} m={6}
            fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}>
            <Link to={link}>{text}</Link>
        </Text>
    )
}

const Navbar = () => {
    return (
        <Flex height={20} maxWidth={'100%'} alignItems={'center'} justifyContent={'flex-end'} mt={6} mr={6}>
            <HStack
                display={'flex'}
                flexBasis={{ base: "100%", md: "auto" }}
                maxWidth={'100%'}
            >
                <MenuLink text="About" link="/" />
                <MenuLink text="Experience" link="/experience" />
                <MenuLink text="Projects" link="projects" />
                <MenuLink text="Contact" link="contact" />
            </HStack>
        </Flex>
    )
}

export default Navbar
