import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        items: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []
    },
    reducers: {
        addFavorite(state, action) {
            state.items.push(action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.items))
        },
        deleteFavorite(state, action) {
            const index = state.items.findIndex(item => item.name === action.payload);
            state.items.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(state.items))
        },
    }

});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;