"use client";
import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import useLanguage from "@/state-management/state/language.state";
import { static_images } from "@/static/static_images";
import { getStaticText } from "@/static/static_text";
import React from "react";

export default function AboutUsTop() {
    const { lang } = useLanguage();
    const stt = getStaticText(lang.lang);
    return (
        <>
            <ImageGradientHeader
                imageLink={static_images.dummyBackgrounds[7]}
            />
            <div className="flex flex-col gap-8 items-center  pt-[40vh] justify-center w-full">
                <h2 className="z-10 lg:text-5xl text-3xl font-medium text-white lg:max-w-[30%] text-center">
                    {stt.aboutUs}
                </h2>
                <span className="z-10 text-secondary-text text-center px-[5%]">
                    {stt.aboutUsDetails}
                </span>
            </div>
        </>
    );
}
