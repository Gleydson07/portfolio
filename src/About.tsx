import { useEffect, useState } from 'react';
import { Flex, Text, Image, Box, Divider, Grid, Progress, GridItem, Button, Icon } from '@chakra-ui/react';

import VisibilitySensor from "react-visibility-sensor";
import Typed from 'react-typed';

import meImg from './images/g1.png'
import reactImg from './images/reactjs.png'
import cssImg from './images/css-3.png'
import htmlImg from './images/html-5.png'
import javascriptImg from './images/javascript.png'
import nodeImg from './images/nodejs.png'
import vscodeImg from './images/vscode.png'
import gitImg from './images/git.png'
import nextImg from './images/nextjs.png'
import figmaImg from './images/figma.png'
import {TiArrowDownThick, TiArrowUpThick} from 'react-icons/ti'

export function About(){
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState("");
    const [showAnimation, setShowAnimation] = useState(false);    
    const [myAge, setMyAge] = useState<number>();

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
                h="100vh"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
            >            
                <Flex
                    w="1100px"
                    h="100%"
                    flexDir="column"
                    mt="4rem"
                >
                    <Text 
                        fontSize="3xl" 
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
                        h="650px"
                        w="100%"
                        bg="dark.50"
                        py="2rem"
                        px="3rem"
                        borderRadius="0.5rem"
                        flexDir="column"
                    >
                        <Flex>
                            <Image 
                                src={meImg}
                                h="6rem"
                                borderRadius="0.5rem"
                                border="4px solid #0BC5EA"
                            />

                            <Flex
                                align="left"
                                ml="2rem"
                                flexDir="column"
                                justifyContent='space-around'
                            >
                                <Text as="span" fontWeight="500" fontSize="2xl">Gleydson Albuquerque da Silva Santos</Text>
                                <Text fontSize="lg">Viçosa-AL, BRASIL</Text>
                                <Text as="span" fontSize="sm">{myAge} anos</Text>
                            </Flex>

                            <Divider mx="2rem" h="100%" orientation="vertical" colorScheme="cyan"/>
                            <Flex
                                flexDir="column"
                            >
                                <Box >
                                    <Text fontSize="md">e-mail: gassantos.dev@gmail.com</Text>
                                    <Text fontSize="md">fone: (82) 98111-4246</Text>
                                </Box>
                            </Flex>
                        </Flex>

                        <Flex
                            w="100%"
                            h="100%"
                            mt="2.5rem"
                        >
                            <Flex
                                flex="1"
                                flexDir="column"
                                align="left"
                                lineHeight="1.5rem"
                            >
                                <Text
                                    color="cyan.400"
                                    fontSize="2xl"
                                    fontWeight="600"
                                >
                                    Skills
                                </Text>

                                <Box mr="3rem">
                                    <Box mt="1rem">
                                        <Text color="gray.400">HTML</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={90}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">CSS</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={90}/>
                                    </Box>
                                    <Box mt="1rem">
                                        <Text color="gray.400">JavaScript</Text>
                                        <Progress mt="0.25rem" size="sm" colorScheme="purple" value={85}/>
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
                                    fontSize="2xl"
                                    fontWeight="600"
                                >
                                    Dados Profissionais e Acadêmicos
                                </Text>
                                <Grid
                                    templateColumns="repeat(2, 1fr)"
                                    bg="dark.100"
                                    mt="1rem"
                                    h="100%"
                                    borderRadius="0.5rem"
                                    py="1rem"
                                    px="2rem"
                                >
                                    <GridItem>
                                        <Box>
                                            <Text color="purple.400" fontSize="md" fontWeight="500">Experiências Profissionais</Text>
                                            <Box lineHeight="1.25rem">
                                                <Text fontSize="md" color="gray.50">Em busca!! </Text>
                                                <Flex
                                                    alignItems="center"
                                                    color="gray.400"                                      
                                                >
                                                    <Text fontSize="xs" color="gray.400" > Sua empresa aqui 🥰</Text>
                                                    <Text fontSize="sm" mx="0.5rem" color="gray.400" > - Forever</Text>
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
                                                    <Text fontSize="sm" mx="0.5rem" color="gray.400" > - 2014 - 2018</Text>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    </GridItem>

                                    <GridItem>
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
                                    >
                                        <Text color="purple.400" fontSize="md" fontWeight="500">Tecnologias e Frameworks</Text>
                                        <Grid templateColumns="repeat(9, 1fr)" mt="1rem" b="1rem">
                                            <Image src={javascriptImg} alt="CSS" h="36px"/>
                                            <Image src={htmlImg} alt="CSS" h="36px"/>
                                            <Image src={cssImg} alt="CSS" h="36px"/>
                                            <Image src={reactImg} alt="CSS" h="36px"/>
                                            <Image src={nextImg} alt="CSS" h="36px"/>
                                            <Image src={nodeImg} alt="CSS" h="36px"/>
                                            <Image src={vscodeImg} alt="CSS" h="36px"/>
                                            <Image src={gitImg} alt="CSS" h="36px"/>
                                            <Image src={figmaImg} alt="CSS" h="36px"/>
                                        </Grid>
                                    </GridItem>
                                </Grid>
                            </Flex>
                        </Flex>
                        
                    </Flex>
                </Flex>            
                
                <Grid gap="2rem" templateColumns="repeat(2, 1fr)">
                    <Button
                        as="a"
                        href="#portfolio"      
                        bottom="2rem"
                        height="5rem"
                        width="5rem"
                        color="purple.500"
                        bg="transparent"
                        fontSize="1.125rem"
                        fontWeight="700"
                        transition="all 0.3s"
                        _hover={{
                            color: "cyan.400", 
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
                        bottom="2rem"
                        height="5rem"
                        width="5rem"
                        color="purple.500"
                        bg="transparent"
                        fontSize="1.125rem"
                        fontWeight="700"
                        transition="all 0.3s"
                        _hover={{
                            color: "cyan.400", 
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
            </Flex>
    )
}