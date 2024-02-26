import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import BottomCards from "@/components/Landing/Home/BottomCards";
import PricingDiv from "@/components/Landing/Pricing/PricingDiv";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";
import React from "react";

export default function page() {
    return (
        <div>
            <div className="relative">
                <ImageGradientHeader
                    imageLink={static_images.dummyBackgrounds[4]}
                />
            </div>
            <div className="flex flex-col gap-8 items-center  pt-[40vh] justify-center w-full">
                <h2 className="z-10 lg:px-0 px-[5%] lg:text-5xl text-3xl font-medium text-white lg:max-w-[30%] text-center">
                    {static_text.en.pricing}
                </h2>
                <span className="z-10 text-secondary-text text-center px-[5%] w-[90%]">
                    {static_text.en.pricingDetails}
                </span>
            </div>
            <div className="pt-[10%] flex items-center justify-center z-10">
                <PricingDiv />
            </div>
            <BottomCards />
        </div>
    );
}
