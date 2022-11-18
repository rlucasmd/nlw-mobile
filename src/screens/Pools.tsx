import { VStack, Icon, useToast, FlatList } from 'native-base';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Octicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { api } from '../services/api';
import { useCallback, useState } from 'react';
import { PoolCard, PoolCardProps } from '../components/PoolCard';
import { Loading } from '../components/Loading';
// import { EmptyMyPoolList } from '../components/EmptyMyPoolList';
import { EmptyPoolList } from '../components/EmptyPoolList';

interface ResponseProps {
  pools: PoolCardProps[];
}

function Pools() {
  const { navigate } = useNavigation();
  const toast = useToast();
  const [pools, setPools] = useState<PoolCardProps[]>([] as PoolCardProps[]);
  const [isLoading, setIsLoading] = useState(true);
  useFocusEffect(useCallback(() => {
    fetchPools();
  }, []));
  async function fetchPools() {
    setIsLoading(true);
    try {
      const poolsResponse = await api.get<ResponseProps>('/pools');
      console.log(poolsResponse.data.pools);
      setPools(poolsResponse.data.pools);
    } catch (err) {
      console.log(err);
      toast.show({
        title: "Error ao carregar bolões",
        placement: "top",
        bgColor: "red.500"
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack mx={5} mt={6} borderBottomColor="gray.600" borderBottomWidth={1} pb={4} mb={4}>
        <Button
          leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
          title="Buscar bolão por código"
          onPress={() => navigate('findPool')}
        />
      </VStack>
      {
        isLoading
          ?
          <Loading />
          :
          <FlatList
            data={pools}
            keyExtractor={item => item.id}
            renderItem={
              ({ item }) => (
                <PoolCard
                  data={item}
                  onPress={() => navigate('details', { id: item.id })}
                />
              )
            }
            px={4}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{
              pb: 90
            }}
            ListEmptyComponent={() => (<EmptyPoolList />)}
          />
      }
    </VStack>
  );
}

export { Pools };