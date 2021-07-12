import { Flex, Text, Box } from '@chakra-ui/react';
import { Skill } from './Skill';

export function Skills(){
    return (
        <Flex
            flex="1"
            flexDir="column"
            align="left"
            lineHeight="1.5rem"
        >
            <Text
                color="cyan.400"
                fontSize={["lg" ,"xl"]}
                fontWeight="600"
                mt={["1rem", "0rem"]}
            >
                Skills
            </Text>

            <Box mr={["0rem", "3rem"]}>
                <Skill description="HTML" percent={90}/>
                <Skill description="CSS" percent={90}/>
                <Skill description="Typescript" percent={88}/>
                <Skill description="Javascript" percent={80}/>
                <Skill description="ReactJS" percent={80}/>
                <Skill description="NextJS" percent={70}/>
                <Skill description="Git e Github" percent={65}/>
                <Skill description="NodeJS" percent={40}/>
            </Box>
        </Flex>
    )
}