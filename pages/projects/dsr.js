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
                    Don Sakagawa Realty <Badge>2019</Badge>
                </Title>
                <P>
                Developed a custom API for a Real Estate Online Mortgage system for the company. Real Estate Morgage System used by DSR Don Sakagawa Realty Co. The system can manage user and generate sales report.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP 7 - Slim3, HTML, CSS, Javascript, MySQL</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/dsr/dsr.jpg" alt="DSR"/>
                <ProjectImage src="/images/projects/dsr/dashboard.png" alt="DSR"/>

            </Container>
        </Layout>
    )
}

export default Project