import { useEffect, useState } from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react'

import { Card } from './components/Card';

import Typed from 'react-typed';
import VisibilitySensor from "react-visibility-sensor";

export function PortFolio(){
    const [isVisible, setIsVisible] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [value, setValue] = useState("")

    useEffect(() => {
        isVisible ? setShowAnimation(true) : setShowAnimation(false);
        isVisible ? setValue("Portfólio") : setValue("");
    }, [isVisible, value])

    return (
            <Flex
                id="portfolio"
                w="100%"
                flexDir="column"
                alignItems="center"
            >            
                <Flex
                    w="1100px"
                    flexDir="column"
                    mt="5rem"
                >
                    <Text 
                        fontSize="3xl" 
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
                        templateColumns="repeat(2, 1fr)"
                        gap="2rem"
                        w="100%"
                        px="3rem"
                        py="2rem"
                        m="auto"
                        bg="dark.100"
                        borderRadius="0.5rem"
                    >
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Grid>                    
                </Flex>            
            </Flex>
    )
}