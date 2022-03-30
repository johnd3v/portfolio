import {Container,Badge,Link,List,ListItem} from '@chakra-ui/react' 
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="HT Realty">
            <Container>
                <Title>
                    HT Realty Philippines <Badge>2019</Badge>
                </Title>
                <P>
                Developed a custom API for a Real Estate Online Mortgage system for the company. Real Estate Morgage System used by HT Realty Philippines. The system can manage users and generate commission for every agent sales.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP 7 - Slim3 , HTML, CSS, Javascript, MySQL</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/ht/ht.png" alt="HT Login"/>
                <ProjectImage src="/images/projects/ht/dashboard.png" alt="HT Dashboard"/>

            </Container>
        </Layout>
    )
}

export default Project