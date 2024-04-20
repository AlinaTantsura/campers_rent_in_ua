import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./advertsSlice";
import { favoriteReducer } from "./favorites/favoritesSlice";

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        favorites: favoriteReducer
    }
})