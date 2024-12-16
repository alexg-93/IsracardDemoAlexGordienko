import { createSlice } from '@reduxjs/toolkit';
import { IFavoriteBookState } from '@/src/types/favoriteBooks/favorite.types';

const initialState: IFavoriteBookState = {
  favorites: [],
};

const favoriteBooksSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {

    /**
     * Adds a book to the favorite list if it's not already exist.
     * @param {object} action - The action payload should contain a book object with `number` property
     */

    addFavoriteBook: (state, action) => {
      const isBookExist = state.favorites.some(book => book.number === action.payload.number);
      if (!isBookExist) {
        state.favorites = [...state.favorites, action.payload];
      }
    },
    
    /**
     * Removes a book from the favorite list if it exist.
     * @param {object} action - The action payload should contain a book object with `number` property
     */

    removeFavoriteBook: (state, action) => {
      state.favorites = state.favorites.filter((book) => book.number !== action.payload.number);
    },
  },
});

export const {addFavoriteBook,removeFavoriteBook} = favoriteBooksSlice.actions;

export default favoriteBooksSlice.reducer;
