import {Container,Badge,Link,List,ListItem} from '@chakra-ui/react' 
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="Don Sakagawa Realty">
            <Container>
                <Title>
                    HT Realty Philippines <Badge>2019</Badge>
                </Title>
                <P>
                Developed a custom API for a Real Estate Online Mortgage system for the company. Real Estate Morgage System used by DSR Don Sakagawa Realty Co. System features may generate reports.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP(Slim3), HTML, CSS, Javascrip, MySQL</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/ht/ht.png" alt="HT Login"/>
                <ProjectImage src="/images/projects/ht/dashboard.png" alt="HT Dashboard"/>

            </Container>
        </Layout>
    )
}

export default Project