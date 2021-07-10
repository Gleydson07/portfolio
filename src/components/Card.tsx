import { Flex, Text, Image, Box, Link, Icon } from '@chakra-ui/react'
import homePokemonEduImg from "../images/jobs/pokemon-edu/pokemon-home.png"
import dashboardPokemonEduImg from "../images/jobs/pokemon-edu/pokemon-dashboard.png"
import rankingPokemonEduImg from "../images/jobs/pokemon-edu/pokemon-ranking.png"
import { Carousel } from 'react-responsive-carousel';

import {SiGithub} from 'react-icons/si'
import {AiOutlineGlobal} from 'react-icons/ai'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Card(){
    return (
        <Flex
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            m="auto"
            bg="gray.900"
            borderRadius="0.5rem"
            h="250px"
        >
            <Box flex="1" w="100%" >
                <Carousel
                    width="100%"
                    showThumbs={false}
                    showArrows={true}
                    showStatus={false}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    swipeable={true}
                    emulateTouch={true}
                    dynamicHeight={true}
                    infiniteLoop={true}
                    interval={5000}
                    transitionTime={1000}
                >
                    <Image 
                        src={homePokemonEduImg}
                        alt="pokemon"
                        h="250px"
                        borderRadius="0.5rem 0 0 0.5rem"
                    />

                    <Image 
                        src={dashboardPokemonEduImg}
                        alt="pokemon"
                        h="250px"
                        borderRadius="0.5rem 0 0 0.5rem"
                    />
                </Carousel>
            </Box>

            <Box flex="1" mx="1rem">
                <Text 
                    fontSize="2xl"
                    py="0.25rem"
                    fontWeight="500"
                >
                    Pokemon Education
                </Text>

                <Text 
                    fontSize="sm"
                >   
                    &nbsp;&nbsp;É um game que tem como finalidade permitir que crianças possam 
                    práticar os ensinamentos adquiridos na escola de maneira lúdica 
                    usando a temática do jogo POKEMON.
                </Text>
            
                <Box 
                    w="100%"
                    bg="gray.900"
                    py="1rem"
                >
                    <Link href="https://www.linkedin.com/in/gleydson07/" isExternal >
                        <Icon 
                            as={SiGithub} 
                            fontSize="24"
                            transition="color 0.3s"
                            _hover={{color: "cyan.600"}}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gleydson07/" isExternal >
                        <Icon 
                            as={AiOutlineGlobal} 
                            fontSize="24"
                            transition="color 0.3s"
                            _hover={{color: "cyan.600"}}
                        />
                    </Link>
                </Box>
            </Box>


        </Flex>
    )
}
