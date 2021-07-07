import { Flex, Text, Box, Button } from '@chakra-ui/react';

import Typed from 'react-typed';

export function Home(){
    return (
        <Flex
            flexDir="column"
            align="center"
            justify="center"
            h="100vh"
            w="1440px"
            mx="auto"
            position="relative"
        >
            <Box
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
                    <Typed                        
                        strings={['Meu nome é&nbsp;']}
                        typeSpeed={40}
                        showCursor={false}
                    />
                </Text>
                <Text
                    color="gray.200"
                    fontSize="3xl"
                    fontWeight="500"
                    textAlign="left"
                    as="span"
                >
                    <Typed
                        strings={['Gleydson Albuquerque.']}
                        typeSpeed={40}
                        startDelay={800}
                        showCursor={false}
                    />

                </Text>
                <Text
                    color="gray.200"
                    fontSize="3xl"
                    fontWeight="300"
                    textAlign="left"
                    mt="1rem"
                >
                    <Typed
                        strings={['Eu sou um estudante.', 'Eu sou um desenvolvedor frontend.']}
                        typeSpeed={50}
                        backSpeed={50}
                        startDelay={1900}
                        showCursor={false}
                        loop={false}
                        smartBackspace={true}
                    />

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
                    <Typed
                        strings={['Ao passo que aprimoro minhas habilidades e amplio meu conhecimento, percebo que o aprendizado é um processo prazeroso e infinito de constante evolução.🚀']}
                        typeSpeed={35}
                        startDelay={7000}
                        showCursor={false}
                    />

                </Text>
                <Text
                    position="absolute"
                    color="gray.200"
                    fontSize="xl"
                    fontWeight="300"
                    right="0"
                    bottom="0"
                >
                    <Typed
                        strings={['Gleydson Albuquerque 😉']}
                        typeSpeed={60}
                        startDelay={16000}
                        showCursor={false}
                    />

                </Text>
                    

            </Box>

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