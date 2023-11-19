/* Instruments */
import type { ReduxState } from "@/lib/redux";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectContent = (state: ReduxState) => state.basket.content;
export const selectCardInfo = (state: ReduxState) => state.basket.cardInfo;
export const selectCardHolder = (state: ReduxState) => state.basket.cardHolder;
export const selectCardNumber = (state: ReduxState) => state.basket.cardNumber;
export const selectExpiryDate = (state: ReduxState) => state.basket.expiryDate;
export const selectCvc = (state: ReduxState) => state.basket.cvc;
