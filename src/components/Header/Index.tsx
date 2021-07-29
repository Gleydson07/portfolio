import { Flex, Grid, IconButton, Link, Menu, MenuButton, MenuList, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo'

import { RiMenuLine } from 'react-icons/ri'

export function Header(){    
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true
    })
    return (
        <Flex
            as="header"
            position="fixed"
            alignItems="center"
            justifyContent='center'
            zIndex="10"
            w="100vw"
            bg="black"
        >
            <Flex
                w={["100vh", "1440px"]}
                flexDirection={["row-reverse", "row"]}
                justifyContent="space-between"
                alignItems="center"
                px="2rem"
            >
                <Logo/>

                {isWideVersion ? (
                    <Grid 
                        templateColumns="repeat(3, 1fr)" 
                        gap="1rem"
                        fontWeight="normal"
                        fontSize="lg"
                        textAlign="center"
                        textShadow="0.25rem 0.25rem 0.5rem #00B5D8"
                        textDecoration="none"
                    >
                        <Link 
                            href="#home"
                            w="5rem"
                            transition="all 0.2s"
                            color="#00B5D8"
                            _hover={{fontWeight:"bold", color:"#76E4F7"}}
                            outline="none"
                            border="none"
                        >
                            Início
                        </Link>
                        <Link 
                            href="#about"
                            w="5rem"
                            transition="all 0.2s"
                            color="#00B5D8"
                            _hover={{fontWeight:"bold", color:"#76E4F7"}}
                        >
                            Sobre
                        </Link>
                        <Link 
                            href="#portfolio"
                            w="5rem"
                            transition="all 0.2s"
                            color="#00B5D8"
                            _hover={{fontWeight:"bold", color:"#76E4F7"}}
                        >
                            Portfólio
                        </Link>
                    </Grid>
                ) : (
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<RiMenuLine  size="2rem"/>}
                            variant="none" 
                            color="#00B5D8"
                        />
                        <MenuList
                            bgColor="white.900"
                            color="gray.900"
                            p="0.5rem"
                            maxW="50px"
                        >
                            <Flex flexDirection="column">
                                <Link 
                                    href="#home"
                                    textDecoration="none"
                                    borderBottom="1px solid #f7f7f7"
                                >
                                    Início
                                </Link>
                                <Link 
                                    href="#about"
                                    textDecoration="none"
                                    borderBottom="1px solid #f7f7f7"
                                >
                                    Sobre
                                </Link>
                                <Link 
                                    href="#portfolio"
                                    textDecoration="none"
                                    borderBottom="1px solid #f7f7f7"
                                >
                                    Portfólio
                                </Link>
                            </Flex>
                        </MenuList>
                    </Menu>
                )}
                
            </Flex>
        </Flex>
    )
}