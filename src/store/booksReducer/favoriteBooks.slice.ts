import { createSlice } from '@reduxjs/toolkit';
import { IFavoriteBookState } from '@/src/types/favoriteBooks/favorite.types';

const initialState: IFavoriteBookState = {
  favorites: [],
};

const favoriteBooksSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {

    
    addFavoriteBook: (state, action) => {
      const isBookExist = state.favorites.some(book => book.number === action.payload.number);
      if (!isBookExist) {
        state.favorites = [...state.favorites, action.payload];
      }
    },
    
    
    removeFavoriteBook: (state, action) => {
      state.favorites = state.favorites.filter((book) => book.number !== action.payload.number);
    },
  },
});

export const {addFavoriteBook,removeFavoriteBook} = favoriteBooksSlice.actions;



export default favoriteBooksSlice.reducer;
