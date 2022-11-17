import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from '@react-navigation/native';


function FindPool() {
  const navigation = useNavigation();
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
        />
        <Button
          title="Buscar bolão"
        />
      </VStack>
    </VStack>
  );
}

export { FindPool };