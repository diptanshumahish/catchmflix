"use client";
import { Home, Search, Settings, Vote } from "lucide-react";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import NewLink from "../NewLink";

export default function MainNavigation() {
    const segments = useSelectedLayoutSegments()[1];

    return (
        <div className="w-screen z-50 fixed bottom-0 left-0 right-0 flex items-center justify-center py-4 ">
            <nav
                style={{ backdropFilter: "blur(15px)" }}
                className="max-w-[600px] z-50  flex gap-8 border border-white border-opacity-35 items-center justify-center text-sm bg-white text-white bg-opacity-5 p-2 rounded-full lg:px-[2%] px-[6%]"
            >
                <NewLink
                    className={twMerge(
                        segments === "search-now"
                            ? "opacity-100"
                            : "opacity-50",
                        "flex flex-col items-center hover:text-primary-cyan transition-opacity"
                    )}
                    link="/watch/watch-now"
                    data={
                        <>
                            <Home size={15} />
                            home
                        </>
                    }
                />
                <NewLink
                    className={twMerge(
                        segments === "search-now"
                            ? "opacity-100"
                            : "opacity-50",
                        "flex flex-col items-center hover:text-primary-cyan transition-opacity"
                    )}
                    link="/watch/search-now"
                    data={
                        <>
                            {" "}
                            <Search size={15} />
                            search
                        </>
                    }
                />
                <NewLink
                    className={twMerge(
                        segments === "search-now"
                            ? "opacity-100"
                            : "opacity-50",
                        "flex flex-col items-center hover:text-primary-cyan transition-opacity"
                    )}
                    link="/watch/settings"
                    data={
                        <>
                            {" "}
                            <Settings size={15} />
                            settings
                        </>
                    }
                />
            </nav>
        </div>
    );
}
