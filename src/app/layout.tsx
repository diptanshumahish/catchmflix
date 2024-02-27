import type { Metadata } from "next";
import "../styles/globals.css";
import { general_sans } from "@/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/Common/Footer/Footer";
import InitialNavbar from "@/components/Common/Navigation/InitialNavbar";

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
                <InitialNavbar />
                {children}
                <Toaster />
                <Footer />
            </body>
        </html>
    );
}
