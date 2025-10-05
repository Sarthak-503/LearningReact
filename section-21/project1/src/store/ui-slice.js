import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = { cartIsVisible: false };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialToggleState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
      // ReduxToolkit  use another third party library imer to ensure that this is actually
      //  translated to some immutable code which creates a new state object instead of manipulating
      // the existing one.
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
