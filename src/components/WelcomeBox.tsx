import { Flex, Text, Box, Image, useBreakpointValue } from '@chakra-ui/react';

import Typed from 'react-typed';
import meMobileImg from '../images/me/me-mobile.jpeg'
import { SocialMedia } from './Header/SocialMedia';

export function WelcomeBox(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box
            maxW="600px"
            minW="260px"
            w={["100%","500px"]}
            flex={isWideVersion ? 4 : ''}
            pr={["0rem", "2rem"]}
            mx={isWideVersion ? '' : 'auto'}
        >
            {!isWideVersion &&
                <Flex
                    w="100%"
                    mb="1rem"
                    alignItems="center"
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

            {isWideVersion &&
                <Box mb="1rem">
                    <SocialMedia />
                </Box>
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
                mb="2rem"
            >
                <>
                    <Typed
                        strings={['Gosto de aprender e compartilhar conhecimento.', `Sou desenvolvedor frontend.`]}
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
                <SocialMedia/>
            )}
        </Box>

    )
}