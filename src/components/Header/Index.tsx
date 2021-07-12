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
            w="100%"
            position="fixed"
            align="center"
            justify="center"
            bg="black"
            zIndex="10"
        >
            <Flex
                w={["100%", "1440px"]}
                justifyContent={["center" ,"space-between"]}
                alignItems="center"
                py="0.5rem"
                px="1rem"
            >
                <Logo/>

                {isWideVersion &&
                    <SocialMedia/>
                }
                
            </Flex>
        </Flex>
    )
}