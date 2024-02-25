import React from "react";
import LogoImage from "../Logo/LogoImage";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary-violet flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between lg:items-center py-[5%] px-[8%]">
            <div className="flex flex-col gap-3">
                <LogoImage size={80} />
                <div>
                    <h3 className="text-2xl font-medium text-primary-cyan">
                        CatchMFlix
                    </h3>
                    <span className="text-secondary-text text-sm">
                        entertainment redefined
                    </span>
                </div>
            </div>
            <div className="flex flex-col lg:items-center lg:justify-center text-white">
                <span className="text-sm text-secondary-text">Quick Links</span>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Terms & conditions</Link>
                <span className="text-secondary-text">
                    &copy; CatchMFlix 2024
                </span>
            </div>
            <div className="text-white">
                <span>Find Us On</span>
                <div className="flex  gap-2 py-2">
                    <Link href="/">
                        <Instagram />
                    </Link>
                    <Link href="/">
                        <Facebook />
                    </Link>
                    <Link href="/">
                        <Youtube />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
