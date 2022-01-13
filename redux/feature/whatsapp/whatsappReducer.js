import { createSlice } from "@reduxjs/toolkit";
import { getNumberWhatsapp } from "../../../lib/config";

const initialState = {
  pretty: "",
  format: "",
};

export const whatsappSlice = createSlice({
  name: "whatsapp",
  initialState,
  reducers: {
    setNumber: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.pretty === "") {
        const { pretty, format } = getNumberWhatsapp();
        state.pretty = pretty;
        state.format = format;
      }
    },
  },
});
export const { setNumber } = whatsappSlice.actions;

export const selectPretty = (state) => state.whatsapp.pretty;
export const selectFormat = (state) => state.whatsapp.format;

export default whatsappSlice.reducer;
