import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import { static_images } from "@/static/static_images";
import { useTranslations } from "next-intl";
import React from "react";

export default function OnboardTop() {
    const t = useTranslations();
    return (
        <>
            <div className="relative">
                <ImageGradientHeader
                    imageLink={static_images.dummyBackgrounds[6]}
                />
            </div>
            <div className="flex flex-col  items-center  pt-[40vh] justify-center w-full">
                <h2 className="z-10 lg:text-5xl text-3xl font-medium text-white lg:max-w-[30%] text-center">
                    {t("watchStuff")}
                </h2>
                <span className="z-10 lg:text-5xl text-3xl font-bold text-primary-cyan">
                    @{t("catchmflix")}
                </span>
                <div className="text-secondary-text text-center z-10 lg:max-w-[40%] lg:px-0 px-[5%] py-6 text-sm">
                    <span>{t("onboard1")}</span>
                    <span className="font-medium text-white">
                        {t("onboard2")}
                    </span>
                    <span>{t("onboard3")}</span>
                </div>
            </div>
        </>
    );
}
