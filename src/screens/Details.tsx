import { HStack, useToast, VStack } from "native-base";
import { Header } from "../components/Header";
import { Share } from "react-native";

import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { api } from "../services/api";
import { PoolCardProps } from '../components/PoolCard';
import { PoolHeader } from "../components/PoolHeader";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { Option } from "../components/Option";
import { Guesses } from "../components/Guesses";

interface RouteParams {
  id: string;
}
interface PoolResponseData {
  pool: PoolCardProps
}

function Details() {
  const route = useRoute();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [optionSelected, setOptionSelected] = useState<'guesses' | 'ranking'>('guesses');
  const [poolDetails, setPoolDetails] = useState<PoolCardProps>({} as PoolCardProps);
  const { id } = route.params as RouteParams;

  async function handleCodeShare() {
    await Share.share({ message: poolDetails.code });
  }

  async function fetchPoolDetails() {
    setIsLoading(true);
    try {
      const response = await api.get<PoolResponseData>(`/pools/${id}`);
      setPoolDetails(response.data.pool);
    } catch (err) {
      console.error(err);
      toast.show({
        title: 'Não foi possível carregar os detalhes do bolão.',
        placement: 'top',
        bgColor: 'red.500'
      });
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchPoolDetails();
  }, [id]);
  if (isLoading) {
    return <Loading />
  }
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header
        title={poolDetails.title}
        showBackButton
        showShareButton
        onShare={handleCodeShare}
      />
      {
        poolDetails._count.participants > 0 ?
          (
            <VStack px={5} flex={1}>
              <PoolHeader
                _count={poolDetails._count}
                owner={poolDetails.owner}
                participants={poolDetails.participants}
                title={poolDetails.title}
                code={poolDetails.code}
              />
              <HStack bgColor="gray.800" p={1} rounded={1} mb={4}>
                <Option
                  title="Seus palpites"
                  isSelected={optionSelected === 'guesses'}
                  onPress={() => setOptionSelected('guesses')}
                />
                <Option
                  title="Ranking do grupo"
                  onPress={() => setOptionSelected('ranking')}
                  isSelected={optionSelected === 'ranking'}
                />
              </HStack>
              <Guesses poolId={poolDetails.id} />
            </VStack>
          )
          :
          (
            <EmptyMyPoolList code={poolDetails.code} />
          )
      }

    </VStack>
  );
}

export { Details };