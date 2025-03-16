import { 
        Container,
        Box,
        Heading, 
        Image, 
        useColorModeValue,
        Button,
        Badge
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import {BioSection,BioYear} from  '../components/bio'

import Layout from "../components/layouts/article"
const Page = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2018;
    return(
        <Layout>
            <Container>
                <Box 
                    borderRadius="lg" 
                    bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
                    p={3} 
                    mb={6} 
                    align="center"
                >  Hello, I&apos;m a developer based in Philippines!
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            John Riggo Tolentino
                        </Heading>
                        <p>PHP (Developer)</p>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base:4, md:0}}
                        ml={{md: 6}}
                        align="center" 
                    >
                        <Image  
                            borderColor="whiteAlpha.800" 
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/john.jpg"
                            alt="Profile"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>I’m John, a Software Engineer with 6+ years of experience in full-stack development. I specialize in PHP, JavaScript, and MySQL, building scalable web solutions. Passionate about problem-solving, optimizing user experiences, and adapting to evolving tech trends..</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects"><Button rightIcon={<ChevronRightIcon mt={1}/>}>My Works</Button></NextLink>
                    </Box>
                </Section>

               <Section delay={0.2}>
    <Heading as="h3" variant="section-title">
        Work Experience
    </Heading>

    <BioSection>
        <BioYear>2023 - 2025</BioYear>
        Full Stack Developer at Codev
    </BioSection>

    <BioSection>
        <BioYear>2022 - 2023</BioYear>
        PHP Developer at Sweet Onion Media Group
    </BioSection>

    <BioSection>
        <BioYear>2021 - 2022</BioYear>
        Senior Systems Developer at DSG Sons Group Incorporated
    </BioSection>

    <BioSection>
        <BioYear>2019 - 2021</BioYear>
        Full Stack Web Developer at Techstation Incorporated
    </BioSection>

    <BioSection>
        <BioYear>2018 - 2019</BioYear>
        Web Developer at Eternal Wallet PH Holdings Incorporated
    </BioSection>
</Section>

<Section delay={0.2}>
    <Heading as="h3" variant="section-title">
        Bio
    </Heading>

    <BioSection>
        <BioYear>1997</BioYear>
        Born in Davao, Philippines.
    </BioSection>

    <BioSection>
        <BioYear>2018</BioYear>
        Graduated with a degree in Information Technology <small>(University of Mindanao)</small>
    </BioSection>
</Section>



                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                            Certifications
                    </Heading>
                    
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Microsoft Technology Associate: Security Fundamentals
                    </BioSection>

                    <BioSection>
                        <BioYear>2017</BioYear>
                        Microsoft Technology Associate: Database Administration Fundamentals 
                    </BioSection>

                    <BioSection>
                        <BioYear>2017</BioYear>
                        National Certificate II in Computer Systems Servicing
                    </BioSection>
                    
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
