import { Heading, Stack, Text } from "@chakra-ui/react"
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

const Skills = () => {
    return (
        <Stack mx={16} maxWidth={'100%'} justifyContent={'center'} alignItems={'center'} spacing={4}>
            <Heading id="skills" fontSize={44}>Skills</Heading>
            <Text fontSize={24}>Languages</Text>
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} spacing={8}>
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
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} spacing={8}>
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

export default Skills