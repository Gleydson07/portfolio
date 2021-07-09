import { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react'

import Typed from 'react-typed';
import VisibilitySensor from "react-visibility-sensor";

import { Carousel } from 'react-responsive-carousel';
import 'react-vertical-timeline-component/style.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from './components/Card';

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
                h="100vh"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
            >            
                <Flex
                    w="1100px"
                    flexDir="column"
                    alignSelf="center"
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

                    <Flex 
                        overflow="hidden"
                        justifyContent="center"
                        alignItems="center"
                        flexDir="column"
                    >
                        <Carousel
                            width="1100px"
                            showThumbs={false}
                            showArrows={true}
                            showStatus={false}
                            useKeyboardArrows={true}
                            autoPlay={true}
                            swipeable={true}
                            emulateTouch={true}
                            dynamicHeight={true}
                        >
                            <Card/>
                            <Card/>
                            <Card/>
                        </Carousel>
                    </Flex>                    
                </Flex>            
            </Flex>
    )
}