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
                    Project Oasis <Badge>2018</Badge>
                </Title>
                <P>
                    Mobile point system for XEC and XET Holders. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Firebase,Java Android</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/oasis/home.jpg" alt="Home UI"/>
                <ProjectImage src="/images/projects/oasis/login.jpg" alt="Login UI"/>
                <ProjectImage src="/images/projects/oasis/opt.jpg" alt="OTP UI"/>
                <ProjectImage src="/images/projects/oasis/pin.jpg" alt="Pin UI"/>
                <ProjectImage src="/images/projects/oasis/dashboard.jpg" alt="Dashboard UI"/>
                <ProjectImage src="/images/projects/oasis/nav.jpg" alt="Navigation UI"/>

            </Container>
        </Layout>
    )
}

export default Project