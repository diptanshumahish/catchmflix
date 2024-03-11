import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LanguageState {
    lang: "en" | "tg";
}

const initialState: LanguageState = {
    lang: "en",
};

export const languageSlice = createSlice({
    name: "lang-slice",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<LanguageState>) => {
            console.log(action);
            state.lang = action.payload.lang ?? state.lang;
        },
    },
});
//As of now we have decided only on languages as Telugu and english
