"use client";
import { Home, Search, Settings, Vote } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function MainNavigation() {
    const segments = useSelectedLayoutSegments()[0];

    return (
        <div className="w-screen z-50 fixed bottom-0 left-0 right-0 flex items-center justify-center py-4 ">
            <nav
                style={{ backdropFilter: "blur(15px)" }}
                className="max-w-[600px] z-50  flex gap-8 border border-white border-opacity-35 items-center justify-center text-sm bg-white text-white bg-opacity-5 p-2 rounded-full lg:px-[2%] px-[6%]"
            >
                <Link
                    className={twMerge(
                        segments === "watch-now" ? "opacity-100" : "opacity-50",
                        "flex flex-col items-center hover:text-primary-cyan transition-opacity"
                    )}
                    href="/watch/watch-now"
                >
                    <Home size={15} />
                    home
                </Link>
                <Link
                    className={twMerge(
                        segments === "search-now"
                            ? "opacity-100"
                            : "opacity-50",
                        "flex flex-col items-center hover:text-primary-cyan transition-opacity"
                    )}
                    href="/watch/search-now"
                >
                    <Search size={15} />
                    search
                </Link>
                <Link
                    className={twMerge(
                        segments === "settings" ? "opacity-100" : "opacity-50",
                        "flex flex-col items-center hover:text-primary-cyan transition-opacity"
                    )}
                    href="/watch/settings"
                >
                    <Settings size={15} />
                    settings
                </Link>
                {/* <Link
                    className={twMerge(
                        segments === "vote" ? "opacity-100" : "opacity-50",
                        "flex flex-col items-center hover:text-primary-cyan transition-opacity"
                    )}
                    href="/watch/watch-now"
                >
                    <Vote size={15} />
                    vote
                </Link> */}
            </nav>
        </div>
    );
}
