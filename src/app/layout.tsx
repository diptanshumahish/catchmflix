import type { Metadata } from "next";
import "../styles/globals.css";
import { general_sans } from "@/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
    title: "CatchMFlix",
    description: "entertainment redefined",
    openGraph: {
        title: "CatchMFlix",
        description: "entertainment redefined",
        images: "https://catchmflix.vercel.app/catchmflix.png",
        url: new URL("https://catchmflix.vercel.app"),
    },
    metadataBase: new URL("https://catchmflix.vercel.app"),
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
