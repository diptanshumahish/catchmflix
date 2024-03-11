"use client";
//import auth from "@/api-management/endpoints/auth";
import ApiProvider from "@/api-management/interceptor/Provider";

import {
    Provider as StateProvider,
    // UserState,
    // userState,
} from "@/state-management/";
import useLanguage from "@/state-management/state/language.state";
import { LanguageState } from "@/state-management/store/language.store";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { ReceiptRussianRuble } from "lucide-react";

import React, { useEffect, useRef } from "react";

// import bookmark from "@/api-management/endpoints/bookmark";
// import useBookmark from "@/state-management/state/bookmark.state";

// function saveUserData(data: UserState) {
//     localStorage.setItem("user", JSON.stringify(data));
//     setCookie("token", data.token);
// }
function saveLanguageData(data: LanguageState) {
    localStorage.setItem("lang", JSON.stringify(data));
    setCookie("lang", data.lang);
}
export default function ClientProvider({ children }: React.PropsWithChildren) {
    return (
        <>
            <StateProvider
                listener={(data) => {
                    // const user = data["user-slice"];
                    // saveUserData(user);
                    saveLanguageData(data["lang-slice"]);
                }}
            >
                <ApiProvider>
                    <MainApp>{children}</MainApp>
                </ApiProvider>
            </StateProvider>
        </>
    );
}

type StartupApis = "user" | "lang";

function MainApp({ children }: React.PropsWithChildren) {
    // const { user, setUser } = userState();
    // const { setBookmarkFolders } = useBookmark();
    const { lang, setLang } = useLanguage();
    const fetched = useRef<StartupApis[]>([]);
    // const user_query = auth.queries.useUser({
    //     onError: (err) => {
    //         console.log("error here in Client Provider");
    //         console.log(err);
    //     },

    //     enabled: false,
    //     onSuccess: (data) => {
    //         fetched.current = [...fetched.current, "user"];
    //         const userData = data.data;
    //         console.log(userData);
    //         setUser({
    //             email: userData.email,
    //             username: userData.username,
    //             first_name: userData.first_name,
    //             last_name: userData.last_name,
    //             image: userData.image,
    //             is_verified: userData.is_verified,
    //             role: userData.role,
    //             is_prime: userData.is_prime,
    //         });
    //         if (!fetched.current.includes("bookmarks")) {
    //             book.refetch();
    //         }
    //     },
    // });
    //bookmarks
    // const book = bookmark.queries.useGetAllBookmarks(user.username, {
    //     enabled: false,
    //     onSuccess: (data) => {
    //         fetched.current = [...fetched.current, "bookmarks"];
    //         setBookmarkFolders(data.data);
    //     },
    // });

    // useEffect(() => {
    //     const localData = localStorage.getItem("user");
    //     if (!localData) {
    //         if (hasCookie("token")) {
    //             const token = getCookie("token")?.toString();
    //             if (token) {
    //                 setUser({
    //                     token: token,
    //                     logged_in: true,
    //                     client_ready: true,
    //                 });
    //                 return;
    //             }
    //         }

    //         setUser({
    //             logged_in: false,
    //             client_ready: true,
    //         });
    //     } else {
    //         const data = JSON.parse(localData);
    //         console.log(data);
    //         setUser({
    //             ...data,
    //             // logged_in: true,
    //             client_ready: true,
    //         });
    //     }
    // }, []);

    // useEffect(() => {
    //     if (!user.client_ready) return;
    //     if (!user.logged_in) return;
    //     if (!fetched.current.includes("user")) {
    //         user_query.refetch();
    //     }
    // }, [user.logged_in, user.client_ready, user_query]);

    useEffect(() => {
        const localData = localStorage.getItem("lang");
        if (localData) {
            const data = JSON.parse(localData);
            setLang({ lang: data });
        }
    }, []);

    // if (!user.client_ready)
    //     return (
    //         <div className="h-screen w-screen flex-col flex items-center justify-center text-font-tertiary">
    //             Loading
    //             <LoadingColorIndicator />
    //         </div>
    //     );

    return <>{children}</>;
}
