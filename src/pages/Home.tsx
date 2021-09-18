import { Flex, Box, Button, Image, Icon, useBreakpointValue } from '@chakra-ui/react';

import {TiArrowDownThick} from 'react-icons/ti'
import { WelcomeBox } from '../components/WelcomeBox';
import { useNavigate } from '../hooks/useNavigate';
import IImg from '../images/me/me.jpeg'

export function Home(){
    const {setActiveLinkProps} = useNavigate();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            id="home"
            h="100vh"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            px="2rem"
        >
            <Flex
                justify="space-between"
                alignItems="center"
                maxW={["100%", "1100px"]}
                w="100%"
            >
                <WelcomeBox/>

                {isWideVersion &&
                    <Box
                        flex="1" 
                        maxW="250px"
                    >
                        <Image 
                            className="animate__animated animate__slower animate__fadeInDown"
                            data-rellax-speed="7"
                            border="2px solid"
                            borderColor="cyan.400"
                            objectFit="cover"
                            borderRadius="0.25rem"
                            src={IImg} 
                            alt="hi"
                        />
                    </Box>                
                }
            </Flex>       
                
            <Button 
                as="a"
                href="#about"
                onClick={() => setActiveLinkProps("about")}
                mt={["3rem", "3.5rem"]}
                className="animate__animated animate__delay-2s animate__slower animate__flip animate__bounceInUp"
                height={["3rem", "5rem"]}
                width={["3rem", "5rem"]}
                borderRadius="50%"
                color="purple.500"
                border="10px solid #0BC5EA77"
                fontSize="1.125rem"
                fontWeight="700"
                transition="all 0.3s"
                _hover={{
                    bg: "gray.50", 
                    color: "cyan.400", 
                    fontSize: "3rem",
                    fontWeight: "900",
                    borderColor: "purple.500", 
                    borderWidth: "5px",
                }}
            >
                <Icon 
                    as={TiArrowDownThick} 
                    fontSize={["1.5rem", "3.5rem"]} 
                    className="animate__animated animate__delay-5s animate__flip"
                />
            </Button>
        </Flex>
    )
}
