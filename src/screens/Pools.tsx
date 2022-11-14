import { VStack, Icon } from 'native-base';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Octicons } from '@expo/vector-icons';

function Pools() {
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Meus bolões" />
            <VStack mx={5} mt={6} borderBottomColor="gray.600" borderBottomWidth={1} pb={4} mb={4}>
                <Button
                    leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
                    title="Buscar bolão por código"
                />
            </VStack>
        </VStack>
    );
}

export { Pools };