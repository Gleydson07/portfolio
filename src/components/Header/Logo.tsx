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
                fontSize="4xl"
                // className="animate__animated animate__zoomInDown"
            >
                {/* &lt;&nbsp; */}
                @
            </Text>
            <Text
                color="purple.400"
                fontWeight="700"
                // className="animate__animated animate__slow animate__zoomInDown"
            >
                g
            </Text>
            <Text
                color="purple.400"
                fontWeight="300"
                // className="animate__animated animate__slow animate__zoomInDown"
            >
                santos
            </Text>
            <Text
                color="purple.500"
                fontWeight="700"
                // className="animate__animated animate__slow animate__zoomInDown"
            >
                
            </Text>
            <Text
                color="cyan.500"
                fontWeight="700"
                // className="animate__animated animate__slow animate__zoomInDown"
            >
                dev
            </Text>
            <Text
                color="gray.500"
                fontWeight="700"
                // className="animate__animated animate__zoomInDown"
            >
                {/* &nbsp;/&gt; */}
            </Text>

        </Box>
    )
}