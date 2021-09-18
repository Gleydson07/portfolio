import { Text, Box } from '@chakra-ui/react'

export function Logo(){
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={["xl", "3xl"]}
        >

            <Text
                color="purple.400"
                fontWeight="300"
                fontSize="2xl"
            >
                @
            </Text>
            <Text
                color="purple.400"
                fontWeight="700"
            >
                g
            </Text>
            <Text
                color="purple.400"
                fontWeight="300"
            >
                santos
            </Text>
            <Text
                color="purple.500"
                fontWeight="700"
            >
                
            </Text>
            <Text
                color="cyan.500"
                fontWeight="700"
            >
                dev
            </Text>

        </Box>
    )
}
