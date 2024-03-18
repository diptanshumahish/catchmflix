import type { Metadata } from "next";
import "../../styles/globals.css";
import { general_sans } from "@/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
    title: "CatchMflixx",
    description: "entertainment redefined",
    authors: [{ name: "Diptanshu Mahish" }],
    openGraph: {
        title: "CatchMflixx",
        description: "entertainment redefined",
        images: "https://CatchMflixx.com/catchmflix.png",
        url: new URL("https://CatchMflixx.com"),
    },
    metadataBase: new URL("https://CatchMflixx.com"),
    keywords: [
        "CatchMflixx",
        "CatchMflixx",
        "catch m flix",
        " CatchMflixx",
        "CatchMflixx",
    ],
    robots: "index,follow",
    applicationName: "CatchMflixx",
    category: "entertainment",
    creator: "Diptanshu Mahish, Pradyumna Ghoshal",
};

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={locale}>
            <body
                className={twMerge(general_sans.className, "bg-design-black")}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
