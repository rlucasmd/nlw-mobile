import { Box, FlatList, useToast } from 'native-base';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { GameProps, Game } from './Game';
import { Loading } from './Loading';

interface Props {
  poolId: string;
}
interface ResponseGameProps {
  games: GameProps[];
}

function Guesses({ poolId }: Props) {

  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<GameProps[]>([]);
  const [firstTeamPoints, setFirstTeamPoints] = useState('');
  const [secondTeamPoints, setSecondTeamPoints] = useState('');
  const toast = useToast();

  useEffect(() => {
    fetchGames();
  }, [poolId]);

  async function handleGuessConfirm(gameId: string) {
    // console.log("Points :", firstTeamPoints, secondTeamPoints);
    if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
      return toast.show({
        placement: 'top',
        bgColor: 'red.500',
        title: 'Informe um palpite válido'
      });
    }
    try {
      await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints)
      });
      // console.log({ firstTeamPoints, secondTeamPoints });
      toast.show({
        placement: 'top',
        bgColor: 'green.500',
        title: 'Palpite cadastrado com sucesso'
      });
      fetchGames();
    } catch (err) {
      toast.show({
        placement: 'top',
        title: 'Erro ao confirmar palpite',
        bgColor: 'red.500'
      });
      console.error(err);
    }
  }

  async function fetchGames() {
    setIsLoading(true);
    try {
      const response = await api.get<ResponseGameProps>(`/pools/${poolId}/games`);
      //console.log(response.data.games);
      setGames(response.data.games);
    } catch {
      toast.show({
        placement: 'top',
        title: 'Erro ao trazer jogos',
        bgColor: 'red.500'
      });
    } finally {
      setIsLoading(false);
    }
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <FlatList
      data={games}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Game
          data={item}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
          onGuessConfirm={() => handleGuessConfirm(item.id)}
        />
      )}
      _contentContainerStyle={{ pb: 20 }}
    />
  );
}

export { Guesses }