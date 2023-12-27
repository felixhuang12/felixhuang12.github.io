import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Stack, Text, Menu, MenuButton, MenuList, MenuItem, Show, Hide, IconButton } from "@chakra-ui/react"

interface MenuProps {
    text: string,
    anchorId: string
}

const menuItems: MenuProps[] = [
    {
        text: "About",
        anchorId: "top"
    },
    {
        text: "Experience",
        anchorId: "experience"
    },
    {
        text: "Projects",
        anchorId: "projects"
    },
    {
        text: "Contact",
        anchorId: "contact-me"
    }
]

const onMenuItemClick = (anchorId: string) => {
    if (anchorId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
        const anchor = document.getElementById(anchorId)
        anchor?.scrollIntoView({ behavior: 'smooth' })
    }
}

const MainMenu = () => {
    return (
        <>
            <Hide below="md">
                <Stack direction={'row'}>
                    {menuItems.map((menuItem) => (
                        <NavbarMenuLink text={menuItem.text} anchorId={menuItem.anchorId} />
                    ))}
                </Stack>
            </Hide>
            <Show below="md">
                <Menu isLazy>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        float={'right'}
                    />
                    <MenuList>
                        {menuItems.map((menuItem) => (
                            <HamburgerMenuItem text={menuItem.text} anchorId={menuItem.anchorId} />
                        ))}
                    </MenuList>
                </Menu>
            </Show>
        </>
    )
}

const HamburgerMenuItem = ({ text, anchorId }: MenuProps) => {
    return (
        <MenuItem onClick={() => onMenuItemClick(anchorId)}>
            {text}
        </MenuItem>
    )
}

const NavbarMenuLink = ({ text, anchorId }: MenuProps) => {
    return (
        <Text display={'block'}
            maxWidth={'100%'}
            textAlign={'center'}
            m={2}
            fontSize={'xl'}
            fontWeight={'bold'}
            onClick={() => onMenuItemClick(anchorId)}
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
            alignSelf={'flex-end'}
            p={4}
            overflow={'visible'}
            position={'sticky'}
            top={0}
            zIndex={'1'}
            bgColor={'#FBF9F2'}
            opacity={0.9}
            backdropFilter="saturate(180%) blur(5px)"
        >
            <MainMenu />
        </Box>
    )
}

export default Navbar
