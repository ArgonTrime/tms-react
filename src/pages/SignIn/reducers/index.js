const { createSlice } = require("@reduxjs/toolkit");
const { signInThunk } = require("../api");

const initialState = {
  isLoading: false,
  error: null,
  accountData: {},
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signInThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.accountData = payload;
    });
    builder.addCase(signInThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export default authSlice.reducer;
