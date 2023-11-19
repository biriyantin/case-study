// @ts-nocheck
/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { getContent, postCardInfo } from "./thunks";

const initialState: basketSliceState = {
  content: "",
  cardHolder: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
  cardInfo: {},
  status: "idle",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setCardHolder: (state, action: PayloadAction<string>) => {
      state.cardHolder = action.payload;
    },
    setCardNumber: (state, action: PayloadAction<string>) => {
      state.cardNumber = action.payload;
    },
    setExpiryDate: (state, action: PayloadAction<string>) => {
      state.expiryDate = action.payload;
    },
    setCvc: (state, action: PayloadAction<string>) => {
      state.cvc = action.payload;
    },
    setCardInfo: (state, action: PayloadAction<object>) => {
      state.cardInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getContent.fulfilled, (state, action) => {
        state.status = "idle";
        state.content = action.payload.content;
      })
      .addCase(postCardInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postCardInfo.fulfilled, (state, action) => {
        state.status = "idle";
        state.cardInfo = action.payload;
      });
  },
});

/* Types */
export interface basketSliceState {
  content: string;
  cardInfo: object;
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  status: "idle" | "loading" | "failed";
}
