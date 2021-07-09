import { Flex, Text, Box, Button, Image, Icon, useBreakpointValue, Grid, Link } from '@chakra-ui/react';
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from 'react-icons/si'

import {TiArrowDownThick} from 'react-icons/ti'
import IImg from './images/me/me.jpg'
import Typed from 'react-typed';

export function Home(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            id="home"
            h="100vh"
            flexDir="column"
            align="center"
            justifyContent="center"
            px="3rem"
        >
            <Flex
                align="center"
                justify="space-between"
                w={["100%", "1100px"]}
                mx="auto"
                my="auto"
                py="2rem"
            >
                <Box
                    h="100%"
                    width={["450px" ,"700px"]}
                    position="relative"
                >
                    

                    {!isWideVersion &&
                    <Flex
                        w="80px"
                        my="1rem"    
                    >
                        <Image 
                            className="animate__animated animate__slower animate__fadeInDown"
                            data-rellax-speed="7"
                            border="2px solid"
                            // borderColor="cyan.400"
                            objectFit="cover"
                            borderRadius="0.25rem"
                            src={IImg} 
                            alt="hi"
                        />
                    </Flex>                
                }<Text
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
                        fontSize={["xl", "3xl"]}
                        fontWeight="300"
                        textAlign="left"
                        as="span"
                    >
                        Meu nome é&nbsp; 
                    </Text>
                    
                    <Text
                        color="gray.200"
                        fontSize={["xl", "3xl"]}
                        fontWeight="500"
                        textAlign="left"
                        as="span"
                    >
                        Gleydson {isWideVersion ? "A. da Silva Santos" : "Albuquerque"}
                    </Text>
                    
                    <Text
                        color="gray.200"
                        fontSize={["xl", "3xl"]}
                        fontWeight="300"
                        textAlign="left"
                        mt="1rem"
                    >
                        <>
                            <Typed
                                strings={['Sou estudante.', `Sou desenvolvedor frontend.`, `Sou estudante e desenvolvedor${!isWideVersion ? '<br/>' : ''} frontend.`]}
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
                                fontSize={["md", "xl"]}
                                fontWeight="300"
                                textAlign="left"
                                mt="2rem"
                            >
                                Ao passo que aprimoro minhas habilidades e amplio meu conhecimento, percebo que o aprendizado é um processo prazeroso e infinito de constante evolução.🚀
                            </Text>
                            
                            <Text
                                color="gray.200"
                                fontSize={["md", "xl"]}
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
                    )
                    }
                </Box>
                {isWideVersion &&
                    <Box
                        w="300px"
                        minHeight="400px"          
                    >
                        <Image 
                            className="animate__animated animate__slower animate__fadeInDown"
                            data-rellax-speed="7"
                            border="2px solid"
                            borderColor="cyan.400"
                            objectFit="cover"
                            borderRadius="0.25rem"
                            src={IImg} 
                            alt="hi"
                        />
                    </Box>                
                }
            </Flex>       
                
            <Button 
                as="a" 
                href="#about"
                bottom="3rem"              
                className="animate__animated animate__delay-2s animate__slower animate__flip animate__bounceInUp"
                height="5rem"
                width="5rem"
                borderRadius="50%"
                color="purple.500"
                border="10px solid #0BC5EA77"
                fontSize="1.125rem"
                fontWeight="700"
                transition="all 0.3s"
                _hover={{
                    bg: "gray.50", 
                    color: "cyan.400", 
                    fontSize: "3rem",
                    fontWeight: "900",
                    borderColor: "purple.500", 
                    borderWidth: "5px",
                }}
            >
                <Icon 
                    as={TiArrowDownThick} 
                    fontSize="3.5rem" 
                    className="animate__animated animate__delay-5s animate__flip"
                />
            </Button>
        </Flex>
    )
}