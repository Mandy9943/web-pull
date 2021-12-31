import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  price: 0,
  img: "",
  product_id: 0,
  title: "",
  brand: "",
  count: 0,
  isFormOpen: false,
};

export const paySlice = createSlice({
  name: "pay",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCount: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count = action.payload;
    },
    setData: (state, action) => {
      state.category = action.payload.category;
      state.price = action.payload.price;
      state.img = action.payload.img;
      state.product_id = action.payload.product_id;
      state.title = action.payload.title;
      state.brand = action.payload.brand;
    },
    openForm: (state, action) => {
      state.isFormOpen = action.payload;
    },
  },
});

export const { setCount, setData, openForm } = paySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.pay.count;
export const selectIsFormOpen = (state) => state.pay.isFormOpen;
export const selectData = (state) => state.pay;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default paySlice.reducer;
