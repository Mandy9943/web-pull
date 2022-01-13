import { configureStore } from "@reduxjs/toolkit";

import payReducer from "./feature/pay/paySlice";
import whatsappReducer from "./feature/whatsapp/whatsappReducer";

export function makeStore() {
  return configureStore({
    reducer: { pay: payReducer, whatsapp: whatsappReducer },
    devTools: process.env.NODE_ENV !== "production",
  });
}

const store = makeStore();

export default store;
