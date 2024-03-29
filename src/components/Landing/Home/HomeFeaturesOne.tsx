import { static_images } from "@/static/static_images";
import { Sparkle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function HomeFeaturesOne() {
    const t = useTranslations();
    return (
        <div className=" pt-[10%] pb-[5%] flex flex-col gap-4 items-center justify-center lg:px-[8%] px-[5%] relative overflow-hidden ">
            <Image
                src={static_images.circleSymbol}
                height={400}
                width={400}
                alt="background"
                className="absolute lg:h-[600px] lg:w-[600px] left-[-300px] -z-0 opacity-5 animate-bounce"
            />
            <div className="flex flex-col gap-1 items-center justify-center text-primary-cyan">
                <Sparkle size={25} />
                <h2 className=" text-3xl font-semibold">{t("freewatch")}</h2>
                <span className="text-sm text-secondary-text">
                    ({t("catch")})
                </span>
            </div>
            <Image
                src={static_images.dummyBackgrounds[2]}
                height={1080}
                width={1920}
                alt="Background image"
                className="h-[60vh] w-full object-cover rounded-md border border-secondary-text border-opacity-40 z-10"
            />
            <div className="border-l-4 flex flex-col gap-4 border-primary-cyan pl-6">
                <h3 className="lg:text-4xl text-2xl  text-white">
                    <span className="text-primary-cyan font-bold">
                        {t("ft1")}
                    </span>
                    , {t("ft2")}
                </h3>
                <span className="text-secondary-text lg:text-md text-sm">
                    {t("noCatch")}
                </span>
            </div>
        </div>
    );
}
