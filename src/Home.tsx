import { Flex, Text, Box, Button, Image, Icon } from '@chakra-ui/react';

import {TiArrowDownThick} from 'react-icons/ti'
import IImg from './images/g1.png'
import Typed from 'react-typed';

export function Home(){
    return (
        <Flex
            h="100vh"
            minHeight="600px"
            flexDir="column"
            align="center"
            justifyContent="center"      
        >
            <Flex
                position="relative"
                align="center"
                justify="space-between"
                w="1100px"
                mx="auto"
                my="auto"
                py="2rem"
            >
                <Box
                    h="100%"
                    width="700px"
                    height="350px"
                    position="relative"
                >
                    <Text
                        bgGradient="linear(to-l, cyan.400,purple.500)"
                        bgClip="text"
                        fontSize="5xl"
                        fontWeight="extrabold"
                        textAlign="left" 
                    >
                        Seja bem vindo(a) !
                    </Text>

                    <Text
                        color="gray.200"
                        fontSize="3xl"
                        fontWeight="300"
                        textAlign="left"
                        as="span"
                    >
                        Meu nome é&nbsp; 
                    </Text>
                    
                    <Text
                        color="gray.200"
                        fontSize="3xl"
                        fontWeight="500"
                        textAlign="left"
                        as="span"
                    >
                        Gleydson A. da Silva Santos
                    </Text>
                    
                    <Text
                        color="gray.200"
                        fontSize="3xl"
                        fontWeight="300"
                        textAlign="left"
                        mt="1rem"
                    >
                        <>
                            <Typed
                                strings={['Sou um&nbsp;']}
                                typeSpeed={50}
                                showCursor={false}
                            />
                            <Typed
                                strings={['estudante.', 'desenvolvedor frontend.', 'estudante e desenvolvedor frontend.']}
                                typeSpeed={50}
                                backSpeed={50}
                                startDelay={800}
                                showCursor={false}
                                loop={true}
                                smartBackspace={true}
                            />
                        </>

                    </Text>
                    
                    <Text
                        height="4rem"
                        position="absolute"
                        bottom="3.5rem"
                        color="gray.200"
                        fontSize="xl"
                        fontWeight="300"
                        textAlign="left"
                    >
                        Ao passo que aprimoro minhas habilidades e amplio meu conhecimento, percebo que o aprendizado é um processo prazeroso e infinito de constante evolução.🚀
                    </Text>
                    
                    <Text
                        position="absolute"
                        color="gray.200"
                        fontSize="xl"
                        fontWeight="300"
                        right="0"
                        bottom="0"
                    >
                        Gleydson Albuquerque 😉
                    </Text>
                </Box>

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
                        borderRadius="1rem"
                        src={IImg} 
                        alt="hi"
                    />
                </Box>
            </Flex>       
                
            <Button      
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