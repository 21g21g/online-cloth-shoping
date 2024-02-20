import { configureStore } from "@reduxjs/toolkit";
import eccomerceSlice from "./EccomerceReducer";

const store = configureStore({
  reducer: {
    eco: eccomerceSlice.reducer,
  },
});

export default store;
