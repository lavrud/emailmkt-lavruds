// import Head from 'next/head'

import { FormEvent, useState } from 'react'
import {Flex, Image, Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';

export default function Home() {

  const [email, setEmail] = useState('');

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();
    axios.post('/api/subscribe', { email });
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center" 
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%" 
        maxW="500px"
      >
        <Image marginBottom={8} src="/lavruds-burguer-logo.png" alt="LavrudsBurguer" />

        <Text textAlign="center" textTransform="uppercase" fontSize="22px" color="gray.800" marginBottom={5}>
        Cadastre-se para participar das nossas promoções de inaguração!!!
        </Text>

        <Text textAlign="center" fontSize="md" color="gray.400" marginBottom={3}>
        Trazendo a malícia do Brasil para os burguers americanos.
        </Text>
  
        <Input
          placeholder="Seu melhor e-mail"
          backgroundColor="gray.700"
          marginTop={3}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
  
        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          UHUUU QUERO PARTICIPAR 😋
        </Button>
      </Flex>
    </Flex>
  )
}
