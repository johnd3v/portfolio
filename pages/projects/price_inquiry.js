import {Container,Badge,List,ListItem} from '@chakra-ui/react' 
import { Title,ProjectImage,Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
    return (
        <Layout title="Mobile Price Inquiry">
            <Container>
                <Title>
                    Mobile Price Inquiry <Badge>2021</Badge>
                </Title>
                <P>
                    A mobile app for DSG Sons Group to validate item price between db2 and tps files with daily data synchorinization and can print price tag using thermal printer.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP 7 - Slim3, SQLite, IBM db2, TopSpeed , Kotlin</span>
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