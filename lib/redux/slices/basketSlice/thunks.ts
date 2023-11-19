/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchContent } from "./fetchContent";
import { fetchCardInfo } from "./fetchCardInfo";

export const getContent = createAppAsyncThunk("basket/fetchContent", async () => {
  const response = await fetchContent();
  return response;
});

export const postCardInfo = createAppAsyncThunk("basket/fetchCardInfo", async (payload: object) => {
  const response = await fetchCardInfo(payload);
  return response.data;
});
