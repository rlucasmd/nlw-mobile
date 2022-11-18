import { Heading, Text, useToast, VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { api } from "../services/api";

function FindPool() {
  const toast = useToast();
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');

  async function handleJoinPool() {
    setIsLoading(true);
    try {
      if (!code.trim()) {
        return toast.show({
          title: 'Código vazio, por favor insira um código válido.',
          placement: 'top',
          bgColor: 'red.500'
        })
      }
      await api.post('/pools/join', { code });

      toast.show({
        title: 'Você entrou no bolão com sucesso.',
        placement: 'top',
        bgColor: 'green.500'
      })

      navigate('pools');


    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      if (error.response?.data?.message === "Pool not found") {
        return toast.show({
          title: 'Não foi possível encontrar o bolão',
          placement: 'top',
          bgColor: 'red.500'
        });
      }
      if (error.response?.data?.message === 'You already joined this pool') {
        return toast.show({
          title: 'Você já está nesse bolão',
          placement: 'top',
          bgColor: 'red.500'
        });
      }

    }

  }

  return (
    <VStack flex={1} bgColor="gray.900" >
      <Header showBackButton title="Buscar por código" />
      <VStack mt={8} mx={5} alignItems="center">
        <Heading fontFamily="heading" fontSize="xl" mb={8} textAlign="center" color="white">
          Encontre um bolão através de seu código único
        </Heading>
        <Input
          placeholder="Qual o código do bolão"
          mb={2}
          onChangeText={setCode}
          value={code}
          autoCapitalize="characters"
        />
        <Button
          title="Buscar bolão"
          isLoading={isLoading}
          onPress={handleJoinPool}
        />
      </VStack>
    </VStack>
  );
}

export { FindPool };