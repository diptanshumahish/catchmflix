import { Button } from "@/components/ui/button";
import { static_images } from "@/static/static_images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguagesDrawer from "./LanguagesDrawer";

export default function InitialNavbar() {
    return (
        <nav className="fixed top-0 z-20  left-0 right-0 px-[8%] pt-[2%]">
            <div className="flex justify-between border border-secondary-text p-3 px-[3%] rounded-full border-opacity-40 backdrop-blur-sm">
                <Link href="/" className="flex items-center gap-4 text-white">
                    <Image
                        src={static_images.logo}
                        height={40}
                        width={40}
                        alt="main logo for catchmflix"
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className="font-medium">CatchMFlix</h1>
                        <span className="text-secondary-text text-sm">
                            entertainment redefined
                        </span>
                    </div>
                </Link>
                <div className="flex items-center gap-4 ">
                    <div className="text-white flex gap-4  text-sm">
                        <Link href="Home">Home</Link>
                        <Link href="Home">About Us</Link>
                        <Link href="Home">Pricing</Link>
                        <LanguagesDrawer />
                    </div>
                    <Button className="rounded-full bg-primary-cyan text-black px-6 hover:bg-white hover:text-white">
                        Sign In
                    </Button>
                </div>
            </div>
        </nav>
    );
}
