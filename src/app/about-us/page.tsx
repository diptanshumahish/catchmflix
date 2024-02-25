import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";
import React from "react";

export default function page() {
    return (
        <div>
            <ImageGradientHeader
                imageLink={static_images.dummyBackgrounds[5]}
            />
            <div className="flex flex-col gap-8 items-center  pt-[40vh] justify-center w-full">
                <h2 className="z-10 text-5xl font-medium text-white max-w-[30%] text-center">
                    {static_text.en.aboutUs}
                </h2>
                <span className="z-10 text-secondary-text">
                    {static_text.en.aboutUsDetails}
                </span>
            </div>
            <div className="pt-[50vh]"></div>
        </div>
    );
}
