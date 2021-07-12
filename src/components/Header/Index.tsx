import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo'
import { SocialMedia } from './SocialMedia'

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
            w="100vw"
            zIndex="10"
            bg="black"
        >
            <Flex
                w={["100vh", "1440px"]}
                justifyContent={["center" ,"space-between"]}
                alignItems="center"
                px="2rem"
            >
                <Logo/>

                {isWideVersion &&
                    <SocialMedia/>
                }
                
            </Flex>
        </Flex>
    )
}