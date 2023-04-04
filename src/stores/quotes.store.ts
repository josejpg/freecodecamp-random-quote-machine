import { quotesReducer } from "../reducres/quotes.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: quotesReducer
});