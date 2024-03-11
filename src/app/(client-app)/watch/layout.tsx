import MainNavigation from "@/components/Common/Navigation/MainApp/MainNavigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MainNavigation />
            {children}
        </>
    );
}
