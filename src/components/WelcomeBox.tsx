import { Flex, Text, Box, Image, Icon, useBreakpointValue, Grid, Link } from '@chakra-ui/react';
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si'

import meMobileImg from '../images/me/me-mobile.jpeg'
import Typed from 'react-typed';

export function WelcomeBox(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box
            maxW="600px"
            minW="260px"
            w="500px"
            flex={isWideVersion ? 4 : ''}
            pr={["0rem", "2rem"]}
            mx="auto"
        >
            {!isWideVersion &&
                <Flex
                    w="100%"
                    mb="1rem"
                >
                    <Image 
                        className="animate__animated animate__slower animate__fadeInDown"
                        data-rellax-speed="7"
                        border="2px solid"
                        objectFit="cover"
                        borderRadius="100%"
                        src={meMobileImg} 
                        alt="Gleydson"
                        w="80px"
                        h="80px"
                    />
                </Flex>                
            }

            <Text
                bgGradient="linear(to-l, cyan.400,purple.500)"
                bgClip="text"
                fontSize={["2xl", "5xl"]}
                fontWeight="extrabold"
                textAlign="left" 
            >
                Seja bem vindo(a) !
            </Text>

            <Text
                color="gray.200"
                fontSize={["md", "2xl"]}
                fontWeight="300"
                textAlign="left"
                as="span"
            >
                Meu nome é&nbsp; 
            </Text>
            
            <Text
                color="gray.200"
                fontSize={["md", "2xl"]}
                fontWeight="500"
                textAlign="left"
                as="span"
            >
                Gleydson {isWideVersion ? " A. da Silva Santos" : " Albuquerque"}
            </Text>
            
            <Text
                color="gray.200"
                fontSize={["md", "2xl"]}
                fontWeight="300"
                textAlign="left"
                h="2.62rem"
                mt="0.25rem"
            >
                <>
                    <Typed
                        strings={['Sou estudante.', `Sou desenvolvedor frontend.`, `Sou estudante e desenvolvedor frontend.`]}
                        typeSpeed={50}
                        backSpeed={50}
                        showCursor={true}
                        smartBackspace={true}
                    />
                </>

            </Text>

            {isWideVersion ? (
                <>
                    <Text
                        height="4rem"
                        color="gray.200"
                        fontSize={["md", "lg"]}
                        fontWeight="300"
                        textAlign="left"
                        mt="2rem"
                    >
                        Ao passo que aprimoro minhas habilidades e amplio meu conhecimento, percebo que o aprendizado é um processo prazeroso e infinito de constante evolução.🚀
                    </Text>
                    
                    <Text
                        color="gray.200"
                        fontSize={["md", "lg"]}
                        fontWeight="300"
                        textAlign="right"
                        mt="2rem"
                    >
                        Gleydson Albuquerque 😉
                    </Text>
                </>
            ):(
                <Grid 
                    display="flex"
                    gap="4"
                    mt="1.5rem"
                    justifyContent="center"
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
            )}
        </Box>

    )
}