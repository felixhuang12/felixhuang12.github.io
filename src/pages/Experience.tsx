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
            <Stack display={'flex'} maxWidth={'800px'} alignSelf={'center'} justifyContent={'center'} m={6} spacing={12}>
                <ExperienceBlock
                    startAndEndDateText={"May — Aug 2023"}
                    jobTitle={"Software Development Engineer Intern"}
                    company={"Amazon Web Services"}
                    description={"Designed and developed a load test monitoring dashboard for Amazon Connect. \
                    Tracked and displayed the metrics outputted from load generated (agents, calls, chats, tasks, etc.) and outcome metrics."}
                />
                <ExperienceBlock
                    startAndEndDateText={"Jun — Aug 2022"}
                    jobTitle={"iOS Engineer Intern"}
                    company={"Fidelity Investments"}
                    description={"Worked with the Access and Accessibility team to engineer and improve accessiblity features for Fidelity's mobile platform \
                    and to support cryptocurrency offerings."}
                />
                <ExperienceBlock
                    startAndEndDateText={"Sep 2020 — May 2022"}
                    jobTitle={"Undergraduate Research Assistant"}
                    company={"Case Western Reserve University School of Medicine"}
                    description={"Conducted single-cell RNA-seq analysis to annotate transcription factor networks and expression differences among gene markers \
                    in cystic fibrosis-related epithelial cell lines. "}
                />
            </Stack>
        </Stack>
    )
}

export default Experience
