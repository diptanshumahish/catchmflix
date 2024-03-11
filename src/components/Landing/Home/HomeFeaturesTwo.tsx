"use client";
import useLanguage from "@/state-management/state/language.state";
import { static_images } from "@/static/static_images";
import { getStaticText, static_text } from "@/static/static_text";
import { Crown } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HomeFeaturesTwo() {
    const { lang } = useLanguage();
    const stt = getStaticText(lang.lang);
    return (
        <div className=" py-[5%] flex flex-col gap-4 items-center justify-center lg:px-[8%] px-[5%] relative overflow-hidden">
            <Image
                src={static_images.dotSymbol}
                height={400}
                width={400}
                alt="background"
                className="absolute -z-0 lg:h-[600px] lg:w-[600px] right-[-300px] animate-pulse "
            />
            <div className="flex flex-col gap-1 items-center justify-center text-primary-cyan">
                <Crown size={25} />
                <h2 className=" text-3xl font-semibold">{stt.amazc}</h2>
                <span className="text-sm text-secondary-text">
                    ({stt.rather})
                </span>
            </div>
            <Image
                src={static_images.dummyBackgrounds[1]}
                height={1080}
                width={1920}
                alt="Background image"
                className="h-[60vh] w-full object-cover rounded-md border border-secondary-text z-10 border-opacity-40 "
            />
            <div className="border-l-4 flex flex-col gap-4 border-primary-cyan pl-6">
                <h3 className="lg:text-4xl text-2xl  text-white">
                    <span className="text-primary-cyan font-bold">
                        {stt.qlty}
                    </span>
                    , {stt.bestA}
                </h3>
                <span className="text-secondary-text lg:text-md text-sm">
                    {stt.contentquality}
                </span>
            </div>
        </div>
    );
}
