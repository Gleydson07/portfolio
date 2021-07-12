import { Flex, Text, Grid, Icon, Link, GridItem } from '@chakra-ui/react'

import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si'

export function SocialMedia(){
    return (
        <Grid 
            display="flex"
            templateColumns="repeat(4, 1fr)"
            gap="5"
            alignItems="center"
            justifyContent="center"
        >
            <GridItem>
                <Link href="https://www.linkedin.com/in/gsantosdev/" isExternal >
                    <Icon 
                        as={SiLinkedin} 
                        fontSize="24"
                        transition="color 0.3s"
                        _hover={{color: "cyan.600"}}
                    />
                </Link>
            </GridItem>

            <GridItem>
                <Link href="https://github.com/Gleydson07" isExternal >
                    <Icon 
                        as={SiGithub} 
                        fontSize="24"
                        transition="color 0.3s"
                        _hover={{color: "cyan.600"}}
                    />
                </Link>
            </GridItem>

            <GridItem>
                <Link href="https://api.whatsapp.com/send?phone=558281114246&text=Ol%C3%A1!!%20%F0%9F%98%80" isExternal >
                    <Icon 
                        as={SiWhatsapp} 
                        fontSize="24"
                        transition="color 0.3s"
                        _hover={{color: "cyan.600"}}
                    />
                </Link>
            </GridItem>

            <GridItem>
                <Link href="https://mail.google.com/mail/u/0/?fs=1&to=gassantos.dev@gmail.com&su=Ol%C3%A1!%20fala%20aqui%20qual%20assunto%20legal%20que%20vamos%20tratar.&body=Aqui%20voc%C3%AA%20pode%20descrever%20melhor%20sua%20mensagem,%20pode%20ser%20uma%20pergunta,%20uma%20sugest%C3%A3o,%20um%20convite%20para%20um%20caf%C3%A9%20%F0%9F%98%80&tf=cm" isExternal >
                    <Icon 
                        as={SiGmail} 
                        fontSize="24"
                        transition="color 0.3s"
                        _hover={{color: "cyan.600"}}
                    />
                </Link>
            </GridItem>

        </Grid>
    )
}