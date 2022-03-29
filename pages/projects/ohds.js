import {Container,Badge,Link,List,ListItem} from '@chakra-ui/react' 
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="Online Health Declaration System">
            <Container>
                <Title>
                    Online Health Declaration System <Badge>2021</Badge>
                </Title>
                <P>
                    Automated health declaration system, detects an employee who have answered yes in the form and proceeds to clinic for screening.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP(Laravel),Javascript,MySQL,Redis</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/ohds/login.png" alt="Home UI"/>
                <ProjectImage src="/images/projects/ohds/questions.png" alt="Home UI"/>
                <ProjectImage src="/images/projects/ohds/qr.png" alt="Home UI"/>
                <ProjectImage src="/images/projects/ohds/clinic_dashboard.png" alt="Home UI"/>

            </Container>
        </Layout>
    )
}

export default Project