"use client";
import { Button } from "@/components/ui/button";
import { static_images } from "@/static/static_images";
import Image from "next/image";

import React from "react";
import LanguagesDrawer from "./LanguagesDrawer";
import MobileDropdown from "./MobileDropdown";
import Link from "next/link";
import NewLink from "./NewLink";
// import { Link } from "@/navigation";
interface Props {
    CatchMflixxText: string;
    entRed: string;
}

export default function InitialNavbar({ CatchMflixxText, entRed }: Props) {
    return (
        <nav className="fixed top-0 z-20  left-0 right-0 lg:px-[8%] px-[5%] pt-[2%]">
            <div className="flex justify-between border border-secondary-text p-3 lg:px-[3%] px-[5%] rounded-full border-opacity-40 backdrop-blur-sm">
                <Link href="/" className="flex items-center gap-4 text-white">
                    <Image
                        src={static_images.logo}
                        height={40}
                        width={40}
                        alt="main logo for CatchMflixx"
                        className="lg:size-10 size-8"
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className="font-medium">{CatchMflixxText}</h1>
                        <span className="text-secondary-text text-sm lg:block hidden">
                            entertainment redefined
                        </span>
                    </div>
                </Link>
                <div className="lg:flex items-center gap-4 hidden">
                    <div className="text-white flex gap-4  text-sm">
                        <NewLink link="/" content="Home" />
                        <NewLink link="/about-us" content="About Us" />
                        <NewLink link="/pricing" content="Pricing" />
                        {/* <Link href="/prizes">Prizes</Link> */}
                        <LanguagesDrawer />
                    </div>
                    <Button
                        asChild
                        className="rounded-full bg-primary-cyan text-white px-6 hover:bg-white hover:text-white"
                    >
                        <NewLink link="/onboard" content="Sign In" />
                    </Button>
                </div>
                <MobileDropdown />
            </div>
        </nav>
    );
}
