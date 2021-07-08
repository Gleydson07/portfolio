import { SimpleGrid, GridItem, Flex, Text, Icon, Link } from '@chakra-ui/react'
import { Card } from '../Card/Index';

import { Content } from "../Content/Index";

export function PortFolio(){
    return (
        <Content>
            <Flex
                h="100%"
                w="100%"
                px="1rem"
                ml="2rem"
                flex="1"
                flexWrap="wrap"
                justifyContent="space-between"
                alignContent="space-between"
                boxSizing="border-box"
                overflow="visible"
            >                
                <Flex
                    m="0.25rem"
                >
                    <Card />                    
                </Flex>
                <Flex
                    m="0.25rem"
                >
                    <Card />                    
                </Flex>
                <Flex
                    m="0.25rem"
                >
                    <Card />                    
                </Flex>
                <Flex
                    m="0.25rem"
                >
                    <Card />                    
                </Flex>
                <Flex
                    m="0.25rem"
                >
                    <Card />                    
                </Flex>
                <Flex
                    m="0.25rem"
                >
                    <Card />                    
                </Flex>
                
            </Flex>
        </Content>
    )
}