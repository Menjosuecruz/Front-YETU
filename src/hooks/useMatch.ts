import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/axios';

// Funções puras de API
const fetchMatches = async () => {
  const { data } = await api.get('/matches');
  return data;
};

const createMatch = async (matchData: { entrepreneurId: string, investorId: string }) => {
  const { data } = await api.post('/matches/generate', matchData);
  return data;
};

// O Hook customizado
export const useMatch = () => {
  const queryClient = useQueryClient();

  // Buscar todos os matches
  const { data: matches, isLoading } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches
  });

  // Criar um novo match
  const mutation = useMutation({
    mutationFn: createMatch,
    onSuccess: () => {
      // Invalida a query de 'matches' para forçar o refetch dos dados
      queryClient.invalidateQueries({ queryKey: ['matches'] });
    }
  });

  return {
    matches,
    isLoading,
    generateMatch: mutation.mutate,
    isGenerating: mutation.isPending
  };
};