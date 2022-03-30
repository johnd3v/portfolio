import {Container,Badge,Link,List,ListItem} from '@chakra-ui/react' 
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="Airbnb Clone">
            <Container>
                <Title>
                    Airbnb Clone <Badge>2021</Badge>
                </Title>
                <P>
                Purpose for this clone application is to create UI using ReactJS and hosted on firebase
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://airbnb-clone-15242.netlify.app/">
                        https://airbnb-clone-15242.netlify.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ReactJS, Firebase</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/airbnb/airbnb.png" alt="Airbnb Dashboard"/>

            </Container>
        </Layout>
    )
}

export default Project