import { static_images } from "@/static/static_images";
import Image from "next/image";
import React from "react";
import BottomCards from "../Home/BottomCards";
import { useTranslations } from "next-intl";

export default function AboutUsSection1() {
    const t = useTranslations();
    return (
        <div className="z-10 lg:px-[8%] px-[5%] py-[8%] pt-[10%] flex items-center flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-2 w-full">
                <div className="flex items-center lg:flex-row flex-col lg:gap-0 gap-4 justify-between w-full">
                    <Image
                        src={static_images.dummyBackgrounds[5]}
                        height={600}
                        width={1920}
                        className="aspect-square size-[500px] rounded-md  object-cover"
                        alt="Sample "
                    />
                    <div className="flex flex-col w-full lg:pl-[5%] gap-4">
                        <h2 className="lg:text-5xl text-primary-cyan  font-semibold text-3xl z-10">
                            🌟 {t("local")}
                        </h2>
                        <span className=" text-secondary-text ">
                            {t("aboutus1")}
                        </span>

                        <div className="text-white flex flex-col gap-2 italic border-t border-white border-opacity-20 pt-3">
                            <h3 className="lg:text-3xl text-2xl font-medium">
                                🚀 {t("talent")}
                            </h3>
                            <span className="text-secondary-text">
                                {t("local_talent")}
                            </span>
                        </div>
                        <div className="text-white flex flex-col gap-2 italic">
                            <h3 className="lg:text-3xl text-2xl font-medium">
                                🗣️ {t("nat")}
                            </h3>
                            <span className="text-secondary-text">
                                {t("native_language")}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full py-6 flex flex-col justify-center items-center text-white">
                    <Image
                        src={static_images.devices}
                        width={1920}
                        height={600}
                        alt="devices"
                        className="w-full h-auto rounded-md"
                    />
                    <h3 className="lg:text-4xl font-medium text-2xl  text-primary-cyan">
                        {t("stream_anywhere")}
                    </h3>
                    <span className="lg:text-center text-secondary-text pt-2">
                        {t("stream_text")}
                    </span>
                </div>
                <BottomCards />
            </div>
        </div>
    );
}
