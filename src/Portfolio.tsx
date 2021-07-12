import { useEffect, useState } from 'react';
import { Flex, Text, Button, Icon, useBreakpointValue } from '@chakra-ui/react'

import Typed from 'react-typed';
import VisibilitySensor from "react-visibility-sensor";
import {TiArrowUpThick} from 'react-icons/ti';
import { Jobs } from './components/Jobs/Index';

export function PortFolio(){
    const [isVisible, setIsVisible] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [value, setValue] = useState("");
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true
    })

    useEffect(() => {
        isVisible ? setShowAnimation(true) : setShowAnimation(false);
        isVisible ? setValue("Portfólio") : setValue("");
    }, [isVisible, value])

    return (
        <Flex
            id="portfolio"
            w="100%"
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

                <Jobs/>                    
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