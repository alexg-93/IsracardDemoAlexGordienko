import { useAppDispatch, useAppSelector } from "./useRedux";
import { addFavoriteBook, removeFavoriteBook } from "../store/booksReducer/favoriteBooks.slice";
import { BookTyped } from "../services/harryPotterBooks.types";
import { selectFavoriteBooks } from "../store/selectors/selectors";

export const useFavorite = (book: BookTyped) => {

    const dispatch = useAppDispatch();

    // Use the memoized selector to get the favorites list
    const favorites = useAppSelector(selectFavoriteBooks);

   // Check if the book is already in favorites if yes remove else add the book
   const isFavorite = favorites.some((favBook) => favBook.number === book.number);

    const toggleFavorite = (book: BookTyped) => {
        if (isFavorite) {
          dispatch(removeFavoriteBook({ number: book.number }));
        } else {
          dispatch(addFavoriteBook(book));
        }
      };

     
    return { toggleFavorite , isFavorite };
    
};
