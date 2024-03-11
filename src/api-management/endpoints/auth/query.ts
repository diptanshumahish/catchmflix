// import {
//     AppMutationOptions,
//     AppQueryOption,
// } from "@/api-management/interceptor/Provider";
// import type {
//     ForgetPassword,
//     ForgetPasswordResponse,
//     Password,
//     Register,
//     Token,
//     VerifyUser,
//     UpdateUser,
//     UserResponse,
//     Verify,
//     UserDetails,
// } from "./models";
// import { useApiRoute } from "@/api-management/interceptor/client";
// import routes from "./routes";
// import { useMutation, useQuery } from "@tanstack/react-query";

// export function useRegister(
//     options?: AppMutationOptions<UserResponse, Register>
// ) {
//     const api = useApiRoute(routes);
//     const keys = [api.path, "register"];
//     return useMutation(keys, (data) => api.register(data), options);
// }

// export function useVerify(options?: AppMutationOptions<Token, Verify>) {
//     const api = useApiRoute(routes);
//     const keys = [api.path, "verify"];
//     return useMutation(keys, (data) => api.verify(data), options);
// }

// export function useLogin(options?: AppMutationOptions<Token, VerifyUser>) {
//     const api = useApiRoute(routes);
//     const keys = [api.path, "login"];
//     return useMutation(keys, (data) => api.login(data), options);
// }

// export function useForgetPassword(
//     options?: AppMutationOptions<ForgetPasswordResponse, ForgetPassword>
// ) {
//     const api = useApiRoute(routes);
//     const keys = [api.path, "forget"];
//     return useMutation(keys, (data) => api.forgetPassword(data), options);
// }

// export function useChangePassword(
//     options?: AppMutationOptions<string, Password>
// ) {
//     const api = useApiRoute(routes);
//     const keys = [api.path, "change"];
//     return useMutation(keys, (data) => api.changePassword(data), options);
// }

// export function useResendEmail(
//     options?: AppMutationOptions<string, ForgetPassword>
// ) {
//     const api = useApiRoute(routes);
//     const keys = [api.path, "resend"];
//     return useMutation(keys, (data) => api.resendEmail(data), options);
// }

// export function useUser(options?: AppQueryOption<UserResponse>) {
//     const api = useApiRoute(routes);
//     const key = [api.path, "user"];
//     return useQuery(key, () => api.user(), options);
// }

// export function useUpdateUser(
//     options?: AppMutationOptions<UserResponse, Partial<UpdateUser>>
// ) {
//     const api = useApiRoute(routes);
//     const keys = [api.path, "update"];
//     return useMutation(keys, (data) => api.updateUser(data), options);
// }

// export function useUserExists(
//     email: string,
//     options?: AppQueryOption<UserResponse>
// ) {
//     const api = useApiRoute(routes);
//     const key = [api.path, "user-exists", email];
//     return useQuery(key, () => api.userExists(email), options);
// }

// export function useUserDetails(
//     email: string,
//     options?: AppQueryOption<UserDetails>
// ) {
//     const api = useApiRoute(routes);
//     const key = [api.path, "user-details", email];
//     return useQuery(key, () => api.userDetails(email), options);
// }
