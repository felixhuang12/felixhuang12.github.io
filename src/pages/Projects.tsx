import { Card, CardBody, Heading, Image, Stack, Text, Box, Tag, AspectRatio } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

interface ProjectCardProps {
    imageSrc?: string,
    imageAlt?: string,
    title: string,
    description: string
    tools: string[]
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card
            direction={{ base: 'column', md: 'row' }}
            overflow={'hidden'}
            variant={'elevated'}
            boxShadow={"xl"}
            p={4}
            m={8}
        >
            <Image
                src={props.imageSrc}
                borderRadius='lg'
                alt={props.imageAlt}
                maxWidth={{ base: '100%', md: '40%' }}
                objectFit={'contain'}
                alignSelf={{ base: 'center', md: 'flex-start' }}
            />
            <CardBody ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }} p={1}>
                <Stack>
                    <Heading>
                        {props.title}
                    </Heading>
                    <Text>
                        {props.description}
                    </Text>
                    <Box display={'inline-block'}>
                        {props.tools.map((tool) => (
                            <Tag size={{ base: 'xs', sm: 'sm', md: 'md' }} key={tool} mt={4} mr={4} p={2} colorScheme={'teal'}>{tool}</Tag>
                        ))}
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

const Projects = () => {
    return (
        <Stack maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'}>
            <Navbar />
            <ProjectCard
                imageSrc="/assets/nba_comps_dashboard.png"
                imageAlt="NBA Comparisons dashboard"
                title="NBA Comparisons"
                description="NBA Comparisons NBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA Comparisons \
                NBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA Comparisons\
                NBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA Comparisons\
                NBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA Comparisons\
                NBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA Comparisons\
                NBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA Comparisons\
                NBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA Comparisons\
                NBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA ComparisonsNBA Comparisons"
                tools={['breh']}
            />
            <ProjectCard
                imageSrc="/assets/monkeypox_dashboard.png"
                imageAlt="Monkeypox dashboard"
                title="Monkeypox Dashboard"
                description="def"
                tools={['breh']}
            />
        </Stack>
    )
}

export default Projects
