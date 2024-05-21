import { createSlice } from '@reduxjs/toolkit';
import { fetchAllData, fetchData } from './operations';
import { Notify } from 'notiflix';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filters: {
      location: '',
      vehicleType: '',
      equipment: [],
    },
  },
  reducers: {
    addLocation(state, action) {
      state.filters.location = action.payload;
    },
    addEquipment(state, action) {
      state.filters.equipment = action.payload;
    },
    addVehicleType(state, action) {
      state.filters.vehicleType = action.payload;
    },
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
      .addCase(fetchAllData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        if (state.filters.location) {
          state.items = state.items.filter(item =>
            item.location
              .toLowerCase()
              .includes(state.filters.location.toLowerCase())
          );
        }
        if (state.filters.equipment.length > 0) {
          state.items = state.items.filter(item =>
            state.filters.equipment.every(eq => {
              if (eq !== 'transmission') return item.details[eq];
              return item.transmission === 'automatic';
            })
          );
        }
        if (state.filters.vehicleType) {
          state.items = state.items.filter(
            item => item.form === state.filters.vehicleType
          );
        }
        if (state.items.length === 0)
          Notify.warning('There are no campers for current filter');
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addLocation, addEquipment, addVehicleType } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
