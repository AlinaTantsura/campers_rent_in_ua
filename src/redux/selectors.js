export const selectData = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.selectIsLoading;
export const selectError = state => state.adverts.error;
export const selectLocation = state => state.adverts.filters.location;
export const selectEquipment = state => state.adverts.filters.equipment;
export const selectVehicleType = state => state.adverts.filters.vehicleType;
