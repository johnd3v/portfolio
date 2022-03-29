import {Container,Badge,Link,List,ListItem} from '@chakra-ui/react' 
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="Tenant Portal">
            <Container>
                <Title>
                    Tenant Portal<Badge>2022</Badge>
                </Title>
                <P>
                Online Viewing of DSG Sons Group Inc. statement of account and managing tenants
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP 8 - Laravel, MySQL, Javascript, Redis</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/tenant_portal/login.png" alt="Login UI"/>
                <ProjectImage src="/images/projects/tenant_portal/dashboard.png" alt="Dashboard UI"/>
                <ProjectImage src="/images/projects/tenant_portal/contract.png" alt="Contract Ui"/>

            </Container>
        </Layout>
    )
}

export default Project