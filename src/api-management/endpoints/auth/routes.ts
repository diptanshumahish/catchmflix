// import { AxiosInstance } from "axios";
// import {
//     ForgetPassword,
//     ForgetPasswordResponse,
//     Password,
//     Register,
//     Token,
//     UpdateUser,
//     UserDetails,
//     UserResponse,
//     Verify,
//     VerifyUser,
// } from "./models";

// export default (api: AxiosInstance) => ({
//     path: "/auth",
//     register(data: Register) {
//         const route = this.path + "/register";
//         return api.post<UserResponse>(route, data);
//     },
//     verify(data: Verify) {
//         const route = this.path + "/verify";
//         return api.put<Token>(route, data);
//     },
//     login(data: VerifyUser) {
//         const route = this.path + "/login";
//         return api.post<Token>(route, undefined, {
//             auth: {
//                 username: data.email,
//                 password: data.password,
//             },
//         });
//     },
//     forgetPassword(data: ForgetPassword) {
//         const route = this.path + "/forget";
//         return api.post<ForgetPasswordResponse>(route, data);
//     },
//     changePassword(data: Password) {
//         const route = this.path + "/update/password";
//         return api.put<string>(route, data);
//     },
//     resendEmail(data: ForgetPassword) {
//         const route = this.path + "/resend/email";
//         return api.put<string>(route, data);
//     },
//     user() {
//         return api.get<UserResponse>(this.path);
//     },
//     userDetails(email: string) {
//         const route = this.path + `/details/of/${email}`;
//         return api.get<UserDetails>(route);
//     },
//     updateUser(data: Partial<UpdateUser>) {
//         return api.put<UserResponse>(this.path, data);
//     },
//     userExists(email: string) {
//         const route = this.path + `/existance/of/${email}`;
//         return api.get<UserResponse>(route);
//     },
// });
