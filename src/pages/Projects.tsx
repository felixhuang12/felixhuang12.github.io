import { Card, CardBody, Heading, Image, Stack, Text, Box, Tag } from "@chakra-ui/react"
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
                description="Web app for comparing NBA players on statistics for the 2022-2023 regular season. Add up to 3 players to compare toggleable counting and percentage statistics such as minutes per game, points per game, assists per game, rebounds per game, two-point field goal percentage, steals per game, and more. View statistics
                for the entire season and the past 10 games."
                tools={['TypeScript', 'React.js', 'Material UI', 'Flask', 'MongoDB', 'Docker']}
            />
            <ProjectCard
                imageSrc="/assets/monkeypox_dashboard.png"
                imageAlt="Monkeypox dashboard"
                title="Monkeypox Dashboard"
                description="A dashboard for visualizing the 2022 U.S. Monkeypox outbreak. Interact with color-coded map, time-series charts, and statistics tables providing data on a national and statewide level. View predictions for prevelance rate, incidence rate, case-fatality ratio, and cases for the future."
                tools={['React.js', 'Chakra UI', 'Flask', 'PostgreSQL', 'AWS']}
            />
        </Stack>
    )
}

export default Projects
