"use client";

import {
    useSelector,
    useDispatch,
    TypedUseSelectorHook,
    Provider,
} from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
// import { userSlice } from "./store/user.store";
import React from "react";
import { languageSlice } from "./store/language.store";
import { userSlice } from "./store/user.store";

export const reducer = {
    [userSlice.name]: userSlice.reducer,
    [languageSlice.name]: languageSlice.reducer,
};

export const allStore = configureStore({
    reducer,
});

export type Stores = keyof typeof reducer;
export type RootState = ReturnType<typeof allStore.getState>;
export type AppDispatch = typeof allStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const createStore = (reducers: Array<Stores>) =>
    configureStore({
        reducer: Object.fromEntries(
            reducers.map((key) => [key, reducer[key]])
        ) as typeof reducer,
    });

export default function StateProvider({
    children,
    listener,
}: {
    listener?: (data: ReturnType<(typeof allStore)["getState"]>) => void;
    children: React.ReactNode;
}) {
    React.useEffect(() => {
        if (!listener) return;
        const unsubscribe = allStore.subscribe(() => {
            const storeData = allStore.getState();
            console.log("listener :", storeData);
            listener(storeData);
        });

        return () => {
            unsubscribe();
        };
    }, [listener]);
    return <Provider store={allStore}>{children}</Provider>;
}
