import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import AboutUsSection1 from "@/components/Landing/AboutUs/AboutUsSection1";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";
import React from "react";

export default function page() {
    return (
        <div>
            <ImageGradientHeader
                imageLink={static_images.dummyBackgrounds[7]}
            />
            <div className="flex flex-col gap-8 items-center  pt-[40vh] justify-center w-full">
                <h2 className="z-10 lg:text-5xl text-3xl font-medium text-white lg:max-w-[30%] text-center">
                    {static_text.en.aboutUs}
                </h2>
                <span className="z-10 text-secondary-text text-center px-[5%]">
                    {static_text.en.aboutUsDetails}
                </span>
            </div>
            <AboutUsSection1 />
        </div>
    );
}
