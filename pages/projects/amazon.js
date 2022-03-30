import {Container,Badge,Link,List,ListItem} from '@chakra-ui/react' 
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="Amazon Clone">
            <Container>
                <Title>
                    Amazon Clone<Badge>2021</Badge>
                </Title>
                <P>
                    Purpose of this project is to learn react context api and create UI application using ReactJS. Also has Strip API Integration using NodeJS for sample payment and user authentication using Google Auth
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://clone-6f68f.web.app/">
                        https://clone-6f68f.web.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ReactJS,NodeJS, Firebase</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/amazon/amazon.png" alt="Amazon"/>

            </Container>
        </Layout>
    )
}

export default Project