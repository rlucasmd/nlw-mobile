import { Heading, Text, useToast, VStack } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { api } from "../services/api";
import { useState } from "react";


function NewPool() {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  async function handleNewPool() {
    if (!title.trim()) {
      return toast.show({
        title: 'Erro ao criar bolão, informe um nome.',
        placement: 'top',
        bgColor: 'red.500'
      });
    }
    try {
      setIsLoading(true);
      const pool = await api.post('/pools', { title });
      //console.log(pool);
      toast.show({
        title: 'Bolão criado com sucesso.',
        placement: 'top',
        bgColor: 'green.500'
      });
      setTitle('');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }


  }
  return (
    <VStack flex={1} bgColor="gray.900" >
      <Header title="Criar novo Bolão" />
      <VStack mt={8} mx={5} alignItems="center">
        <Logo />
        <Heading fontFamily="heading" fontSize="xl" my={8} textAlign="center" color="white">
          Crie seu próprio bolão da copa{'\n'} e compartilhe entre amigos!
        </Heading>
        <Input
          onChangeText={setTitle}
          placeholder="Qual o nome do seu bolão"
          mb={2}
          value={title}
        />
        <Button
          title="Criar meu bolão"
          onPress={handleNewPool}
          isLoading={isLoading}
        />

        <Text color="gray.200" textAlign="center" fontSize="sm" px={10} mt={4}>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
}

export { NewPool };