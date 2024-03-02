import type { Metadata } from "next";
import "../styles/globals.css";
import { general_sans } from "@/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
    title: "CatchMFlix",
    description: "entertainment redefined",
    authors: [{ name: "Diptanshu Mahish" }],
    openGraph: {
        title: "CatchMFlix",
        description: "entertainment redefined",
        images: "https://catchmflix.in/catchmflix.png",
        url: new URL("https://catchmflix.in"),
    },
    metadataBase: new URL("https://catchmflix.in"),
    keywords: [
        "CatchMflix",
        "catchmflix",
        "catch m flix",
        " Catchmflix",
        "CATCHMFLIX",
    ],
    robots: "index,follow",
    applicationName: "CatchMFlix",
    category: "entertainment",
    creator: "Diptanshu Mahish, Pradyumna Ghoshal",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(general_sans.className, "bg-design-black")}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
