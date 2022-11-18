import { useNavigation } from "@react-navigation/native";
import { Pressable, Row, Text } from "native-base";

interface Props {
  code: string;
}

function EmptyMyPoolList({ code }: Props) {
  const { navigate } = useNavigation();
  return (
    <Row flexWrap="wrap" justifyContent="center" p={4}>
      <Text color="gray.200" fontSize="sm">
        Esse bolão ainda não tem participantes, que tal
      </Text>

      <Pressable
        textDecoration="underline" textDecorationLine="underline" color="yellow.500" onPress={() => navigate('findPool')}
      >
        <Text>
          compartilhar o código
        </Text>
      </Pressable>

      <Text color="gray.200" fontSize="sm" mx={1}>
        do bolão com alguém ?
      </Text>

      <Text color="gray.200" fontSize="sm" mr={1}>
        Use o código
      </Text>

      <Text color="gray.200" fontSize="sm" textAlign="center" fontFamily="heading">
        {code}
      </Text>

    </Row>
  );
}

export { EmptyMyPoolList };