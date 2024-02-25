import type { Metadata } from "next";
import "../styles/globals.css";
import { general_sans } from "@/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/Common/Footer/Footer";

export const metadata: Metadata = {
    title: "CatchMFlix",
    description: "entertainment redefined",
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
                <Footer />
            </body>
        </html>
    );
}
