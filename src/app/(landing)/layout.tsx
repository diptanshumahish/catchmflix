import type { Metadata } from "next";

import Footer from "@/components/Common/Footer/Footer";
import InitialNavbar from "@/components/Common/Navigation/InitialNavbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <InitialNavbar />
            {children}

            <Footer />
        </>
    );
}
