import { Button } from "@/components/ui/button";
import { static_text } from "@/static/static_text";
import { ArrowUpRight, Film } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ForMovieMakers() {
    return (
        <div className="bg-primary-cyan w-full lg:px-[8%] px-[5%] py-6 flex flex-col lg:gap-0 gap-4 ">
            <span className="bg-design-black px-4 rounded-md text-primary-cyan py-1 w-fit">
                Amazing opportunity
            </span>
            <div className="flex justify-between lg:flex-row flex-col-reverse  lg:items-center">
                <h2 className="lg:text-6xl font-medium text-4xl lg:w-[60%]">
                    Lights, Camera, Aspire
                </h2>
                <Film size={80} />
            </div>
            <span className="lg:text-lg  lg:w-[70%]">{static_text.en.ad2}</span>
            <Button className="w-fit bg-transparent text-design-black px-0 border-b border-black rounded-none">
                <Link
                    href="/prizes"
                    className="flex items-center text-lg font-medium"
                >
                    {" "}
                    Let&apos;s Go <ArrowUpRight />
                </Link>
            </Button>
        </div>
    );
}
