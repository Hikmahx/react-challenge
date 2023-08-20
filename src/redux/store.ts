import { configureStore } from "@reduxjs/toolkit";
import analysisReducer from "./reducers/analysisSlice";

export const store = configureStore({
  reducer: {
    analysis: analysisReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;