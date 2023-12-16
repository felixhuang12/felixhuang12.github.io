import { Stack, Text, HStack, Tag, Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

interface ExperienceBlockProps {
    startAndEndDateText: string,
    jobTitle: string,
    company: string,
    description: string,
    tools: string[]
}

const ExperienceBlock = (props: ExperienceBlockProps) => {
    return (
        <HStack display={'flex'} justifyContent={'center'} alignItems={'flex-start'} spacing={8}
            fontSize={{ base: 'xs', sm: 'md', md: 'l' }}>
            <Text fontWeight={'bold'} color={'grey'} minWidth={'20%'}>
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
                <Box display={'inline-block'}>
                    {props.tools.map((tool) => (
                        <Tag size={{ base: 'xs', sm: 'sm', md: 'md' }}
                            key={tool}
                            mt={4}
                            mr={4}
                            p={2}
                            colorScheme={'orange'}
                            fontWeight={'medium'}
                        >
                            {tool}
                        </Tag>
                    ))}
                </Box>
            </Stack>
        </HStack>
    )
}

const Experience = () => {
    return (
        <Stack maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'}>
            <Navbar />
            <Stack display={'flex'} maxWidth={'800px'} alignSelf={'center'} justifyContent={'center'} mx={8} mb={16} spacing={12}>
                <ExperienceBlock
                    startAndEndDateText={"May — Aug 2023"}
                    jobTitle={"Software Development Engineer Intern"}
                    company={"Amazon Web Services"}
                    description={"Designed and developed a load test monitoring dashboard for Amazon Connect. \
                    Tracked and displayed the metrics outputted from load generated (agents, calls, chats, tasks, etc.) and outcome metrics."}
                    tools={["AWS CDK", "AWS", "Java", "TypeScript"]}
                />
                <ExperienceBlock
                    startAndEndDateText={"Jun — Aug 2022"}
                    jobTitle={"iOS Engineer Intern"}
                    company={"Fidelity Investments"}
                    description={"Worked with the Access and Accessibility team to engineer and improve accessiblity features for Fidelity's mobile platform \
                    and to support cryptocurrency offerings."}
                    tools={["Swift", "SwiftUI", "Evinced SDK"]}
                />
                <ExperienceBlock
                    startAndEndDateText={"Sep 2020 — May 2022"}
                    jobTitle={"Undergraduate Research Assistant"}
                    company={"Case Western Reserve University School of Medicine"}
                    description={"Conducted single-cell RNA-seq analysis to annotate transcription factor networks and expression differences among gene markers \
                    in cystic fibrosis-related epithelial cell lines. "}
                    tools={["R", "Python", "Seurat"]}
                />
            </Stack>
        </Stack>
    )
}

export default Experience
