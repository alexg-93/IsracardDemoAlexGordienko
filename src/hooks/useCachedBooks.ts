import { useQueryClient } from "react-query";
import { BookTyped } from "../services/harryPotterBooks.types";

export const useCachedBooks = () =>{

    const queryClient = useQueryClient();

   // Retrieve cached books data
  const getCachedBooks = () => {
    return queryClient.getQueryData("books") as BookTyped[] ?? [];
  };

    const findBookById = (bookId : number) => {
        const books = getCachedBooks();
        return books?.find((book: BookTyped) => book?.number === bookId);
    }

    return { getCachedBooks, findBookById };
}