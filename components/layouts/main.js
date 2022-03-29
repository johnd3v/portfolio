import Head from "next/head"
import Navbar from '../navbar.js'
import { Box ,Container} from "@chakra-ui/react"
import Lucario from "../lucario.js"
import NoSsr from '../no-ssr'
const Main = ({children,router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>John Riggo Tolentino - Homepage</title>
            </Head>
            
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
               <NoSsr>
               <Lucario/>
               </NoSsr>
                {children}
            </Container>
        </Box>
    )
}


export default Main