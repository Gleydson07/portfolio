import { Flex, Text } from '@chakra-ui/react'

export function About(){
    return (
        <Flex
            h="calc(100vh - 5rem)"
            w="100%"
            mx="auto"
            justify="center"
        >
            <Flex
                mx="3rem"
                width="1440px"
                alignItems="center"
                justifyContent="space-between"
                
            >
                <Flex
                    h="85%"
                    w="300px"
                    my="auto"
                    borderRadius="0.5rem"
                    bg="gray.900"
                >
                    <Text>TESTE HEADER</Text>
                </Flex>

                <Flex
                    h="85%"
                    flex="1"
                    border="1px solid green.100"
                >
                    <Text>TESTE CONTENT</Text>
                </Flex>
            </Flex>
        </Flex> 
    )
}