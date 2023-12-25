import { Stack, Text, HStack, Tag, Box, Heading } from "@chakra-ui/react"

interface ExperienceBlockProps {
    startAndEndDateText: string,
    jobTitle: string,
    company: string,
    description: string,
    tools: string[]
}

const ExperienceBlock = (props: ExperienceBlockProps) => {
    return (
        <HStack justifyContent={'center'}
            alignItems={'flex-start'}
            spacing={8}
            fontSize={{ base: 'xs', sm: 'md', md: 'l' }}
            filter={"grayscale(100%)"}
            _hover={{
                filter: "none"
            }}
        >
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
                <Box display={'inline-block'} mt={2}>
                    {props.tools.map((tool) => (
                        <Tag size={{ base: 'xs', sm: 'sm', md: 'md' }}
                            key={tool}
                            mr={4}
                            mt={2}
                            p={2}
                            bgColor="#EFDECD"
                            textColor={'#4B3621'}
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
        <Stack maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Heading id="experience" fontSize={44} mb={4}>Experience</Heading>
            <Stack display={'flex'} maxWidth={'800px'} justifyContent={'center'} spacing={12}>
                <ExperienceBlock
                    startAndEndDateText={"May — Aug 2023"}
                    jobTitle={"Software Development Engineer Intern"}
                    company={"Amazon Web Services"}
                    description={"Designed and developed a load test monitoring dashboard for Amazon Connect. \
                    Developed a data pipeline to stream millions of daily real-time event records from Connect instances and load tests to batch process the data. \
                    Tracked and displayed the metrics outputted from load generated (agents, calls, chats, tasks, etc.) and outcome metrics."}
                    tools={["Java", "TypeScript", "AWS CDK", "Amazon OpenSearch Service", "Amazon Kinesis Data Streams", "AWS Lambda"]}
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
