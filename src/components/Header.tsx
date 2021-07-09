import { Flex, Text, Grid, Icon, Link, Box } from '@chakra-ui/react'

import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si'

export function Header(){
    return (
        <Flex
            as="header"
            width="100%"
            position="fixed"
            align="center"
            justify="center"
            bg="black"
            zIndex="1"
        >
            <Flex
                w="1440px"
                justifyContent="space-between"
                alignItems="center"
                pt="0.5rem"
                pb="1rem"
                px="1rem"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="3xl"
                >

                    <Text
                        color="gray.500"
                        fontWeight="700"
                        // className="animate__animated animate__zoomInDown"
                    >
                        &lt;&nbsp;
                    </Text>
                    <Text
                        color="purple.400"
                        fontWeight="700"
                        // className="animate__animated animate__slow animate__zoomInDown"
                    >
                        g
                    </Text>
                    <Text
                        color="purple.400"
                        fontWeight="300"
                        // className="animate__animated animate__slow animate__zoomInDown"
                    >
                        santos
                    </Text>
                    <Text
                        color="purple.500"
                        fontWeight="700"
                        // className="animate__animated animate__slow animate__zoomInDown"
                    >
                        .
                    </Text>
                    <Text
                        color="cyan.500"
                        fontWeight="700"
                        // className="animate__animated animate__slow animate__zoomInDown"
                    >
                        dev
                    </Text>
                    <Text
                        fontSize="3xl"
                        color="gray.500"
                        fontWeight="700"
                        // className="animate__animated animate__zoomInDown"
                    >
                        &nbsp;/&gt;
                    </Text>

                </Box>
                
                <Grid 
                    display="flex"
                    gap="6"
                >
                    <Link href="https://www.linkedin.com/in/gleydson07/" isExternal >
                        <Icon 
                            as={SiLinkedin} 
                            fontSize="24"
                            transition="color 0.3s"
                            _hover={{color: "cyan.600"}}
                        />
                    </Link>

                    <Link href="https://github.com/Gleydson07" isExternal >
                        <Icon 
                            as={SiGithub} 
                            fontSize="24"
                            transition="color 0.3s"
                            _hover={{color: "cyan.600"}}
                        />
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=558281114246&text=Ol%C3%A1!!%20%F0%9F%98%80" isExternal >
                        <Icon 
                            as={SiWhatsapp} 
                            fontSize="24"
                            transition="color 0.3s"
                            _hover={{color: "cyan.600"}}
                        />
                    </Link>

                    <Link href="https://mail.google.com/mail/u/0/?fs=1&to=gassantos.dev@gmail.com&su=Ol%C3%A1!%20fala%20aqui%20qual%20assunto%20legal%20que%20vamos%20tratar.&body=Aqui%20voc%C3%AA%20pode%20descrever%20melhor%20sua%20mensagem,%20pode%20ser%20uma%20pergunta,%20uma%20sugest%C3%A3o,%20um%20convite%20para%20um%20caf%C3%A9%20%F0%9F%98%80&tf=cm" isExternal >
                        <Icon 
                            as={SiGmail} 
                            fontSize="24"
                            transition="color 0.3s"
                            _hover={{color: "cyan.600"}}
                        />
                    </Link>
                </Grid>
            </Flex>
        </Flex>
    )
}