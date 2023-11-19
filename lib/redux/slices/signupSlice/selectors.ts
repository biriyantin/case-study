/* Instruments */
import type { ReduxState } from "@/lib/redux";
export const selectResponse = (state: ReduxState) => state.signup.message;
export const selectFullName = (state: ReduxState) => state.signup.fullName;
