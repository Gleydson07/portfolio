import { Flex, Text, Image, Box, Avatar, Link } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from 'react'

export function CardUser(){
    const [myAge, setMyAge] = useState<number>()
     // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

    useEffect(() => {
        const now = new Date();
        const past = new Date('1992-02-12');
        const diff = Math.abs(now.getTime() - past.getTime());
        const year = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365));
        setMyAge(year-1)
    }, [])

    return (
        <Flex
            width="350px"
            height="100%"
            minHeight="600px"
            border="2px dashed #71809699"
            bg="#05050599"
            py="8"
            px="6"
            rounded="md"
            align="flex-start"
            flexDir="column"
        >
            <Flex
                width="100%"
                justify="space-between"
                align="center"
            >
                <Avatar 
                    src="https://avatars.githubusercontent.com/u/17955465?v=4"
                    size="lg"
                    border="4px solid #553C9A"
                />

                <Flex
                    flexDir="column"
                    align="left"
                    justify="center"
                >
                    <Text as="span" fontWeight="500" fontSize="xl">Gleydson</Text>
                    <Text fontSize="">Albuquerque da Silva Santos</Text>
                    <Text as="span" fontSize="sm">{myAge} anos</Text>
                </Flex>

            </Flex>

            <Flex
                width="100%"
                justify="space-between"
                flexDir="column"
                align="left"
                mt="1rem"
                lineHeight="1.75rem"
            >
                <Text fontSize="lg" fontWeight="500" color="purple.300">Dados Pessoais</Text>
                <Text fontSize="sm">&nbsp;&nbsp;gassantos.dev@gmail.com</Text>
                <Text fontSize="sm">&nbsp;&nbsp;(82) 98111-4246</Text>                    
                <Text fontSize="sm">&nbsp;&nbsp;Alagoas, BRA</Text>
            </Flex>

            <Flex
                width="100%"
                justify="space-between"
                flexDir="column"
                align="left"
                mt="1rem"
                lineHeight="1.5rem"
            >
                <Text fontSize="lg" fontWeight="500" color="purple.300">Dados Acadêmicos e Profissionais</Text>

                <Text fontSize="sm" color="gray.500" mt="0.5rem">&nbsp;&nbsp;Graduação</Text>
                <Text fontSize="sm">&nbsp;&nbsp;Bacharelado em Sistemas de Informação/2018</Text>

                <Text fontSize="sm" color="gray.500" mt="0.5rem">&nbsp;&nbsp;Curso de técnicos</Text>
                <Text fontSize="sm">&nbsp;&nbsp;ReactJS - Rocketseat/2021</Text>
                <Text fontSize="sm">&nbsp;&nbsp;Postgress - Digital Innovation One/2021</Text>
                <Text fontSize="sm">&nbsp;&nbsp;Git e Github - Digital Innovation One/2021</Text>
                <Text fontSize="sm">&nbsp;&nbsp;API'S com NodeJS + MongoDB - Udemy/2020</Text>

                <Text fontSize="sm" color="gray.500" mt="0.5rem">&nbsp;&nbsp;Experiência Profissional</Text>
                <Text fontSize="sm" as="span">&nbsp;&nbsp;Humm, você pode ter o privilégio de ter uma participação marcante em minha jornada.</Text>
                <Link href="https://www.linkedin.com/in/gleydson07/" isExternal >
                        <Text color="cyan.300">Conceda-me uma oportunidade.</Text>
                </Link>
            </Flex>
        

        </Flex>
    )
}