import { useEffect, useState } from 'react';
import { Flex, Text, Image, Box, Icon, useBreakpointValue } from '@chakra-ui/react';

import meImg from '../../images/me/g1.png'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import { Skills } from '../Skills/Index';
import { ProfessionalAndAcademicData } from './ProfessionalAndAcademicData';

export function Dashboard(){
    const [myAge, setMyAge] = useState<number>();    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        const now = new Date();
        const past = new Date('1992-02-12');
        const diff = Math.abs(now.getTime() - past.getTime());
        const year = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365));
        setMyAge(year-1)
    }, [])

    return (
        <Flex
            flexDir="column"
            p="1.5rem"
            w="100%"
            minW={["100%", "700px"]}
            borderRadius="0.5rem"
            bg={["dark.50", "dark.50"]}
            mb="1rem"
        >
            {isWideVersion && 
                <Flex>
                    <Image 
                        src={meImg}
                        h="5rem"
                        borderRadius="0.5rem"
                        border="2px solid #0BC5EA"
                    />

                    <Flex
                        ml="2rem"
                        flexDir="column"
                    >
                        <Text as="span" fontWeight="500" fontSize="xl">Gleydson Albuquerque da Silva Santos</Text>
                        <Text fontSize="md">Viçosa-AL, BRASIL</Text>
                        <Text as="span" fontSize="sm">{myAge} anos</Text>
                    </Flex>

                    <Flex flexDir="column" ml="2rem">
                        <Box >
                            <Icon as={AiOutlineMail}/>
                            <Text fontSize="md" as="span" ml="0.5rem"> gassantos.dev@gmail.com</Text><br/>
                            <Icon as={AiOutlinePhone}/>
                            <Text fontSize="md" as="span" ml="0.5rem"> (82) 98111-4246</Text>
                        </Box>
                    </Flex>
                </Flex>
            }

            <Flex
                mt={["0rem", "1.25rem"]}
                flexDir={["column-reverse", "row"]}
            >
                <Skills/>

                <ProfessionalAndAcademicData/>
            </Flex>
            
        </Flex>
                
    )
}