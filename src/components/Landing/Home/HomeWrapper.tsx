import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import useLanguage from "@/state-management/state/language.state";
import { static_images } from "@/static/static_images";
import { getStaticText } from "@/static/static_text";
import React from "react";
import { useTranslations } from "next-intl";

export default function HomeWrapper() {
    const t = useTranslations();
    return (
        <div>
            {" "}
            <div className="relative">
                <ImageGradientHeader
                    imageLink={static_images.dummyBackgrounds[0]}
                />
            </div>
            <div className="flex flex-col gap-8 items-center  pt-[40vh] justify-center w-full">
                <div className="z-10 lg:text-sm text-xs text-white bg-secondary-text px-4 py-1 rounded-full bg-opacity-20 border border-white border-opacity-20">
                    {t("landingTop")}
                </div>
                <h2 className="z-10 lg:text-5xl md:text-4xl text-3xl font-medium lg:px-0 px-[5%] text-white lg:max-w-[30%]  text-center">
                    {t("landing_header1")}
                    <span className="font-semibold text-primary-cyan">
                        {" "}
                        {t("landing_header2")}
                    </span>{" "}
                    {t("landing_header3")}
                    <span className="font-semibold text-primary-cyan">
                        {t("landing_header4")}
                    </span>
                </h2>
            </div>
        </div>
    );
}
