import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { CardUser } from './CardUser'

interface ContentProps{
    children: ReactNode
}

export function Content({children}: ContentProps){
    return (
        <Flex
            h="calc(100vh - 5rem)"
            w="100%"
            mx="auto"
            justify="center"
            bgAttachment="fixed"
        >
            <Flex
                mx="3rem"
                width="1440px"
                height="80%"
                alignSelf="center"
                alignItems="center"
                justifyContent="space-between"          
            >
                <CardUser/>

                {children}
            </Flex>
        </Flex> 
    )
}