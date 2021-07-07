import { Flex, Text, Box, Button, Image } from '@chakra-ui/react';

import IImg from '../images/g1.png'
import Typed from 'react-typed';

import 'animate.css'

export function Home(){
    return (
        <Flex
            h="100vh"
            position="relative"
        >
            <Flex
                position="relative"
                align="center"
                justify="center"
                w="1440px"
                mx="auto"
                my="auto"
            >
                <Box
                    h="100%"
                    width="690px"
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
                        Gleydson Albuquerque
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
                    w="350px"
                    ml="5rem"               
                >
                    <Image 
                        border="2px solid"
                        borderColor="cyan.400"
                        objectFit="cover"
                        borderRadius="1rem"
                        src={IImg} 
                        alt="hi"
                    />
                </Box>
            </Flex>       
                
            <Box            
                position="absolute"
                bgGradient="linear(to-l, cyan.400, purple.500, purple.500, purple.500, cyan.400)"
                bottom="5rem"
                w="100%"
                h="1.5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Button
                    className="animate__animated animate__bounce animate__delay-5s animate_duration__5s"
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
                        fontSize: "1.5rem",
                        fontWeight: "900",
                        borderColor: "purple.500", 
                        borderWidth: "5px",
                    }}
                >
                    PUSH
                </Button>
            </Box>
        </Flex>
    )
}