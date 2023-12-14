import { Stack, Text, HStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

interface ExperienceBlockProps {
    startAndEndDateText: string,
    jobTitle: string,
    company: string,
    description: string
}

const ExperienceBlock = (props: ExperienceBlockProps) => {
    return (
        <HStack display={'flex'} justifyContent={'center'} alignItems={'flex-start'} spacing={8}
        fontSize={{ base: 'xs', sm: 'md', md: 'l' }}>
            <Text color={'grey'} minWidth={'20%'}>
                {props.startAndEndDateText}
            </Text>
            <Stack display={'flex'} justifyContent={'center'}>
                <Text fontWeight={'extrabold'}>
                    {props.jobTitle}
                </Text>
                <Text fontWeight={'extrabold'} color={'grey'}>
                    @ {props.company}
                </Text>
                <Text mt={3}>
                    {props.description}
                </Text>
            </Stack>
        </HStack>
    )
}

const Experience = () => {
    return (
        <Stack display={'flex'} maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'}>
            <Navbar />
            <Stack display={'flex'} maxWidth={'800px'} alignSelf={'center'} justifyContent={'center'} m={6}>
                <ExperienceBlock
                    startAndEndDateText={"May — Aug 2023"}
                    jobTitle={"Software Development Engineer Intern"}
                    company={"Amazon Web Services"}
                    description={"Designed and developed load test monitoring dashboard for Amazon Connect. Tracked the metrics outputted from load generated (agents, calls, chats, tasks, etc.) and outcome metrics."}
                />
            </Stack>
        </Stack>
    )
}

export default Experience
