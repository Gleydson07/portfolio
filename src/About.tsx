import { useEffect, useState } from 'react';
import { Flex, Text, Image, Box, Divider, Grid, Progress, GridItem, Button, Icon, useBreakpointValue } from '@chakra-ui/react';

import VisibilitySensor from "react-visibility-sensor";
import Typed from 'react-typed';

import meImg from './images/me/g1.png'
import reactImg from './images/technologies/reactjs.png'
import cssImg from './images/technologies/css-3.png'
import htmlImg from './images/technologies/html-5.png'
import javascriptImg from './images/technologies/javascript.png'
import typescriptImg from './images/technologies/typescript.png'
import nodeImg from './images/technologies/nodejs.png'
import vscodeImg from './images/technologies/vscode.png'
import gitImg from './images/technologies/git.png'
import nextImg from './images/technologies/nextjs.png'
import figmaImg from './images/technologies/figma.png'
import {TiArrowDownThick, TiArrowUpThick} from 'react-icons/ti'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'

export function About(){
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState("");
    const [showAnimation, setShowAnimation] = useState(false);    
    const [myAge, setMyAge] = useState<number>();    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

   useEffect(() => {
       const now = new Date();
       const past = new Date('1992-02-12');
       const diff = Math.abs(now.getTime() - past.getTime());
       const year = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365));
       setMyAge(year-1)
   }, [])

    useEffect(() => {
        isVisible ? setShowAnimation(true) : setShowAnimation(false);
        isVisible ? setValue("Sobre mim") : setValue("");
    }, [isVisible])

    return (
            <Flex
                id="about"
                h={["100%", "100vh"]}
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                px="2rem"
            >            
                <Flex
                    flexDir="column"
                    w={["100%", "1100px"]}
                    mt={["3rem", "3rem"]}
                >
                    <Text 
                        fontSize={["xl" ,"3xl"]}
                        fontWeight="600"
                        my="1rem"
                        id="title"
                    >
                        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
                            <Typed
                                strings={[`${value}&nbsp;`]}
                                typeSpeed={80}
                                showCursor={true}
                                stopped={showAnimation}
                            />
                        </VisibilitySensor>
                    </Text>
              
                    <Flex
                        w="100%"
                        bg={["dark.100", "dark.50"]}
                        py="2rem"
                        px={["1.5rem" ,"5rem"]}
                        borderRadius="0.5rem"
                        flexDir="column"
                    >
                        {isWideVersion && 
                            <Flex>
                                <Image 
                                    src={meImg}
                                    h="5rem"
                                    borderRadius="0.5rem"
                                    border="4px solid #0BC5EA"
                                />

                                <Flex
                                    align="left"
                                    ml="2rem"
                                    flexDir="column"
                                    justifyContent='space-around'
                                    lineHeight="1.25rem"
                                >
                                    <Text as="span" fontWeight="500" fontSize="2xl">Gleydson Albuquerque da Silva Santos</Text>
                                    <Text fontSize="lg">Viçosa-AL, BRASIL</Text>
                                    <Text as="span" fontSize="sm">{myAge} anos</Text>
                                </Flex>

                                <Divider mx="2rem" h="100%" orientation="vertical" colorScheme="cyan"/>
                                
                                <Flex flexDir="column">
                                    <Box >
                                        <Icon as={AiOutlineMail}/>
                                        <Text fontSize="md" as="span" ml="0.5rem"> gassantos.dev@gmail.com</Text><br/>
                                        <Icon as={AiOutlinePhone}/>
                                        <Text fontSize="md" as="span" ml="0.5rem"> (82) 98111-4246</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        }

                        <Flex
                            mt={["0rem", "2.5rem"]}
                            flexDir={["column-reverse", "row"]}
                        >
                            <Flex
                                flex="1"
                                flexDir="column"
                                align="left"
                                lineHeight="1.5rem"
                            >
                                <Text
                                    color="cyan.400"
                                    fontSize={["lg" ,"2xl"]}
                                    fontWeight="600"
                                    mt={["1rem", "0rem"]}
                                >
                                    Skills
                                </Text>

                                <Box mr={["0rem", "3rem"]}>
                                    <Box mt="1rem">
                                        <Text color="gray.400">HTML</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={90}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">CSS</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={90}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">Typescript</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={88}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">JavaScript</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={80}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">ReactJS</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={70}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">NextJS</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={65}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">Git e Github</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={70}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">NodeJS</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={40}/>
                                    </Box>
                                    {/* <Box mt="1rem">
                                        <Text color="gray.400">React Native</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={25}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">Inglês</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={15}/>
                                    </Box>                                     */}
                                </Box>
                            </Flex>

                            <Flex
                                flex="3"
                                flexDir="column"
                                align="left"
                                lineHeight="1.5rem"
                            >
                                <Text 
                                    color="cyan.400"
                                    fontSize={["lg" ,"2xl"]}
                                    fontWeight="600"
                                >
                                    Dados Profissionais e Acadêmicos
                                </Text>
                                <Grid
                                    templateColumns="repeat(2, 1fr)"
                                    bg={["transparent" ,"dark.100"]}
                                    mt={["0", "1rem"]}
                                    h="100%"
                                    borderRadius="0.5rem"
                                    pt="1rem"
                                    px={["0rem", "2rem"]}
                                >
                                    <GridItem colSpan={!isWideVersion ? 2 : 1}>
                                        <Box>
                                            <Text color="purple.400" fontSize="md" fontWeight="500">Experiências Profissionais</Text>
                                            <Box lineHeight="1.25rem">
                                                <Text fontSize="md" color="gray.50">Em busca!! </Text>
                                                <Flex
                                                    alignItems="center"
                                                    color="gray.400"                                      
                                                >
                                                    <Text fontSize="xs" color="gray.400" > Sua empresa aqui</Text>
                                                    <Text fontSize="sm" mx="0.5rem" color="gray.400" >🥰 - Forever</Text>
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
                                                    <Text fontSize="sm" mx="0.5rem" color="gray.400" >- 03/2018</Text>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    </GridItem>

                                    <GridItem colSpan={!isWideVersion ? 2 : 1} mt={["1rem", "0rem"]}>
                                        <Box>
                                            <Text color="purple.400" fontSize="md" fontWeight="500">Cursos</Text>
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

                                            <Box mt="0.5rem">
                                                <Text fontSize="md" color="gray.50">Git e GitHub</Text>
                                                <Flex
                                                    alignItems="center"
                                                    color="gray.400"                                      
                                                >
                                                    <Text fontSize="xs" color="gray.400" > Digital Innovation One</Text>
                                                    <Text fontSize="sm" mx="0.5rem" color="gray.400" > - 2021</Text>
                                                </Flex>
                                            </Box>

                                            <Box mt="0.5rem">
                                                <Text fontSize="md" color="gray.50">Bancos de dados PostgreSQL</Text>
                                                <Flex
                                                    alignItems="center"
                                                    color="gray.400"                                      
                                                >
                                                    <Text fontSize="xs" color="gray.400" > Digital Innovation One</Text>
                                                    <Text fontSize="sm" mx="0.5rem" color="gray.400" > - 2021</Text>
                                                </Flex>
                                            </Box>

                                            <Box mt="0.5rem">
                                                <Text fontSize="md" color="gray.50">APIs com Nodejs, Express + MongoDB, SQL</Text>
                                                <Flex
                                                    alignItems="center"
                                                    color="gray.400"                                      
                                                >
                                                    <Text fontSize="xs" color="gray.400" > Udemy - Matheus Fraga</Text>
                                                    <Text fontSize="sm" mx="0.5rem" color="gray.400" > - 2020</Text>
                                                </Flex>
                                            </Box>
                                        </Box>          
                                    </GridItem>

                                    <GridItem 
                                        colSpan={2}
                                        align="center"
                                        my="auto"
                                        mt={["1rem", "0rem"]}
                                    >
                                        <Text color="purple.400" fontSize="md" fontWeight="500">Tecnologias e Frameworks</Text>
                                        <Grid templateColumns="repeat(10, 1fr)" mt="1rem" gap="0.25rem">
                                            <Image src={javascriptImg} alt="javascript" h={["24px", "36px"]}/>
                                            <Image src={htmlImg} alt="html" h={["24px", "36px"]}/>
                                            <Image src={cssImg} alt="CSS" h={["24px", "36px"]}/>
                                            <Image src={reactImg} alt="react" h={["24px", "36px"]}/>
                                            <Image src={nextImg} alt="next" h={["24px", "36px"]}/>
                                            <Image src={typescriptImg} alt="typescript" h={["24px", "36px"]}/>
                                            <Image src={nodeImg} alt="node" h={["24px", "36px"]}/>
                                            <Image src={vscodeImg} alt="vscode" h={["24px", "36px"]}/>
                                            <Image src={gitImg} alt="git" h={["24px", "36px"]}/>
                                            <Image src={figmaImg} alt="figma" h={["24px", "36px"]}/>
                                        </Grid>
                                    </GridItem>
                                </Grid>
                            </Flex>
                        </Flex>
                        
                    </Flex>
                </Flex>            
                
                {isWideVersion && 
                    <Grid gap="2rem" templateColumns="repeat(2, 1fr)">
                    <Button
                        as="a"
                        href="#portfolio"      
                        my="1rem"
                        height={["3rem", "5rem"]}
                        width={["3rem", "5rem"]}
                        color="gray.700"
                        bg="transparent"
                        fontSize="1.125rem"
                        fontWeight="700"
                        transition="all 0.3s"
                        _hover={{
                            color: "cyan.700", 
                            fontSize: "3rem",
                            fontWeight: "900",
                        }}
                    >
                        <Icon 
                            as={TiArrowDownThick} 
                            fontSize="3.5rem" 
                        />
                    </Button>
                    <Button
                        as="a"
                        href="#home"      
                        my="1rem"
                        height={["3rem", "5rem"]}
                        width={["3rem", "5rem"]}
                        color="gray.700"
                        bg="transparent"
                        fontSize="1.125rem"
                        fontWeight="700"
                        transition="all 0.3s"
                        _hover={{
                            color: "cyan.700", 
                            fontSize: "3rem",
                            fontWeight: "900"
                        }}
                    >
                        <Icon 
                            as={TiArrowUpThick} 
                            fontSize="3.5rem" 
                        />
                    </Button>
                </Grid>
                }
            </Flex>
    )
}