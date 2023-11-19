// @ts-nocheck
/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { getProducts } from "./thunks";

const initialState: ProductsSliceState = {
  products: [],
  selectedProducts: [],
  selectedProduct: {},
  totalPrice: 0,
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeSelectedProducts: (state, action: PayloadAction<object[]>) => {
      state.selectedProducts = action.payload;
    },
    addToTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
    descToTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice -= action.payload;
    },
    changeSelectedProduct: (state, action: PayloadAction<object>) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

/* Types */
export interface ProductsSliceState {
  products: object[];
  selectedProducts: object[];
  selectedProduct: object;
  totalPrice: number;
  status: "idle" | "loading" | "failed";
}
