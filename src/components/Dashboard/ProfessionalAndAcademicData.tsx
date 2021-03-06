import { Flex, Text, Box, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { Technologies } from './Technologies';

export function ProfessionalAndAcademicData(){    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            flex="3"
            flexDir="column"
            lineHeight="1.5rem"
        >
            <Text 
                color="cyan.400"
                fontSize={["lg" ,"xl"]}
                fontWeight="600"
            >
                Dados Profissionais e Acadêmicos
            </Text>
            <Grid
                templateColumns="repeat(2, 1fr)"
                bg={["transparent" ,"dark.100"]}
                mt={["0", "1rem"]}
                h="100%"
                pt="1rem"
                px={["0rem", "2rem"]}
                borderRadius="0.5rem"
                position="relative"
            >
                <GridItem colSpan={!isWideVersion ? 2 : 1}>
                    <Box>
                        <Text color="purple.400" fontSize="md" fontWeight="500">Experiências Profissionais</Text>
                        <Box lineHeight="1.25rem">
                            <Text fontSize="md" color="gray.50">Desenvolvedor ReactJS </Text>
                            <Flex
                                alignItems="center"
                                color="gray.400"                                      
                            >
                                <Text fontSize="xs" color="gray.400" > Confi </Text>
                                <Text fontSize="sm" mx="0.5rem" color="gray.400" >2021 - Atualmente</Text>
                            </Flex>
                        </Box>
                    </Box>
                    <Box mt="1rem">
                        <Text color="purple.400" fontSize="md" fontWeight="500">Graduação</Text>
                        <Box lineHeight="1.25rem">
                            <Text fontSize="md" color="gray.50">Sistemas de Informação</Text>
                            <Flex
                                alignItems="center"
                                color="gray.400"                                      
                            >
                                <Text fontSize="xs" color="gray.400" > Centro Universitário CESMAC</Text>
                                <Text fontSize="sm" mx="0.5rem" color="gray.400" >- 2018</Text>
                            </Flex>
                        </Box>
                    </Box>
                </GridItem>

                <GridItem colSpan={!isWideVersion ? 2 : 1} mt={["1rem", "0rem"]}>
                    <Box>
                        <Text color="purple.400" fontSize="md" fontWeight="500">Cursos e Bootcamps</Text>
                        <Box >
                            <Text fontSize="lg" color="gray.50">ReactJS</Text>
                            <Flex
                                alignItems="center"
                                color="gray.400"                                      
                            >
                                <Text fontSize="xs" color="gray.400" > Rocketseat</Text>
                                <Text fontSize="sm" mx="0.5rem" color="gray.400" > - 2021</Text>
                            </Flex>
                        </Box>
                        <Box >
                            <Text fontSize="lg" color="gray.50">React Native</Text>
                            <Flex
                                alignItems="center"
                                color="gray.400"                                      
                            >
                                <Text fontSize="xs" color="gray.400" > Rocketseat</Text>
                                <Text fontSize="sm" mx="0.5rem" color="gray.400" > - 2022</Text>
                            </Flex>
                        </Box>
                    </Box>          
                </GridItem>

                <GridItem 
                    colSpan={2}
                    align="center"
                    w="100%"
                    my="1rem"
                    position={["relative", "relative", "relative", "absolute"]}
                    bottom="0.5rem"

                >
                    <Text color="purple.400" fontSize="md" fontWeight="500" mb="0.25rem">Tecnologias e Frameworks</Text>
                    <Technologies/>
                </GridItem>
            </Grid>
        </Flex>
    )
}
