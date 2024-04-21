import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./operations";

const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filteredItems: [],
        filters: {
            location: '',
            equipment: [],
        }
    },
    reducers: {
        addLocation(state, action) {
            state.filters.location = action.payload;
            if (state.filters.location) state.filteredItems = state.items.filter(item => item.location.toLowerCase().includes(state.filters.location))
            else state.filteredItems = state.items;
        },
        addEquipment(state, action) {
            state.filters.equipment = action.payload.equipment;
            if (state.filters.equipment.length > 0) {
                state.filteredItems = state.items.filter(item => state.filters.equipment.every(eq =>
                {
                    if (eq !== "transmission") return item.details.hasOwnProperty(eq) && item.details[`${eq}`] !== 0
                    else return item.transmission === "automatic"
                }
                ))
            }
            else state.filteredItems = state.items;
        }
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
                state.filteredItems = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { addLocation, addEquipment } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;