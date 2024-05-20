import { createSlice } from '@reduxjs/toolkit';
import { fetchAllData, fetchData } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filteredItems: [],
    filters: {
      location: '',
      equipment: [],
    },
  },
  reducers: {
    addLocation(state, action) {
      state.filters.location = action.payload;
    },
    addEquipment(state, action) {
      state.filters.equipment = action.payload;
    }
  },
  //   // addEquipment(state, action) {
  //   //   state.filters.equipment = action.payload.equipment;
  //   //   if (state.filters.equipment.length > 0) {
  //   //     state.filteredItems = state.items.filter(item =>
  //   //       state.filters.equipment.every(eq => {
  //   //         if (eq !== 'transmission')
  //   //           return (
  //   //             item.details.hasOwnProperty(eq) && item.details[`${eq}`] !== 0
  //   //           );
  //   //         else return item.transmission === 'automatic';
  //   //       })
  //   //     );
  //   //   } else state.filteredItems = state.items;
  //   // },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload
        state.filteredItems = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload
        if (state.filters.location && state.filters.equipment.length === 0) state.filteredItems = action.payload.filter(item =>
          item.location.toLowerCase()
            .includes(state.filters.location.toLowerCase()));
        else if (state.filters.location && state.filters.equipment.length !== 0) state.filteredItems = action.payload.filter(item =>
          item.location.toLowerCase()
            .includes(state.filters.location.toLowerCase()) && item.details[state.filters.equipment[0]]
          );
        else if (!state.filters.location && state.filters.equipment.length !== 0) {
          state.filteredItems = action.payload.filter(item =>
          item.details[state.filters.equipment[1]]
          );}
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addLocation, addEquipment } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
