/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { postSignup } from "./thunks";

const initialState: SignupSliceState = {
  message: "",
  fullName: "",
  status: "idle",
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    saveFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSignup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postSignup.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload;
      });
  },
});

/* Types */
export interface SignupSliceState {
  message: any;
  fullName: string;
  status: "idle" | "loading" | "failed";
}
