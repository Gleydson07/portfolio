import { Flex, Text, Grid, Link } from '@chakra-ui/react'

import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si'

export function Header(){
    return (
        <Flex
            as="header"
            height="20"
            width="100%"
            position="fixed"
            zIndex="1"
            bg="gray.800"
            align="center"
            justify="center"
        >
            <Flex
                height="100%"
                width="1440px"
                mx="3rem"
                align="center"
                justify="space-between"
            >
                <Flex
                    align="center"
                    justify="center"
                >
                    <Text
                        mt="auto"
                        fontSize="3xl"
                        color="gray.100"
                        fontWeight="700"
                    >
                        {/* &lt;&nbsp; */}
                    </Text>
                    <Text
                        fontSize="4xl"
                        color="purple.400"
                        fontWeight="700"
                    >
                        g
                    </Text>
                    <Text
                        fontSize="4xl"
                        color="purple.400"
                        fontWeight="300"
                    >
                        santos
                    </Text>
                    <Text
                        fontSize="4xl"
                        color="purple.500"
                        fontWeight="700"
                    >
                        .
                    </Text>
                    <Text
                        fontSize="4xl"
                        color="cyan.500"
                        fontWeight="700"
                    >
                        dev
                    </Text>
                    <Text
                        mt="auto"
                        fontSize="3xl"
                        color="gray.100"
                        fontWeight="700"
                    >
                        {/* &nbsp;/&gt; */}
                    </Text>

                </Flex>
                <Grid 
                    display="flex"
                    gap="6"
                >
                    <Link as={SiLinkedin} href="#" fontSize="24"/>

                    <Link as={SiGithub} href="#" fontSize="24"/>

                    <Link as={SiWhatsapp} href="#" fontSize="24"/>

                    <Link as={SiGmail} href="#" fontSize="24"/>
                </Grid>
            </Flex>
        </Flex>
    )
}