import React from "react";
import LogoImage from "../Logo/LogoImage";
import Link from "next/link";
import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import NewLink from "../Navigation/NewLink";

export default function Footer() {
    const t = useTranslations();
    return (
        <footer className="bg-secondary-violet flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between lg:items-center py-[5%] px-[8%]">
            <div className="flex flex-col gap-3">
                <LogoImage size={80} />
                <div>
                    <h3 className="text-2xl font-medium text-primary-cyan">
                        CatchMflixx
                    </h3>
                    <span className="text-secondary-text text-sm">
                        entertainment redefined
                    </span>
                </div>
            </div>
            <div className="flex flex-col lg:items-center lg:justify-center text-white">
                <span className="text-sm text-secondary-text">
                    {t("quickLinks")}
                </span>
                <NewLink link="/privacy-policy" content={t("privacyPolicy")} />
                <NewLink link="/privacy-policy" content={t("terms")} />
                <Link href="tel:+919281122332">+91 9281122332</Link>
                <span className="text-secondary-text">
                    &copy; CatchMflixx 2024
                </span>
            </div>
            <div className="text-white">
                <span>{t("contact")}</span>
                <div className="flex  gap-2 py-2">
                    <Link href="https://www.instagram.com/CatchMflixx?igsh=anVydzUyODRwazg1">
                        <Instagram />
                    </Link>
                    {/* <Link href="/">
                        <Facebook />
                    </Link> */}
                    <Link href="https://www.youtube.com/@CatchMflixx">
                        <Youtube />
                    </Link>
                    <Link href="tel:+919281122332">
                        <Phone />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
