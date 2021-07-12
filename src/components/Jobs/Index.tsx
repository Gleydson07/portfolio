import { Grid, GridItem } from '@chakra-ui/react'
import {SiTypescript, SiJavascript, SiCss3, SiHtml5, SiFirebase, SiSass, SiReact} from 'react-icons/si';
import { Card } from '../Card'

import homePokemonEduImg from "../../images/jobs/pokemon-edu/pokemon-home.png"
import dashboardPokemonEduImg from "../../images/jobs/pokemon-edu/pokemon-dashboard.png"
import homeMarketImg from "../../images/jobs/market/market-home.png"
import dashboardMarketImg from "../../images/jobs/market/market-mobile.png"

export function Jobs(){
    return (
        <Grid 
            gap="2rem"
            templateColumns={["repeat(1, 1fr)" ,"repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            align="center"
            borderRadius="0.5rem"
        >
            <GridItem>
                <Card                                
                    images={[
                        homePokemonEduImg, 
                        dashboardPokemonEduImg
                    ]}
                    title="Pokemon Education"
                    description="É um game que tem como finalidade 
                    permitir que crianças possam práticar 
                    os ensinamentos adquiridos na 
                    escola de maneira lúdica usando a 
                    temática do jogo POKEMON."
                    technology={[SiReact, SiTypescript, SiFirebase, SiSass]}
                    repository="https://github.com/Gleydson07/pokemon-edu"
                    page= "https://pokemon-education.web.app/"
                />
            </GridItem>
            <GridItem>
                <Card                                
                    images={[
                        dashboardMarketImg,
                        homeMarketImg, 
                    ]}
                    title="Market"
                    description="Controle de despesas mensais em Javascript, HTML e CSS. 
                    A aplicação permite comparar os gastos entre os meses, seus dados 
                    ficam salvos no localStorage."
                    technology={[SiJavascript, SiHtml5, SiCss3]}
                    repository="https://github.com/Gleydson07/market"
                />
            </GridItem>
        </Grid>
    )
}