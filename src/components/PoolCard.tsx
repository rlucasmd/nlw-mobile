import { Heading, HStack, Text, VStack } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ParticipantProps, Participants } from './Participants';

export interface PoolCardProps {
  id: string;
  code: string;
  title: string;
  ownerId: string;
  owner: {
    name: string;
  };
  createdAt: string;
  participants: ParticipantProps[];
  _count: {
    participants: number;
  }
}
interface Props extends TouchableOpacityProps {
  data: PoolCardProps
}
function PoolCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
    >
      <HStack
        w="full"
        h={20}
        bgColor="gray.800"
        borderBottomWidth={3}
        borderBottomColor="yellow.300"
        justifyContent="space-between"
        alignItems="center"
        rounded="sm"
        mb={3}
        p={4}
      >
        <VStack>
          <Heading color="white" fontSize="md" fontFamily="heading">
            {data.title}
          </Heading>
          <Text color="gray.200" fontSize="xs">
            Criado por {data.owner.name}
          </Text>
        </VStack>
        <Participants
          count={data._count.participants}
          participants={data.participants}
        />
      </HStack>
    </TouchableOpacity>
  );

}

export { PoolCard };