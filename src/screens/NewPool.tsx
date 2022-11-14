import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";


function NewPool() {
    return (
        <VStack flex={1} bgColor="gray.900" >
            <Header title="Criar novo Bolão" />
            <VStack mt={8} mx={5} alignItems="center">
                <Logo />
                <Heading fontFamily="heading" fontSize="xl" my={8} textAlign="center" color="white">
                    Crie seu próprio bolão da copa{'\n'} e compartilhe entre amigos!
                </Heading>
                <Input
                    placeholder="Qual o nome do seu bolão"
                    mb={2}
                />
                <Button
                    title="Criar meu bolão"
                />

                <Text color="gray.200" textAlign="center" fontSize="sm" px={10} mt={4}>
                    Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
                </Text>
            </VStack>
        </VStack>
    );
}

export { NewPool };