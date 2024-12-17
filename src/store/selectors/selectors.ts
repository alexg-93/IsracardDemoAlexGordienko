import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectFavoriteBooks = (state: RootState) => state.favorites;


// Memoized favorite books selector 
export const favoritesSelector = createSelector([selectFavoriteBooks],(favorites) => favorites);
