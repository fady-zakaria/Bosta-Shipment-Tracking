import { configureStore } from "@reduxjs/toolkit";
import shipmentsTrackSlice from "./features/shipmentsTrackSlice/shipmentsTrackSlice";
import languageSlice from "./features/languageSlice/languageSlice";

export const store = configureStore({
  reducer: {
    shipmentsState: shipmentsTrackSlice,
    languageState: languageSlice,
  },
});
