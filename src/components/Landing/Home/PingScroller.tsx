"use client";
import { static_images } from "@/static/static_images";
import React from "react";
import Image from "next/image";
import useLanguage from "@/state-management/state/language.state";
import { getStaticText } from "@/static/static_text";

export default function PingScroller() {
    const { lang } = useLanguage();
    const stt = getStaticText(lang.lang);
    return (
        <div className="flex flex-col justify-center animate-pulse gap-2 items-center py-[5%]">
            <Image
                src={static_images.circleSymbol}
                height={60}
                width={60}
                alt="circle symbol"
                className="object-cover animate-bounce"
            />
            <span className="text-secondary-text">{stt.scroll}</span>
        </div>
    );
}
