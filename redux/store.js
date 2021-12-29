import { configureStore } from "@reduxjs/toolkit";

import payReducer from "./feature/pay/paySlice";

export function makeStore() {
  return configureStore({
    reducer: { pay: payReducer },
    devTools: process.env.NODE_ENV !== "production",
  });
}

const store = makeStore();

export default store;
