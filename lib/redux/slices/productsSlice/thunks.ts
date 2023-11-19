/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchProducts } from "./fetchProducts";

export const getProducts = createAppAsyncThunk("products/fetchProducts", async () => {
  const response = await fetchProducts();
  return response;
});
