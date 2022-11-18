import { Heading, HStack, Text, VStack } from 'native-base';
import { ParticipantProps, Participants } from './Participants';

interface PoolHeaderProps {
  _count: {
    participants: number;
  };
  title: string;
  code: string;
  participants: ParticipantProps[],
  owner: {
    name: string;
  }
}

function PoolHeader({ title, participants, owner, _count, code }: PoolHeaderProps) {
  return (
    <HStack
      w="full"
      h={20}
      bgColor="transparent"
      borderBottomWidth={1}
      borderBottomColor="gray.600"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
      p={4}
    >
      <VStack ml={-4}>
        <Heading color="white" fontSize="md" fontFamily="heading">
          {title}
        </Heading>
        <HStack>
          <Text color="gray.200" fontSize="xs" mr={1}>
            Código:
          </Text>
          <Text color="gray.200" fontSize="xs" fontFamily="heading">
            {code.toUpperCase()}
          </Text>
        </HStack>
      </VStack>
      <Participants
        count={_count.participants}
        participants={participants}
      />
    </HStack>
  );

}

export { PoolHeader }