import { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import VisibilitySensor from "react-visibility-sensor";
import Typed from 'react-typed';

import { Dashboard } from '../components/Dashboard/Index';

export function About(){
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState("");
    const [showAnimation, setShowAnimation] = useState(false); 

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
                
            </Flex>
    )
}