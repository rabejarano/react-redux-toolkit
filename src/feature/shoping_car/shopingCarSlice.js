import { createSlice } from "@reduxjs/toolkit";

export const shopingCarSlice = createSlice({
  name: "shopingCar",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      console.log("action", action);
      let newElement = action.payload;
      state.value = [...state.value, newElement];
      console.log("state", state);
    },
    deleteProduct: (state, action) => {
      let { id } = { ...action.payload };
      let result = state.value.filter((element) => element.id != id);
      state.value = result;
    },
  },
});

export const { addProduct, deleteProduct } = shopingCarSlice.actions;
export const shopingCar = (state) => state.shopingCar.value

export default shopingCarSlice.reducer;
