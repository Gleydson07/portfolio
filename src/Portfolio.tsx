import { useEffect, useState } from 'react';
import { Flex, Grid, GridItem, Text, Button, Icon, useBreakpointValue } from '@chakra-ui/react'

import { Card } from './components/Card';

import Typed from 'react-typed';
import VisibilitySensor from "react-visibility-sensor";
import homePokemonEduImg from "./images/jobs/pokemon-edu/pokemon-home.png"
import dashboardPokemonEduImg from "./images/jobs/pokemon-edu/pokemon-dashboard.png"
import homeMarketImg from "./images/jobs/market/market-home.png"
import dashboardMarketImg from "./images/jobs/market/market-mobile.png"
import {SiTypescript, SiJavascript, SiCss3, SiHtml5, SiFirebase, SiSass, SiReact} from 'react-icons/si';
import {TiArrowUpThick} from 'react-icons/ti';

export function PortFolio(){
    const [isVisible, setIsVisible] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [value, setValue] = useState("");
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        isVisible ? setShowAnimation(true) : setShowAnimation(false);
        isVisible ? setValue("Portfólio") : setValue("");
    }, [isVisible, value])

    return (
            <Flex
                id="portfolio"
                w="100%"
                h="100vh"
                flexDir="column"
                alignItems="center"
            >            
                <Flex
                    flexDir="column"
                    w={["auto", "1100px"]}
                    h="100%"
                    mt={["3rem", "5rem"]}
                >
                    <Text 
                        fontSize={["xl" ,"3xl"]}
                        fontWeight="600"
                        my="1rem"
                    >
                        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
                            <Typed
                                strings={[`${value}&nbsp;`]}
                                typeSpeed={80}
                                showCursor={true}
                                stopped={showAnimation}
                            />
                        </VisibilitySensor>
                    </Text>

                    <Grid 
                        gap="2rem"
                        templateColumns={["repeat(1, 1fr)" ,"repeat(3, 1fr)"]}
                        align="center"
                        borderRadius="0.5rem"
                        mb="1rem"
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
                </Flex> 
                {isWideVersion && 
                    <Button
                        as="a"
                        href="#home"      
                        my="1rem"
                        height={["3rem", "5rem"]}
                        width={["3rem", "5rem"]}
                        color="gray.700"
                        bg="transparent"
                        fontSize="1.125rem"
                        fontWeight="700"
                        transition="all 0.3s"
                        _hover={{
                            color: "cyan.700", 
                            fontSize: "3rem",
                            fontWeight: "900"
                        }}
                    >
                        <Icon 
                            as={TiArrowUpThick} 
                            fontSize="3.5rem" 
                        />
                    </Button>
                }           
            </Flex>
    )
}