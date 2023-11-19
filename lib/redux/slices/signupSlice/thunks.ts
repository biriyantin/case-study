/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchSignup } from "./fetchSignup";

export const postSignup = createAppAsyncThunk("login/signup", async (payload: object) => {
  const response = await fetchSignup(payload);

  return response;
});
