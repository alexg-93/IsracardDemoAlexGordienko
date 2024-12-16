import { useQuery } from 'react-query';
import { fetchBooks } from '../services/harryPottersBooks.services';

export const useFetchBooks = () => {
  const { data, isLoading, error } = useQuery('books', fetchBooks ,{
    staleTime: 1000 * 60 * 60 * 24, // 24 hours in milliseconds
  });
  return { data, isLoading, error };
};
