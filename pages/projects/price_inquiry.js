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
                    Mobile Price Inquiry <Badge>2021</Badge>
                </Title>
                <P>
                Mobile Price Inquiry For DSG Sons Group, with daily data synchorinization.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP(Slim3)Rest API,SQLite,DB2,TopSpeed Client ODBC, Kotlin</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/mobile_price_inquiry/dashboard.png" alt="Price Inquiry Dashboard"/>
                <ProjectImage src="/images/projects/mobile_price_inquiry/price_inquiry.png" alt="Price Inquiry"/>
                <ProjectImage src="/images/projects/mobile_price_inquiry/sync.png" alt="Sync UI"/>
                <ProjectImage src="/images/projects/mobile_price_inquiry/data_sync.png" alt="Sync UI"/>

            </Container>
        </Layout>
    )
}

export default Project