import {Container,Badge,Link,List,ListItem} from '@chakra-ui/react' 
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="Item Requisition System">
            <Container>
                <Title>
                    Item Requisition System <Badge>2021</Badge>
                </Title>
                <P>
                    Automated item request approval with e-mail notification and system notification.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP 7 - Laravel , Javascript, MySQL, Redis, WebSocket</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/item_requisition/login.png" alt="Login UI"/>
                <ProjectImage src="/images/projects/item_requisition/dashboard.png" alt="Dashboard UI"/>
                <ProjectImage src="/images/projects/item_requisition/add_requisition.png" alt="Add Requisition UI"/>
                <ProjectImage src="/images/projects/item_requisition/requisition_lists.png" alt="Requisition List UI"/>
                <ProjectImage src="/images/projects/item_requisition/requisition_details.png" alt="Requisition Details UI"/>
                <ProjectImage src="/images/projects/item_requisition/approver.png" alt="Approver UI"/>


            </Container>
        </Layout>
    )
}

export default Project