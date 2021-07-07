import { Flex, Text, Grid, Icon, Link } from '@chakra-ui/react'

import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si'

export function Header(){
    return (
        <Flex
            as="header"
            height="5rem"
            width="100%"
            position="fixed"
            zIndex="1"
            bg="black"
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
                    <Link href="https://www.linkedin.com/in/gleydson07/" isExternal >
                        <Icon as={SiLinkedin} fontSize="24"/>
                    </Link>

                    <Link href="https://github.com/Gleydson07" isExternal >
                        <Icon as={SiGithub} fontSize="24"/>
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=558281114246&text=Ol%C3%A1!!%20%F0%9F%98%80" isExternal >
                        <Icon as={SiWhatsapp} fontSize="24"/>
                    </Link>

                    <Link href="https://mail.google.com/mail/u/0/?fs=1&to=gassantos.dev@gmail.com&su=Ol%C3%A1!%20fala%20aqui%20qual%20assunto%20legal%20que%20vamos%20tratar.&body=Aqui%20voc%C3%AA%20pode%20descrever%20melhor%20sua%20mensagem,%20pode%20ser%20uma%20pergunta,%20uma%20sugest%C3%A3o,%20um%20convite%20para%20um%20caf%C3%A9%20%F0%9F%98%80&tf=cm" isExternal >
                        <Icon as={SiGmail} fontSize="24"/>
                    </Link>
                </Grid>
            </Flex>
        </Flex>
    )
}