import { Flex, Text, Image, Box, Link, Icon, useBreakpointValue, Tooltip } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';

import {SiGithub} from 'react-icons/si'
import {AiOutlineGlobal} from 'react-icons/ai'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IconType } from 'react-icons/lib';
import { ReactElement, useEffect, useState } from 'react';

interface ICardProps {
    images: string[];
    title: string;
    description: string;
    technology: {
        icon: IconType,
        tooltip: String
    }[];
    repository: string;
    page?: string;
}

export function Card({images, title, description, technology, repository, page}: ICardProps){
    const [imageList, setImageList] = useState<ReactElement[]>();    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        const data = images.map(img => (            
           <Image 
                key={img}
                src={img}
                alt="pokemon"
                h="250px"
                borderRadius="0.5rem 0.5rem 0 0"
            />
        ))
        setImageList(data)
    }, [images])

    return (
        <Flex
            flexDir="column"
            justifyContent="space-between"
            bg="gray.900"
            w="300px"
            h="500px"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            borderRadius="0.5rem"
            overflow="hidden"
        >
            {images.length >= 2 && (
                <Carousel
                    width="100%"
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    swipeable={isWideVersion}
                    emulateTouch={isWideVersion}
                    dynamicHeight={true}
                    infiniteLoop={true}
                    interval={5000}
                    transitionTime={1000}
                >
                    {imageList}
                </Carousel>
            )}

            <Box mx="1rem" h="100%" position="relative">
                <Text 
                    fontSize="2xl"
                    py="0.25rem"
                    fontWeight="500"
                    textAlign="center"
                >
                    {title}
                </Text>

                <Text 
                    fontSize="sm"
                    color="gray.500"
                    mb="0.25rem"
                    textAlign="left"
                >   
                    {description}
                </Text>

                <Box textAlign="right" mb="0.25rem">
                    {technology.map((item) => 
                        <Tooltip label={item.tooltip} fontSize="xs">
                            <span>
                                <Icon key={String(item.icon)}
                                    as={item.icon} 
                                    fontSize="18"
                                    color="gray.500"
                                    mx="0.25rem"
                                />
                            </span>
                        </Tooltip>
                    )}
                </Box>
            
                <Box 
                    w="100%"
                    bg="gray.900"
                    textAlign="center"
                    position="absolute"
                    bottom="1rem"
                >
                    <Link href={repository} isExternal  mx="0.5rem">
                        <Icon 
                            as={SiGithub} 
                            fontSize="24"
                            transition="color 0.3s"
                            color="cyan.300"
                            _hover={{color: "cyan.600"}}
                        />
                    </Link>
                    {page && (
                        <Link href={page} isExternal mx="0.5rem">
                            <Icon 
                                as={AiOutlineGlobal} 
                                fontSize="24"
                                transition="color 0.3s"
                                color="cyan.300"
                                _hover={{color: "cyan.600"}}
                            />
                        </Link>
                    )}
                </Box>
            </Box>
        </Flex>
    )
}
