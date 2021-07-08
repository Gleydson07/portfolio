import { Flex, Text, Icon, Link } from '@chakra-ui/react'
import { Card } from '../Card/Index';

import { Content } from "../Content/Index";

export function PortFolio(){
    return (
        <Content>
            <Flex
                w="100%"
                h="calc(100vh - 5rem)"
                ml="2rem"
                flex="1"
                flexDir="column"
            >     

                <Text fontSize="2xl" align="right" fontWeight="600">Portfólio</Text>
                <Flex
                    w="100%"
                    flexDir="column"
                    justifyContent='center'
                    align="center"
                >
              
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </Flex>            
            </Flex>
        </Content>
    )
}