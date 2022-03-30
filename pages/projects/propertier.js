import {Container,Badge,List,ListItem} from '@chakra-ui/react' 
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="Propertier">
            <Container>
                <Title>
                    Propertier <Badge>2022</Badge>
                </Title>
                <P>
                    Developed a custom Real Estate Management System. The system composed of printing and generating commissions and managing sales.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP 8 - Laravel, HTML, CSS, Javascript, MySQL, Redis</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/propertier/propertier.png" alt="Propertier Login"/>
                <ProjectImage src="/images/projects/propertier/dashboard.png" alt="HT Dashboard"/>

            </Container>
        </Layout>
    )
}

export default Project