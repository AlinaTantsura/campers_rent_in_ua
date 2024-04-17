import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./operations";

const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const advertsReducer = advertsSlice.reducer;