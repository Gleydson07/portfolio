import { Flex, Text, Image, Box } from '@chakra-ui/react'
import homePokemonEduImg from "../images/jobs/pokemon-edu/pokemon-home.png"
import dashboardPokemonEduImg from "../images/jobs/pokemon-edu/pokemon-dashboard.png"
import rankingPokemonEduImg from "../images/jobs/pokemon-edu/pokemon-ranking.png"

export function Card(){
    return (
        <Flex
            h="500px"
            w="100%"
            bg="dark.100"
            borderRadius="0.5rem"
            justifyContent="center"
            alignItems="center"
        >
                <Image w="600px"></Image>
                content
        </Flex>
    )
}
