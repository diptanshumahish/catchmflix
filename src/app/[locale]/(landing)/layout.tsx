import Footer from "@/components/Common/Footer/Footer";
import InitialNavbar from "@/components/Common/Navigation/InitialNavbar";
import { useTranslations } from "next-intl";

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const t = useTranslations();
    return (
        <>
            <InitialNavbar catchmflixText={t("catchmflix")} entRed="" />
            {children}

            <Footer />
        </>
    );
}
