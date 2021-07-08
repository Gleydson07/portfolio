import { Flex, Text, Icon, Link } from '@chakra-ui/react'
import { Card } from './components/Card/Index';
import Typed from 'react-typed';
import { useEffect, useState } from 'react';
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
                w="100%"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
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
              
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </Flex>            
            </Flex>
    )
}