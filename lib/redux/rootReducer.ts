/* Instruments */
import { signupSlice } from "./slices";
import { productsSlice } from "./slices";
import { basketSlice } from "./slices";

export const reducer = {
  signup: signupSlice.reducer,
  products: productsSlice.reducer,
  basket: basketSlice.reducer,
};
