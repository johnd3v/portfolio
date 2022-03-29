import { Container,Heading,SimpleGrid,Divider} from '@chakra-ui/react'
import Section from '../components/section'

import { ProjectGridItem } from '../components/grid-item'
import dsr from '../public/images/projects/dsr/dsr_banner.png'
import ht from '../public/images/projects/ht/ht_banner.png'
const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem id="dsr" title="Don Sakagawa Realty" thumbnail={dsr}>
                        Developed a custom API for a Real Estate Online Mortgage system for the company. Real Estate Morgage System used by DSR Don Sakagawa Realty Co. System features may generate reports.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="ht" title="HT Realty Philippines" thumbnail={ht}>
                        Developed a custom API for a Real Estate Online Mortgage system for the company. Real Estate Morgage System used by Hornijas-Tobias Realty and Co. System features may generate reports and manage
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}


export default Projects