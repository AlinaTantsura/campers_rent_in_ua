import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        items: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [],
        currentItemInfo: null,
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
        addCurrentItemInfo(state, action) {
            state.currentItemInfo = action.payload;
        }
    }

});

export const { addFavorite, deleteFavorite, addCurrentItemInfo } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;