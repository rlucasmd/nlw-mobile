import { Center, Icon, NativeBaseProvider, Text } from "native-base";
import { THEME } from "../styles/themes";
import Logo from '../assets/logo.svg';
import { Button } from "../components/Button";
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from "../hooks/useAuth";

function SignIn() {
  const { signIn } = useAuth();

  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor="gray.900" p={7}>
        <Logo width={212} height={40} />
        <Button
          title="Entrar com o google"
          type="SECONDARY"
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
          mt={12}
          onPress={signIn}
        />
        <Text color="white" textAlign="center" mt={4}>
          Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
        </Text>
      </Center>
    </NativeBaseProvider >
  );
}

export { SignIn };