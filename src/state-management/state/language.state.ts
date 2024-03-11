import { useAppDispatch, useAppSelector } from "../Provider";
import { LanguageState, languageSlice } from "../store/language.store";

export default function useLanguage() {
    const state = useAppSelector((state) => state[languageSlice.name]);
    const dispatch = useAppDispatch();

    return {
        lang: state,
        setLang: (data: LanguageState) => {
            dispatch(languageSlice.actions.set(data));
        },
    };
}
