import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import OnboardWrapper from "@/components/Landing/Onboard/OnboardWrapper";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";
import React from "react";

export default function page() {
    return (
        <div>
            <div className="relative">
                <ImageGradientHeader
                    imageLink={static_images.dummyBackgrounds[6]}
                />
            </div>
            <div className="flex flex-col  items-center  pt-[40vh] justify-center w-full">
                <h2 className="z-10 lg:text-5xl text-3xl font-medium text-white lg:max-w-[30%] text-center">
                    {static_text.en.watchStuff}
                </h2>
                <span className="z-10 lg:text-5xl text-3xl font-bold text-primary-cyan">
                    @{static_text.en.catchmflix}
                </span>
                <div className="text-secondary-text text-center z-10 lg:max-w-[40%] py-6 text-sm">
                    <span>{static_text.en.onboard1}</span>
                    <span className="font-medium text-white">
                        {static_text.en.onboard2}
                    </span>
                    <span>{static_text.en.onboard3}</span>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <OnboardWrapper />
            </div>
        </div>
    );
}
