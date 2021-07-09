import { Flex, Box, Image } from '@chakra-ui/react'
import homePokemonEduImg from "../images/jobs/pokemon-edu/pokemon-home.png"
import dashboardPokemonEduImg from "../images/jobs/pokemon-edu/pokemon-dashboard.png"
import rankingPokemonEduImg from "../images/jobs/pokemon-edu/pokemon-ranking.png"

export function Card(){
    return (
        <Flex
            h="400px"
            border="1px solid red"
            position="relative"
        >
            <Box
                m="2rem"
                position="relative"
            >
                <Image 
                    src={homePokemonEduImg} 
                    alt="pokemon home"
                    objectFit="contain"
                    boxSize="200px"
                    position="relative"
                />
                <Image 
                    src={dashboardPokemonEduImg} 
                    alt="pokemon dashboard"
                    objectFit="contain"
                    boxSize="200px"
                    position="absolute"
                />
                <Image 
                    src={rankingPokemonEduImg} 
                    alt="pokemon ranking"
                    objectFit="contain"
                    boxSize="200px"
                    position="absolute"
                />
            </Box>
        </Flex>
    )
}