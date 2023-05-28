import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productSlice } from "./productSlice";

export const store = configureStore({
  reducer: {
    [productSlice.reducerPath]: productSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productSlice.middleware),
});

setupListeners(store.dispatch);
