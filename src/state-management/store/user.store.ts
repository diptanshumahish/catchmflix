import { Role } from "@/api-management/endpoints/auth/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    first_name: string;
    last_name: string;
    image: string;
    email: string;
    username: string;
    is_verified: boolean;
    client_ready: boolean;
    token: string;
    logged_in: boolean;
    role: Role;
    is_prime: boolean;
}

const initialState: UserState = {
    first_name: "",
    last_name: "",
    role: Role.User,
    is_verified: false,
    username: "",
    image: "",
    email: "",
    client_ready: false,
    token: "unprotected",
    logged_in: false,
    is_prime: false,
};

export const userSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Partial<UserState>>) => {
            console.log(action);
            state.client_ready =
                action.payload.client_ready ?? state.client_ready;
            state.logged_in = action.payload.logged_in ?? state.logged_in;
            state.token = action.payload.token ?? state.token;
            state.username = action.payload.username ?? state.username;
            state.email = action.payload.email ?? state.email;
            state.last_name = action.payload.last_name ?? state.last_name;
            state.first_name = action.payload.first_name ?? state.first_name;
            state.image = action.payload.image ?? state.image;
            state.is_prime = action.payload.is_prime ?? state.is_prime;
        },
    },
});
