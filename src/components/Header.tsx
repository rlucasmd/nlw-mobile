import { Box, HStack, Text, VStack } from "native-base";
import { CaretLeft, Export } from 'phosphor-react-native';
import { Platform, StatusBar } from "react-native";
import { ButtonIcon } from "./ButtonIcon";

interface HeaderProps {
    title: string;
    showBackButton?: boolean;
    showShareButton?: boolean;
}

function Header({ title, showBackButton = false, showShareButton = false }: HeaderProps) {
    const EmptyBox = () => (<Box w={6} h={6} />)
    return (
        <HStack w="full" bgColor="gray.800" h={24} alignItems="center" pb={4} px={5} pt={Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                {
                    showBackButton ?
                        <ButtonIcon icon={CaretLeft} /> : <EmptyBox />
                }
                <Text color="white" fontSize="md" fontFamily="medium" textAlign="center">{title}</Text>
                {
                    showShareButton ?
                        <ButtonIcon icon={Export} /> : <EmptyBox />
                }
            </HStack>

        </HStack >
    );
}

export { Header };