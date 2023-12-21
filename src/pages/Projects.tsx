import { Card, CardBody, Heading, Image, Stack, Text, Box, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { openInNewTab } from "../utils/commonUtils"
import { LinkIcon } from "@chakra-ui/icons"

interface ProjectCardProps {
    imageSrc?: string,
    imageAlt?: string,
    title: string,
    description: string,
    tools: string[],
    ghLink?: string
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
            transition={'transform 0.3s ease-in-out'}
            _hover={{ transform: "scale(1.02)", bgColor: '#FFFAF0', cursor: props.ghLink ? 'pointer' : 'default' }}
            onClick={() => {
                if (props.ghLink && props.ghLink.length > 0) {
                    openInNewTab(props.ghLink)
                }
            }}
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
                    {props.ghLink && <Box display={'inline-block'}>
                        <Tag size={{ base: 'xs', sm: 'sm', md: 'md' }}
                            mt={4}
                            p={2}
                            colorScheme={'gray'}
                            fontWeight={'medium'}
                            _hover={{bgColor: '#E2E8F0'}}
                            onClick={() => {
                                if (props.ghLink && props.ghLink.length > 0) {
                                    openInNewTab(props.ghLink)
                                }
                            }}
                        >
                            <TagLeftIcon as={LinkIcon} />
                            <TagLabel>GitHub</TagLabel>
                        </Tag>
                    </Box>}
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
                ghLink="https://github.com/felixhuang12/nba-comps"
            />
            <ProjectCard
                imageSrc="/assets/monkeypox_dashboard.png"
                imageAlt="Monkeypox dashboard"
                title="Monkeypox Dashboard"
                description="A dashboard for visualizing the 2022 U.S. Monkeypox outbreak. Interact with color-coded map, time-series charts, and statistics tables providing data on a national and statewide level. View predictions for prevelance rate, incidence rate, case-fatality ratio, and cases for the future."
                tools={['React.js', 'Chakra UI', 'Flask', 'PostgreSQL', 'AWS']}
                ghLink="https://github.com/sakinkirti/monkeypox-dashboard"
            />
            <ProjectCard
                imageSrc="/assets/ncbi_gene_mapper.png"
                imageAlt="NCBI gene scraping"
                title="NCBI Gene Mapper"
                description="A scripting tool to convert NCBI sheep LOC genes to human analog genes."
                tools={['Python', 'pandas']}
                ghLink="https://github.com/felixhuang12/ncbi-gene-scraping"
            />
        </Stack>
    )
}

export default Projects
