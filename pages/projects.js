import { Container,Heading,SimpleGrid,Divider} from '@chakra-ui/react'
import Section from '../components/section'

import { ProjectGridItem } from '../components/grid-item'
import dsr from '../public/images/projects/dsr/dsr.jpg'
import ht from '../public/images/projects/ht/ht.png'
import propertier from '../public/images/projects/propertier/propertier.png'
import priceInquiry from '../public/images/projects/mobile_price_inquiry/dashboard.png'
import oasis from '../public/images/projects/oasis/home.jpg'
import ohds from '../public/images/projects/ohds/login.png'
import itemRequisition from '../public/images/projects/item_requisition/login.png'
import tenant from '../public/images/projects/tenant_portal/login.png'
import amazon from '../public/images/projects/amazon/amazon.png'
import facebook from '../public/images/projects/facebook/facebook.png'
import airbnb from '../public/images/projects/airbnb/airbnb.png'
const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Web Applications
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem id="dsr" title="Don Sakagawa Realty" thumbnail={dsr}>
                        Developed a custom API for a Real Estate Online Mortgage system for the company. Real Estate Morgage System used by DSR Don Sakagawa Realty Co. System features may generate reports.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="ht" title="HT Realty Philippines" thumbnail={ht}>
                        Developed a custom API for a Real Estate Online Mortgage system for the company. Real Estate Morgage System used by Hornijas-Tobias Realty and Co. System features may generate reports and manage
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="propertier" title="Propertier" thumbnail={propertier}>
                        Developed a custom API for a Real Estate Online Mortgage system for the company. Real Estate Morgage System used by Hornijas-Tobias Realty and Co. System features may generate reports and manage
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="ohds" title="Online Health Declaration System" thumbnail={ohds}>
                       Automated health Declaration 
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="item_requisition" title="Item Requisition System" thumbnail={itemRequisition}>
                       Item Requisition System
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="tenant" title="Tenant Portal" thumbnail={tenant}>
                       Tenant Portal
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                  Mobile Applications
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <ProjectGridItem id="price_inquiry" title="Mobile Price Inquiry" thumbnail={priceInquiry}>
                            Mobile Price Inquiry For DSG Sons Group, with daily data synchorinization.
                        </ProjectGridItem>
                    </Section>

                    <Section>
                        <ProjectGridItem id="oasis" title="Project Oasis" thumbnail={oasis}>
                            Point System Mobile application for Eternal Wallet PH 
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
                
            </Section>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                  Cloned Apps
                </Heading>

                <SimpleGrid columns={[1,1,3]} gap={6}>
                    <Section>
                        <ProjectGridItem id="amazon" title="Amazon Clone" thumbnail={amazon}>
                            Amazon Clone Using ReactJS, NodeJS for Stripe Payment Integration
                        </ProjectGridItem>
                    </Section>

                    <Section>
                        <ProjectGridItem id="facebook" title="Facebook Clone" thumbnail={facebook}>
                            Facebook Clone Using ReactJS and Firebase for Google Authentication
                        </ProjectGridItem>
                    </Section>

                    <Section>
                        <ProjectGridItem id="airbnb" title="Airbnb Clone" thumbnail={airbnb}>
                            Airbnb Clone Using ReactJS, hosted in Firebase
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
                
            </Section>
        </Container>
    )
}


export default Projects