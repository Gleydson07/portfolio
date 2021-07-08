import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { CardUser } from './CardUser'

interface ContentProps{
    children: ReactNode
}

export function Content({children}: ContentProps){
    return (
        <Flex
            w="100%"
            h="100vh"
            mx="auto"
            flexDir="column"
            justifyContent="flex-end"
            alignItems="center"
            // overflow="hidden"
        >
            <Flex
                w="100%"
                h="85%"
                mx="3rem"
                width="1440px"
                align="flex-start"
            >
                <CardUser/>

                {children}
            </Flex>
        </Flex> 
    )
}