import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bgColor: '#FAF9F6'
            }
        }
    },
    fonts: {
        heading: `'Playfair Display', sans-serif`,
        body: `'Playfair Display', sans-serif`,
    },
})

export default theme
