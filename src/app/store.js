import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import shopingCarReducer from "../feature/shoping_car/shopingCarSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    shopingCar: shopingCarReducer,
  },
});
