import { useEffect, useState } from 'react';
import { Flex, Text, Grid, Button, Icon, useBreakpointValue } from '@chakra-ui/react';

import VisibilitySensor from "react-visibility-sensor";
import Typed from 'react-typed';

import {TiArrowDownThick, TiArrowUpThick} from 'react-icons/ti'
import { Dashboard } from './components/Dashboard/Index';

export function About(){
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState("");
    const [showAnimation, setShowAnimation] = useState(false);  
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        isVisible ? setShowAnimation(true) : setShowAnimation(false);
        isVisible ? setValue("Sobre mim") : setValue("");
    }, [isVisible])

    return (
            <Flex
                id="about"
                h="100%"
                minH="100vh"
                flexDir="column"
                alignItems="center"
                justifyContent='center'
            >            
                <Flex
                    flexDir="column"
                    mt={["3rem", "2rem"]}
                    px={["1rem" ,"1.5rem"]}
                    maxW={["100%", "1100px"]}
                    w="100%"
                >
                    <Text 
                        fontSize={["xl" ,"3xl"]}
                        fontWeight="600"
                        my="1rem"
                        id="title"
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
              
                    <Dashboard/>
                </Flex>            
                
                {isWideVersion && 
                    <Grid gap="2rem" templateColumns="repeat(2, 1fr)">
                        <Button
                            as="a"
                            href="#portfolio"      
                            my="0.75rem"
                            height="4rem"
                            width="4rem"
                            color="gray.700"
                            bg="transparent"
                            fontSize="1.125rem"
                            fontWeight="700"
                            transition="all 0.3s"
                            _hover={{
                                color: "cyan.700", 
                                fontSize: "3rem",
                                fontWeight: "900",
                            }}
                        >
                            <Icon 
                                as={TiArrowDownThick} 
                                fontSize="3.5rem" 
                            />
                        </Button>
                        <Button
                            as="a"
                            href="#"      
                            my="0.75rem"
                            height="4rem"
                            width="4rem"
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
                    </Grid>
                }
            </Flex>
    )
}