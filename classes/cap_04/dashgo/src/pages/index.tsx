import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxW={360} bg='gray.800' p={8} borderRadius={8} direction="column">
        <Stack spacing={4}>
          <Input type="email" label="Digite seu email:" name="email"></Input>
          <Input type="password" label="Senha:" name="password"></Input>
        </Stack>
        <Button type="submit" mt={6} colorScheme='pink' size="lg">Entrar</Button>
      </Flex>
    </Flex>
  ) 
}
