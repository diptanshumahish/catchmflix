"use client";
import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import useLanguage from "@/state-management/state/language.state";
import { static_images } from "@/static/static_images";
import { getStaticText } from "@/static/static_text";
import React from "react";

export default function OnboardTop() {
    const { lang } = useLanguage();
    const stt = getStaticText(lang.lang);
    return (
        <>
            <div className="relative">
                <ImageGradientHeader
                    imageLink={static_images.dummyBackgrounds[6]}
                />
            </div>
            <div className="flex flex-col  items-center  pt-[40vh] justify-center w-full">
                <h2 className="z-10 lg:text-5xl text-3xl font-medium text-white lg:max-w-[30%] text-center">
                    {stt.watchStuff}
                </h2>
                <span className="z-10 lg:text-5xl text-3xl font-bold text-primary-cyan">
                    @{stt.catchmflix}
                </span>
                <div className="text-secondary-text text-center z-10 lg:max-w-[40%] lg:px-0 px-[5%] py-6 text-sm">
                    <span>{stt.onboard1}</span>
                    <span className="font-medium text-white">
                        {stt.onboard2}
                    </span>
                    <span>{stt.onboard3}</span>
                </div>
            </div>
        </>
    );
}
