"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLanguage from "@/state-management/state/language.state";
import { static_images } from "@/static/static_images";
import { getStaticText, static_text } from "@/static/static_text";
import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ComingSoon() {
    const { lang } = useLanguage();
    const stt = getStaticText(lang.lang);
    return (
        <div className=" py-[5%] flex flex-col gap-4 items-center justify-center lg:px-[8%] px-[5%] relative overflow-hidden">
            <div className="text-primary-cyan flex flex-col gap-1 items-center justify-center">
                <Quote size={32} />
                <h2 className=" text-3xl font-semibold">{stt.comingsoon}</h2>
                <span className="text-sm text-secondary-text">
                    {stt.closeTo}
                </span>
            </div>
            <div className="w-full lg:p-8 p-4 bg-secondary-violet border border-white border-opacity-40 rounded-md flex justify-between lg:flex-row flex-col items-center lg:gap-0 gap-6">
                <div className="lg:w-[50%]">
                    <Image
                        src={static_images.dummyBackgrounds[3]}
                        height={600}
                        width={400}
                        alt="poster"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="lg:w-[40%] flex flex-col lg:gap-8 gap-4">
                    <Image
                        src={static_images.logo}
                        alt="logo"
                        height={180}
                        width={180}
                        className="animate-pulse lg:size-[180px] size-[80px]"
                    />
                    <div className="text-5xl flex flex-col gap-2 font-semibold text-primary-cyan">
                        <h2>{stt.excited}</h2>
                        <h2 className="text-white">{stt.already}</h2>
                    </div>
                    <div className="text-secondary-text flex flex-col">
                        <span>{stt.weToo}</span>
                        <span>{stt.join}</span>
                    </div>
                    <form action="" className="flex flex-col gap-2">
                        <Input
                            type="email"
                            placeholder="johndoe@email.com"
                            className="bg-opacity-10 rounded-full text-white"
                        />
                        <Button
                            className="w-fit bg-transparent px-0 border-b rounded-none"
                            type="submit"
                        >
                            {stt.letsGo} <ArrowUpRight />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
