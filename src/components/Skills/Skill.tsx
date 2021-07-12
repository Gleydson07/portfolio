import { Text, Box, Progress } from '@chakra-ui/react';

interface ISkillProps {
    description: string;
    percent: number;
}

export function Skill({description, percent}: ISkillProps){
    return (
        <Box mt="0.5rem">
            <Text color="gray.400">{description}</Text>
            <Progress mt="0.25rem" size="sm" colorScheme="purple" value={percent}/>
        </Box>
    )
}