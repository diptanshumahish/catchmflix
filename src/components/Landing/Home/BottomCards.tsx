"use client";
import { InfiniteMovingCards } from "@/components/ui/infinitymovingcards";
import useLanguage from "@/state-management/state/language.state";
import { static_images } from "@/static/static_images";
import { getStaticText, static_text } from "@/static/static_text";
import React from "react";

const imgs = static_images.dummyBackgrounds;
export default function BottomCards() {
    const { lang } = useLanguage();
    const stt = getStaticText(lang.lang);
    return (
        <div className="w-full ">
            <div className="opacity-30">
                <InfiniteMovingCards
                    speed="slow"
                    items={imgs}
                    pauseOnHover={false}
                />
                <InfiniteMovingCards
                    items={imgs}
                    pauseOnHover={false}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className="flex flex-col py-6 lg:px-0 px-[5%]  gap-2 items-center justify-center  text-primary-cyan">
                <h3 className="text-4xl font-semibold text-center lg:max-w-[40%]">
                    {stt.getReady}
                </h3>
                <h3 className="text-3xl">{stt.comingsoon}</h3>
                <span className="text-white">{stt.stayTuned}</span>
            </div>
        </div>
    );
}
