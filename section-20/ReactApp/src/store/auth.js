import { createSlice } from "@reduxjs/toolkit";
// Initial States
const initialAuthState = {
    isAuthenticated: false,
  };
  const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    // Reducers Functions
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

  export const authActions = authSlice.actions;
  export default authSlice.reducer;
