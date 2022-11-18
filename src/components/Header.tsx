import { Box, HStack, Text, VStack } from "native-base";
import { CaretLeft, Export } from 'phosphor-react-native';
import { Platform, StatusBar } from "react-native";
import { ButtonIcon } from "./ButtonIcon";
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
  onShare?: () => void;
}

function Header({ title, showBackButton = false, showShareButton = false, onShare }: HeaderProps) {
  const EmptyBox = () => (<Box w={6} h={6} />);
  const navigation = useNavigation();
  return (
    <HStack w="full" bgColor="gray.800" h={24} alignItems="center" pb={4} px={5} pt={Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}>
      <HStack w="full" alignItems="center" justifyContent="space-between">
        {
          showBackButton ?
            <ButtonIcon onPress={() => navigation.navigate('pools')} icon={CaretLeft} /> : <EmptyBox />
        }
        <Text color="white" fontSize="md" fontFamily="medium" textAlign="center">{title}</Text>
        {
          showShareButton ?
            <ButtonIcon icon={Export} onPress={onShare} /> : <EmptyBox />
        }
      </HStack>

    </HStack >
  );
}

export { Header };