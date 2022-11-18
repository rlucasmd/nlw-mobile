import { useToast, VStack } from "native-base";
import { Header } from "../components/Header";

import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { api } from "../services/api";
import { PoolCardProps } from '../components/PoolCard';
import { PoolHeader } from "../components/PoolHeader";

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
  const [data, setData] = useState<PoolCardProps>({} as PoolCardProps);
  const { id } = route.params as RouteParams;

  async function fetchPoolDetails() {
    setIsLoading(true);
    try {
      const response = await api.get<PoolResponseData>(`/pools/${id}`);
      setData(response.data.pool);
    } catch (err) {
      console.log(err);
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
    <VStack flex={1} bgColor="gray.800">
      <Header
        title={data.title}
        showBackButton
        showShareButton
      />
      {
        data._count?.participants > 0 ?
          <VStack px={5} flex={1}>
            <PoolHeader
              _count={data._count}
              owner={data.owner}
              participants={data.participants}
              title={data.title}
              code={data.code}
            />
          </VStack>
          :
          ''
      }
    </VStack>
  );
}

export { Details };